<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

use App\Models\User;
class UserUpdateRequest extends FormRequest
{
    public function rules()
    {
        return [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'max:255', Rule::unique(User::class)->ignore($this->user->id)],
            'rate_type' => ['required', 'max:255'],
            'rate' => ['required', 'numeric'],
            'position' => ['required'],
            'branch' => ['required'],
            'department' => ['required'],
        ];
    }
}
