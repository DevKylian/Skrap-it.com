<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class ApiMaxUses implements Rule
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
        $maxUses = $this->user->package->getPackageInfo($this->user)->max_uses - $this->user->sumApiUses($this->user);

        if($value > $maxUses)
            return false;

        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'You\'ve used all your API uses';
    }
}
