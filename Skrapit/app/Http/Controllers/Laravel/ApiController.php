<?php

namespace App\Http\Controllers\Laravel;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApiRequest;
use App\Model\Laravel\Api;
use App\Model\Laravel\User;
use Illuminate\Support\Str;

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
        $input['title'] = strtoupper(Str::random(4));
        $input['user_id'] = $this->user->getId();
        $input['package_id'] = $this->user->getPackageId();
        $input['remaining_uses'] = $input['max_uses'];

        Api::create($input);

        return response()->json(['success' => 'API Successfully created'], 201);
    }

    public function deleteApi(User $user, $id)
    {
        $api = Api::find($id);

        if(!$api || ($user->getId() != $api->user_id))
            return response()->json(['errors' => ['api' => ['This API doesn\'t exist.']]], 402);

        if($api->isDisabled())
            return response()->json(['errors' => ['api' => ['This API is disabled.']]], 402);

        $api->update(['status' => 3]);

        Api::where('id', $id)->delete();

        return response()->json(['success' => 'API Successfully deleted'], 200);
    }

    public function toggleApi(User $user, $id)
    {
        $api = Api::find($id);

        if(!$api || ($user->getId() != $api->user_id))
            return response()->json(['errors' => ['api' => ['This API doesn\'t exist.']]], 402);

        if($api->isDisabled())
            return response()->json(['errors' => ['api' => ['This API is disabled.']]], 402);

        $api->isOnline() ? $api->update(['status' => 0]) : $api->update(['status' => 1]);

        return response()->json(['success' => 'API Successfully edited'], 200);
    }
}
