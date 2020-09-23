<?php

namespace App\Model\Laravel;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Api extends Model
{
    use SoftDeletes;

    protected $connection = "laravel";
    protected $table = "apis";
    protected $guarded = [];

    public function __construct(array $attributes = array())
    {
        parent::__construct($attributes);

        $this->key = Str::random(128);
        $this->expiration_date = Carbon::today()->addDays(30);
    }

    /*
     *
     * Below, all the relationships
     *
     * */

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    /*
     *
     * Below, all the functions to get the data
     *
     * */

    /**
     * @return bool
     */
    public function isOnline()
    {
        return $this->status == 1;
    }

    /**
     * @return bool
     */
    public function isOffline()
    {
        return $this->status == 0;
    }

    /**
     * @return bool
     */
    public function isDisabled()
    {
        return $this->status == 2;
    }

    /**
     * @param $key
     * @return mixed
     */
    public function getApiByKey($key)
    {
        return Api::where('key', $key)->first();
    }

    /**
     * @param $key
     * @return bool
     */
    public function isFullAccess($key)
    {
        $api = $this->getApiByKey($key);

        $package = $api->package->full_access;

        return $package == 1;
    }

    /**
     * @param $user
     * @param $package
     * Disable all apis (status 2) for old package and enable all new apis (status 1)
     */
    public function toggleApis($user, $package)
    {
        Api::where(['user_id' => $user->id, 'package_id' => $user->package_id])->update(['status' => 2]);

        $user->update(['package_id' => $package->id, 'expiration_date' => Carbon::today()->addDays($package->days)]);

        Api::where(['user_id' => $user->id, 'package_id' => $user->package_id])->update(['status' => 1]);
    }
}
