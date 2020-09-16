<?php

namespace App\Http\Requests;

use App\Rules\ApiMax;
use App\Rules\ApiMaxUses;
use Illuminate\Foundation\Http\FormRequest;

class ApiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'max_uses' => ['required', 'gt:0', new ApiMaxUses(auth()->user()), new ApiMax(auth()->user())]
        ];
    }


}
