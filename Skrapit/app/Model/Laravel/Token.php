<?php

namespace App\Model\Laravel;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Token extends Model
{
    use SoftDeletes;

    protected $connection = "laravel";
    protected $table = "tokens";
    protected $guarded = [];

    public function __construct(array $attributes = [])
    {
        parent::__construct( $attributes );

        $this->deleted_at = now()->addMinutes(30);
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

    /*
     *
     * Below, all the functions to get the data
     *
     * */

    public function generateToken($type, $id)
    {
        return Token::create([
            'user_id' => $id,
            'token' => Str::random(128),
            'type' => $type
        ]);
    }
}
