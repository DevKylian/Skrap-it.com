<?php

namespace App\Model\Laravel;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Whitelist extends Model
{
    use SoftDeletes;

    protected $connection = "laravel";
    protected $table = "whitelists";
    protected $guarded = [];

    /*
     *
     * Below, all the relationships
     *
     * */

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /*
     *
     * Below, all the functions to get the data
     *
     * */

    /**
     * When your API is disabled, only whitelisted the IP can access it
     * @param User $user
     * @param $IPAddress
     * @return bool
     */
    public function isWhitelist(User $user, $IPAddress) : bool
    {
        return Whitelist::where(['ip_address' => $IPAddress, 'user_id' => $user->id])->exists() ? true : false;
    }
}
