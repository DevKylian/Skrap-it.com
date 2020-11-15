<?php

namespace App\Http\Controllers\Laravel;


use App\Http\Controllers\Controller;
use App\Http\Requests\EditProfileRequest;
use App\Http\Requests\PasswordRequest;
use App\Http\Requests\WhitelistIPRequest;
use App\Model\Laravel\User;
use App\Model\Laravel\Whitelist;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('jwtauth', ['except' => []]);
    }

    public function editProfile(EditProfileRequest $request)
    {
        $user = User::where('id', auth()->user()->id)->first();

        $input = $request->all();
        $user->fill($input)->save();

        return response()->json(['success' => 'Profile successfully updated !'], 200);
    }

    public function editPassword(PasswordRequest $request)
    {
        $user = User::where('id', auth()->user()->id)->first();

        $user->password = bcrypt($request->input('password'));
        $user->save();

        return response()->json(['success' => 'Password successfully updated !']);
    }

    public function whitelistIP(WhitelistIPRequest $request)
    {
        $whitelistIP = Whitelist::where(['user_id' => auth()->user()->id, 'ip_address' => $request->ip_address])->get();

        if(!$whitelistIP->isEmpty())
            return response()->json(['errors' => ['ip_address' => ['This whitelist already exist.']]], 402);

        $whitelistIP = Whitelist::where('user_id' , auth()->user()->id)->get();

        if($whitelistIP->count() >= 10)
            return response()->json(['errors' => ['ip_address' => ['You have reached the maximum number of IPs on the whitelist.']]], 402);

        $input = $request->all();
        $input['user_id'] = auth()->user()->id;
        $input['ip_address'] = $request->ip_address;


        Whitelist::create($input);

        return response()->json(['success' => 'Whitelist IP Successfully created'], 201);
    }
}
