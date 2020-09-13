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

    public function isOnline()
    {
        return $this->status == 1;
    }

    public function isOffline()
    {
        return $this->status == 0;
    }

    public function isDisabled()
    {
        return $this->status == 2;
    }

    public function getApiByKey($key)
    {
        return Api::where('key', $key)->first();
    }

    public function isFullAccess($key)
    {
        $api = $this->getApiByKey($key);

        $package = $api->package->full_access;

        return $package == 1;
    }
}
