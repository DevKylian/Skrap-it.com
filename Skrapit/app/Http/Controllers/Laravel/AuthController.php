<?php

namespace App\Http\Controllers\Laravel;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Model\Laravel\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('jwtauth', ['except' => ['login', 'register']]);
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

        if (request(['remember_me']) == true) {
            $ttl = env('JWT_REMEMBER_TTL');
        }

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Wrong credentials'], 401);
        }

        return $this->respondWithToken($token, $ttl);
    }

    /**
     * Register api
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegisterRequest $request)
    {
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        User::create($input);

        return $this->login($input);
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

        return response()->json(['message' => 'Successfully logged out']);
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
