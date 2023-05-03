<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RateType extends Model
{
    use HasFactory;

    protected $fillable = [ 'label' ];

    public $timestamps = false;

    public const IS_DAILY = 1;
    public const IS_WEEKLY = 2;
    public const IS_MONTHLY = 1;
}
