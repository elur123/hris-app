<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttendanceHistory extends Model
{
    use HasFactory;

    protected $fillable = [ 'attendance_id', 'start_at', 'end_at' ];

    public $timestamps = false;

    public function attendance()
    {
        return $this->belongsTo(Attendance::class, 'attendance_id');
    }
}
