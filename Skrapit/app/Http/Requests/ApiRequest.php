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
            'title' => ['required', 'alpha_dash', 'between:4,15'],
            'max_uses' => ['required', 'gt:0', new ApiMaxUses(auth()->user())]
        ];
    }


}
