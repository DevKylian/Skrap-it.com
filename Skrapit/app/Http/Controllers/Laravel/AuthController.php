<?php

namespace App\Http\Controllers\Laravel;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmailRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Mail\ResetPasswordMail;
use App\Mail\WelcomeMail;
use App\Model\Laravel\Token;
use App\Model\Laravel\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('jwtauth', ['except' => ['login', 'register', 'activate', 'requestActivation', 'requestResetPassword', 'resetPassword']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);
        $ttl = env('JWT_TTL');

        $user = User::where('email', request('email'))->first();

        if (request(['remember_me']) == true) $ttl = env('JWT_REMEMBER_TTL');

        if (!$token = auth()->attempt($credentials))
            return response()->json(['errors' => ['email' => ['Wrong credentials.']]], 402);

        if (!$user->isActivated())
            return response()->json(['errors' => ['email' => ['Your account is not activated.']]], 402);

        if ($user->isBanned())
            return response()->json(['errors' => ['email' => ['Your account is banned.']]], 402);

        return $this->respondWithToken($token, $ttl);
    }

    /**
     * Register api
     *
     * @param RegisterRequest $request
     * @param Token $token
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegisterRequest $request, Token $token)
    {
        $user = User::create([
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        $token = $token->generateToken(1, $user->id);

        Mail::to($user->email)->send(new WelcomeMail($user, $token));

        return response()->json(['success' => 'Please check your emails to activate your account !'], 200);
    }

    /**
     * @param EmailRequest $request
     * @param User $user
     * @param Token $token
     * @return \Illuminate\Http\JsonResponse
     */
    public function requestActivation(EmailRequest $request, User $user, Token $token)
    {
        $type = 1;
        $user = $user->getUserByEmail($request->input('email'));

        if(!$user)
            return response()->json(['errors' => ['email' => ['This user doesn\'t exist.']]], 402);

        if($user->status != 0)
            return response()->json(['errors' => ['email' => ['This accout is already activated.']]], 402);

        $checkToken = Token::where(['user_id' => $user->id, 'type' => $type])->withTrashed()->latest()->first();

        if(isset($checkToken) && date($checkToken->deleted_at) > now())
            return response()->json(['errors' => ['email' => ['An email has already been sent. Please wait 30 minutes.']]], 402);

        $token = $token->generateToken($type, $user->id);

        Mail::to($user->email)->send(new WelcomeMail($user, $token));

        return response()->json(['success' => 'Please check your emails to activate your account !'], 200);
    }

    /**
     * @param $token
     * @return \Illuminate\Http\JsonResponse
     */
    public function activate($token)
    {
        $token = Token::where('token', $token)->withTrashed()->latest()->first();

        if(!$token)
            return response()->json(['errors' => ['token' => ['This token doesn\'t exist.']]], 402);

        $user = User::where('id', $token->user_id)->first();

        if($user->status != 0)
            return response()->json(['errors' => ['token' => ['This accout is already activated.']]], 402);

        if(date($token->deleted_at) < now())
            return response()->json(['errors' => ['token' => ['This token is expired.']]], 402);

        $user->status = 1;
        $user->save();

        $token->delete();

        return response()->json(['success' => 'Your account is successfully activated.'], 200);
    }

    /**
     * @param EmailRequest $request
     * @param User $user
     * @param Token $token
     * @return \Illuminate\Http\JsonResponse
     */
    public function requestResetPassword(EmailRequest $request, User $user, Token $token)
    {
        $type = 2;
        $user = $user->getUserByEmail($request->input('email'));

        if(!$user)
            return response()->json(['errors' => ['email' => ['This user doesn\'t exist.']]], 402);

        $checkToken = Token::where(['user_id' => $user->id, 'type' => $type])->withTrashed()->latest()->first();

        if(isset($checkToken) && date($checkToken->deleted_at) > now())
            return response()->json(['errors' => ['email' => ['An email has already been sent. Please wait 30 minutes.']]], 402);

        $token = $token->generateToken($type, $user->id);

        Mail::to($user->email)->send(new ResetPasswordMail($token));

        return response()->json(['success' => 'Please check your emails to reset your password !'], 200);
    }

    /**
     * @param ResetPasswordRequest $request
     * @param $token
     * @return \Illuminate\Http\JsonResponse
     */
    public function resetPassword(ResetPasswordRequest $request, $token)
    {
        $type = 2;

        $token = Token::where(['token' => $token, 'type' => $type])->withTrashed()->latest()->first();

        if(!$token)
            return response()->json(['errors' => ['password' => ['This token doesn\'t exist.']]], 402);

        $user = User::where(['id' => $token->user_id])->first();

        if(date($token->deleted_at) < now())
            return response()->json(['errors' => ['password' => ['This token is expired.']]], 402);

        $token->delete();

        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json(['success' => 'The password has been correctly modified !']);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return User::where('id', auth()->user()->id)
            ->with(['apis', 'package'])
            ->first();
    }

    public function checkToken()
    {
        return response()->json(['success' => true], 200);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['success' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @param $ttl
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $ttl)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $ttl
        ]);
    }
}
