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
        return $this->hasMany(Api::class)->withTrashed();
    }

    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    public function tokens()
    {
        return $this->hasMany(Token::class);
    }

    public function whitelists()
    {
        return $this->hasMany(Whitelist::class);
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

    /**
     * @param $email
     * @return mixed
     */
    public function getUserByEmail($email)
    {
        return User::where('email', $email)->first();
    }

    /**
     * @return mixed
     */
    public function sumMaxUsesWithThrashed()
    {
        return Api::where(['user_id' => $this->getId(), 'package_id' => $this->getPackageId()])->withTrashed()->sum('max_uses');
    }

    /**
     * @return mixed
     */
    public function sumRemainingUsesWithTrashed()
    {
        return Api::where(['user_id' => $this->getId(), 'package_id' => $this->getPackageId()])->withTrashed()->sum('remaining_uses');
    }

    /**
     * @return mixed
     */
    public function sumMaxUses()
    {
        return Api::where(['user_id' => $this->getId(), 'package_id' => $this->getPackageId()])->sum('max_uses');
    }

    /**
     * @return mixed
     */
    public function sumRemainingUses()
    {
        return Api::where(['user_id' => $this->getId(), 'package_id' => $this->getPackageId()])->sum('remaining_uses');
    }

    /**
     * @return mixed
     */
    public function getRemainingUses()
    {
        return $this->sumMaxUsesWithThrashed() - $this->sumRemainingUsesWithTrashed() + $this->sumMaxUses();
    }

    /**
     * @param
     * @return mixed
     */
    public function countApis()
    {
        return Api::where('user_id', $this->getId())->count();
    }

    public function countApisForPackage()
    {
        return Api::where(['user_id' => $this->getId(), 'package_id' => $this->getPackageId()])->count();
    }

    /**
     * @return bool
     */
    public function isBanned()
    {
        return $this->status == 2;
    }

    /**
     * @return bool
     */
    public function isActivated()
    {
        return $this->status == 1;
    }

    public function hasFreeOffer()
    {
        return $this->package->full_access == 0;
    }
}
