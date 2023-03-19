<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Models\Branch;

class BranchStoreRequest extends FormRequest
{
   
    public function rules() : array
    {
        return [
            'name' => ['required', 'string', 'max:255', Rule::unique(Branch::class)],
            'address' => ['required', 'string', 'max:255'],
            'contact_no' => ['required', 'string', 'min:11', 'max:11']
        ];
    }
}
