<?php

namespace App\Http\Controllers;

use App\Models\Shipment;
use Inertia\Inertia;
use Illuminate\Http\Request;


class PageController extends Controller
{
    //

    public function index(Request $request)
    {
        return Inertia::render('Welcome', [
        ]);
    }

    public function about(Request $request)
    {
        return Inertia::render('About', [
        ]);
    }

    public function services(Request $request)
    {
        return Inertia::render('Services', [
        ]);
    }

    public function contact(Request $request)
    {
        return Inertia::render('Contact', [
        ]);
    }

    public function track(Request $request)
    {
        return Inertia::render('Track', [
        ]);
    }

    public function add_shipment(Request $request)
    {
        return Inertia::render('Admin/AddShipment', [
        ]);
    }

    public function edit_shipment(Request $request)
    {
        $shipment = Shipment::where('id', $request->id)->first();
       if($shipment){
            return Inertia::render('Admin/EditShipment', [
                'shipment' => $shipment,
                'status' => true,
                'message'=>'Shipment fetched successfully.'
            ], 200);
          
       }else{
            return Inertia::render('Admin/EditShipment', [
                'status' => false,
                'message'=>'No record found for the selected shipment.'
            ], 404);
       }
    }

    public function invoice(Request $request)
    {
       
        $shipment =  Shipment::with(['history'])->where('id', $request->id)->first();
        if($shipment){
             return Inertia::render('Admin/Invoice', [
                 'shipment' => $shipment,
                 'status' => true,
                 'message'=>'Shipment fetched successfully.'
             ], 200);
           
        }else{
             return Inertia::render('Admin/Invoice', [
                 'status' => false,
                 'message'=>'No record found for the selected shipment.'
             ], 404);
        }
    }
}
