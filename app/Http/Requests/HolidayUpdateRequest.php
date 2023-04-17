<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HolidayUpdateRequest extends FormRequest
{
    public function rules()
    {
        return [
            'month' => ['required'],
            'from' => ['required'],
            'to' => ['required'],
            'type' => ['required'],
            'rate' => ['required'],
        ];
    }
}
