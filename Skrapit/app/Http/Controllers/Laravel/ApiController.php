<?php

namespace App\Http\Controllers\Laravel;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApiRequest;
use App\Model\Laravel\Api;
use App\Model\Laravel\User;

class ApiController extends Controller
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function api($key)
    {
        $api = Api::where('key', $key)->first();

        return $api;
    }

    public function myApis()
    {
        return Api::where(['user_id' => $this->user->getId()])->get();
    }

    public function createApi(ApiRequest $request)
    {
        $input = $request->all();
        $input['user_id'] = $this->user->getId();
        $input['package_id'] = $this->user->getPackageId();
        $input['remaining_uses'] = $input['max_uses'];

        Api::create($input);

        return response()->json(['success' => 'API Successfully created'], 201);
    }

    public function deleteApi(User $user, $id)
    {
        $userId = $user->getId();
        $api = Api::find($id);

        if(!$api || ($userId != $api->user_id))
            return response()->json(['error' => 'This API does not exist'], 402);

        Api::where('id', $id)->delete();

        return response()->json(['success' => 'API Successfully deleted'], 200);
    }

    public function toggleApi(User $user, $id)
    {
        $userId = $user->getId();
        $api = Api::find($id);

        if(!$api || ($userId != $api->user_id))
            return response()->json(['error' => 'This API does not exist'], 402);

        $api->update(['status' => !$api->status]);

        return response()->json(['success' => 'API Successfully edited'], 200);
    }
}
