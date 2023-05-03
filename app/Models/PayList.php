<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PayList extends Model
{
    use HasFactory;

    protected $fillable = [
        'payroll_id',
        'employee_id',
        'hours_rate',
        'total_days',
        'total_hours',
        'total_absent',
        'overtime_hours',
        'leave_days',
        'sub_total',
        'total_deductions',
        'total',
    ];

    public $timestamps = false;

    /**
    * Relationship functions 
    */

    public function payroll()
    {
        return $this->belongsTo(Payroll::class, 'payroll_id');
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }
}
