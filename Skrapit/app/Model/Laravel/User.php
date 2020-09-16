<?php

namespace App\Model\Laravel;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $connection = "laravel";
    protected $table = "users";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['password_confirmation'];

    protected $hidden = ['password', 'remember_token'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /*
     *
     * Below, all the relationships
     *
     * */

    public function apis()
    {
        return $this->hasMany(Api::class);
    }

    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    public function tokens()
    {
        return $this->hasMany(Token::class);
    }

    /*
     *
     * Below, all the JWT default functions
     *
     * */

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }


    /*
     *
     * Below, all the functions to get the data
     *
     * */

    /**
     * @return mixed
     */
    public function getId()
    {
        return auth()->user()->id;
    }

    /**
     * @return mixed
     */
    public function getPackageId()
    {
        return auth()->user()->package_id;
    }

    public function getUserByEmail($email)
    {
        return User::where('email', $email)->first();
    }

    /**
     * @param User $user
     * @return mixed
     */
    public function sumApiUses(User $user)
    {
        return Api::where('user_id', $user->getId())->sum('max_uses');
    }

    /**
     * @param User $user
     * @return mixed
     */
    public function sumApiUsesForPackage(User $user)
    {
        return Api::where(['user_id' => $user->getId(), 'package_id' => $this->getPackageId()])->sum('max_uses');
    }

    /**
     * @param User $user
     * @return mixed
     */
    public function countApis(User $user)
    {
        return Api::where('user_id', $user->getId())->count();
    }

    public function countApisForPackage(User $user)
    {
        return Api::where(['user_id' => $user->getId(), 'package_id' => $this->getPackageId()])->count();
    }

    public function isBanned()
    {
        return $this->status == 2;
    }

    public function isActivated()
    {
        return $this->status == 1;
    }
}
