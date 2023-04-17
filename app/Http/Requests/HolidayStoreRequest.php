<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Holiday;

class HolidayStoreRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
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
