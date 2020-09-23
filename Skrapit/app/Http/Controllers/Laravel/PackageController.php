<?php

namespace App\Http\Controllers\Laravel;

use App\Http\Controllers\Controller;
use App\Model\Laravel\Api;
use App\Model\Laravel\Package;
use App\Model\Laravel\User;
use Illuminate\Http\Request;
use Carbon\Carbon;

class PackageController extends Controller
{
    protected $user;
    protected $api;
    protected $package;

    public function __construct(User $user, Api $api, Package $package)
    {
        $this->user = $user;
        $this->api = $api;
        $this->package = $package;
    }

    public function subscribePackage(Request $request)
    {
        $data = [
            'price' => $request['price'],
            'uses' => $request['uses'],
            'api' => $request['api'],
            'days' => $request['days']
        ];

        if($request['free']) $package = $this->package->getPackageById(1);
        else
            if($request['price'] > 1500 || $request['price'] < 1)
                return response()->json(['errors' => ['package' => ['There is a problem, please contact an administrator.']]], 402);
            elseif($this->package->checkPrice($data))
                $package = $this->package->createPackage($data);
            else
                return response()->json(['errors' => ['package' => ['There is a problem, please contact an administrator.']]], 402);

        $this->api->toggleApis(auth()->user(), $package);

        return response()->json(['success' => "Subscribed successfully for $package->days days."], 201);
    }
}
