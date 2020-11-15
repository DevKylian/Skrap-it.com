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

}
