<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditProfileRequest extends FormRequest
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
            'firstname' => 'nullable|string|max:50',
            'lastname' => 'nullable|string|max:50',
            'email' => 'required|string|email:rfc|unique:laravel.users,email,'.auth()->user()->id.'|max:255',
            'phone_number' => 'nullable|numeric',
            'address' => 'nullable|string|max:80',
        ];
    }
}
