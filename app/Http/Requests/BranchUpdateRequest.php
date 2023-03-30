<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Models\Branch;

class BranchUpdateRequest extends FormRequest
{
    
    public function rules() : array
    {
        return [
            'name' => ['required', 'string', 'max:255', Rule::unique(Branch::class)->ignore($this->branch->id)],
            'address' => ['required', 'string', 'max:255'],
            'contact_no' => ['required', 'string', 'min:11', 'max:11']
        ];
    }
}
