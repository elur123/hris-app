<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payroll extends Model
{
    use HasFactory;

    protected $fillable = [
        'from',
        'to',
        'total_pay',
        'branch_id',
        'status_id',
        'prepared_by',
        'checked_by',
    ];

    protected $casts = [
        'from' => 'datetime:F j, Y',
        'to' => 'datetime:F j, Y',
    ];

    /*
    * Relationship funcions
    */

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'branch_id');
    }

    public function adminPrepared()
    {
        return $this->belongsTo(User::class, 'prepared_by');
    }

    public function adminChecked()
    {
        return $this->belongsTo(User::class, 'checked_by');
    }

    public function status()
    {
        return $this->belongsTo(Status::class, 'status_id');
    }

    public function list()
    {
        return $this->hasMany(PayList::class, 'payroll_id');
    }
}
