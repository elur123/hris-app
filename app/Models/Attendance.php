<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [ 'employee_id', 'branch_id', 'picture_url', 'start_at', 'end_at', 'holiday_percent' ];

    public $timestamps = false;


    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'branch_id');
    }

    public function histories()
    {
        return $this->hasMany(AttendanceHistory::class, 'attendance_id');
    }
}
