<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ShipmentHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'shipment_id',
        'date',
        'time',
        'location',
        'status',
        'remark'
    ];

   
}
