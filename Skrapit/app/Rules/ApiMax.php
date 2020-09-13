<?php

namespace App\Rules;

use App\Model\Laravel\Api;
use App\Model\Laravel\Package;
use App\Model\Laravel\User;
use Illuminate\Contracts\Validation\Rule;

class ApiMax implements Rule
{
    protected $user;

    /**
     * Create a new rule instance.
     *
     * @param $user
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $maxApi = $this->user->package->getPackageInfo($this->user)->max_api;
        $userApi = $this->user->countApis($this->user);

        if($maxApi > $userApi)
            return true;

        return false;

    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The number of API uses requested is too high.';
    }
}
