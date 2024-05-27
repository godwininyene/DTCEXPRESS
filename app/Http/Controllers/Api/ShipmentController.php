<?php

namespace App\Http\Controllers\Api;

use App\Models\Shipment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\ShipmentHistory;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Mail\ShipmentNotification;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ShipmentController extends Controller
{
    //

    public function create_shipment(Request $request) : Response | JsonResponse
    {
        
      if( $shipment = Shipment::create($request->all())){
        Mail::to($request->receiver_email)->send(new ShipmentNotification( $request->shipper_name, $request->receiver_name, $request->delivery_date, $shipment->tracking_num));
        $shipmentHistory = new ShipmentHistory();
        $shipmentHistory->shipment_id = $shipment->id;
        $dateTime = date_create();
        $shipmentHistory->date = $dateTime->format('d-m-Y');
        $shipmentHistory->time = $dateTime->format('H:i:s');
        $shipmentHistory->location = $shipment->origin;
        $shipmentHistory->status = $shipment->status;
        $shipmentHistory->save();

        return response()->json([
            'shipment' => $shipment,
            'status' => true,
            'shipmentHistory' => $shipmentHistory,
            'message'=>'Shipment created successfully.'
        ], 200);
      }
       
    }

    public function update_shipment(Request $request) : Response | JsonResponse
    {
        $shipment = Shipment::where('id', $request->id)->first();
      if( $shipment->update($request->all())){
        return response()->json([
            'shipment' => $shipment,
            'status' => true,
            'message'=>'Shipment updated successfully.'
        ], 200);
      }
       
    }

    public function update_shipment_history(Request $request) : Response | JsonResponse
    {
        
        $shipmentHistory = new ShipmentHistory();
        $shipmentHistory->shipment_id = $request->shipment_id;
        $dateTime = date_create();
        $shipmentHistory->date = $dateTime->format('d-m-Y');
        $shipmentHistory->time = $dateTime->format('H:i:s');
        $shipmentHistory->location = $request->location;
        $shipmentHistory->status = $request->status;
        $shipmentHistory->remark = $request->remark;

       if( $shipmentHistory->save()){
          $shipment = Shipment::where('id', $request->shipment_id)->first();
          $shipment->status = $request->status;
          $shipment->update();
          $shipments = Shipment::with(['history'])->orderBy('id', 'DESC')->paginate(10);
          return response()->json([
            'shipments' => $shipments,
            'status' => true,
            'message'=>'Shipment history updated successfully.'
          ], 200);
        }

    }

    public function track_shipment(Request $request) : Response | JsonResponse
    {
        
      if($shipment = Shipment::with(['history'])->where('tracking_num', $request->tracking_num)->first()){
        return response()->json([
            'shipment' => $shipment,
            'status' => true,
            'message'=>'Shipment fetched successfully.'
        ], 200);
      }else{
        return response()->json([
            'status' => false,
            'message'=>'Invalid tracking number. Please provide a valid tracking number to proceed.'
        ], 404);
      } 
    }


    public function fetch_shipments(Request $request) : Response | JsonResponse
    {
        
      $shipments = Shipment::with(['history'])->orderBy('id', 'DESC')->paginate(10);
        return response()->json([
            'shipments' => $shipments,
            'status' => true,
            'message'=>'Shipments fetched successfully.'
        ], 200);
      
    }

    public function fetch_shipment(Request $request) : Response | JsonResponse{
      $shipment = Shipment::where('id', $request->id)->first();
      if($shipment){
        return response()->json([
          'shipment' => $shipment,
          'status' => true,
          'message'=>'Shipment fetched successfully.'
      ], 200);
      }else{
        return response()->json([
          'status' => false,
          'message'=>'No record found for the selected shipment.'
      ], 404);
      }
    }

    public function delete_shipment(Request $request) : Response | JsonResponse{

      $validator = Validator::make($request->all(), [
        'id' => 'required',
      ]);

      if ($validator->fails()) {
        return response()->json( [
          'message' => 'Could not detect the shipment. An id might be required!',
            "data" => $validator->errors()->all(),
            'status' => false,
        ], 422);
      }

     if( $shipment = Shipment::where('id', $request->id)->delete()){
        $shipmentHistory = ShipmentHistory::where('shipment_id', $request->id)->delete();
        $shipments = Shipment::with(['history'])->orderBy('id', 'DESC')->paginate(10);
        return response()->json( [
          'message' => 'Shipment deleted successfully.',
          'status' => true,
          'shipments'=>$shipments
        ], 200);
  
     }
      
    
      


    }
}
