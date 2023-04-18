<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OvertimeRequest extends Model
{
    use HasFactory;

    protected $fillable = [ 
        'employee_id', 
        'overtime_at', 
        'from', 
        'to', 
        'notes', 
        'status_id', 
        'approved_hours', 
        'checked_by' 
    ];

    /**
    * Relationship functions
    */
    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }

    public function adminChecked()
    {
        return $this->belongsTo(User::class, 'checked_by');
    }

    public function status()
    {
        return $this->belongsTo(Status::class, 'status_id');
    }
}
