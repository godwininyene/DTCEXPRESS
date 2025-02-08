<?php

use App\Models\Shipment;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('shipments', function (Blueprint $table) {
            $table->id();

            // Shipper Details
            $table->string('shipper_name');
            $table->string('shipper_phone');
            $table->string('shipper_email');
            $table->string('shipper_address');


            // Receiver Details
            $table->string('receiver_name');
            $table->string('receiver_phone');
            $table->string('receiver_email');
            $table->string('receiver_address');

            // Shipment Details
            $table->string('carrier')->default('CD&T Logistics Courier');
            $table->string('carrier_ref_no')->default('CDT48634');
            $table->string('tracking_num');
            $table->string('shipment_type');
            $table->string('packages');
            $table->string('weight');
            $table->string('product');
            $table->string('payment_mode');
            $table->string('departure_time');
            $table->string('destination');
            $table->string('pickup_time');
            $table->string('shipment_mode');
            $table->string('quantity');
            $table->string('total_freight');
            $table->string('origin');
            $table->string('pickup_date');
            $table->string('delivery_date');
            $table->string('status');
            $table->string('comment')->nullable();
            

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipments');
    }
};
