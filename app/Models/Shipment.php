<?php

namespace App\Models;

use App\Models\ShipmentHistory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Shipment extends Model
{
    use HasFactory;


    protected $fillable = [
        // Shipper Information
        'shipper_name',
        'shipper_phone',
        'shipper_email',
        'shipper_address',

        // Receiver Information
        'receiver_name',
        'receiver_phone',
        'receiver_email',
        'receiver_address',

        //Shipment Information
        'tracking_num',
        'shipment_type',
        'packages',
        'weight',
        'product',
        'payment_mode',
        'departure_time',
        'destination',
        'pickup_time',
        'shipment_mode',
        'quantity',
        'total_freight',
        'origin',
        'pickup_date',
        'delivery_date',
        'status',
        'comment'
    ];
    public function history() : HasMany
    {
        return $this->hasMany(ShipmentHistory::class, 'shipment_id', 'id');
    }

    // public function history() : BelongsTo
    // {
    //     return $this->belongsTo(ShipmentHistory::class, 'id');
    // }
}
