<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PayrollStoreRequest extends FormRequest
{
    public function rules()
    {
        return [
            'from' => ['required'],
            'to' => ['required']
        ];
    }
}
