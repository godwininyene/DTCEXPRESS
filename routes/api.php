<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ShipmentController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('create-shipment', [ShipmentController::class, 'create_shipment'])->name('api.create_shipment');
Route::post('update-shipment', [ShipmentController::class, 'update_shipment'])->name('api.update_shipment');
Route::post('update-shipment-history', [ShipmentController::class, 'update_shipment_history'])->name('api.update_shipment_history');
Route::post('track-shipment', [ShipmentController::class, 'track_shipment'])->name('api.track_shipment');
Route::get('fetch-shipments', [ShipmentController::class, 'fetch_shipments'])->name('api.fetch_shipments');
Route::get('fetch-shipment', [ShipmentController::class, 'fetch_shipment'])->name('api.fetch_shipment');
Route::post('delete-shipment', [ShipmentController::class, 'delete_shipment'])->name('api.delete_shipment');