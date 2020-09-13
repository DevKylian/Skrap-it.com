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
        $packageId = $request['package_id'];
        $package = $this->package->getPackageById($packageId);

        $user = auth()->user();

        Api::where(['user_id' => $user->id, 'package_id' => $user->package_id])->update(['status' => 2]);

        $user->update(['package_id' => $packageId, 'expiration_date' => Carbon::today()->addDays($package->days)]);

        Api::where(['user_id' => $user->id, 'package_id' => $user->package_id])->update(['status' => 1]);

        return response()->json(['success' => 'Subscribed successfully for 1 month.'], 201);
    }
}
