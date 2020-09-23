<?php

namespace App\Http\Controllers\Laravel;


use App\Http\Controllers\Controller;
use App\Http\Requests\EditProfileRequest;
use App\Http\Requests\PasswordRequest;
use App\Model\Laravel\User;

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
}
