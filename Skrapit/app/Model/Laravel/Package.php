<?php

namespace App\Model\Laravel;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $connection = "laravel";
    protected $table = "packages";
    protected $guarded = [];

    public $timestamps = false;

    /*
     *
     * Below, all the relationships
     *
     * */

    public function apis()
    {
        return $this->belongsToMany(Api::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /*
     *
     * Below, all the functions to get the data
     *
     * */

    public function getPackageInfo(User $user)
    {
        return Package::where('id', $user->getPackageId())->first();
    }

    public function getPackageById($id)
    {
        return Package::where('id', $id)->first();
    }
}
