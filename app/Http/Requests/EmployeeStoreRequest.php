<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

use App\Models\Employee;
use App\Models\User;
class EmployeeStoreRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules() : array
    {
        return [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'max:255', Rule::unique(User::class)],
            'rate_type' => ['required'],
            'rate' => ['required', 'numeric'],
            'position' => ['required'],
            'branch' => ['required'],
            'department' => ['required'],
        ];
    }
}
