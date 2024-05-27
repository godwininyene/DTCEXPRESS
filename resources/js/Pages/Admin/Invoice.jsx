import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link } from '@inertiajs/react';
import Logo from '@/Assets/images/logo.png';
import Barcode from '@/Assets/images/barcode.png';
import { FaArrowAltCircleRight, FaArrowLeft } from 'react-icons/fa';

const Invoice = ({auth, shipment}) => {
    const printPageArea = ()=>{
        let printContent = document.querySelector('#print_area').innerHTML;
        let originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML= originalContent;
    }

   
  return (
   
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Invoice</h2>}
    >
        <Head title="Invoice" />
       
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className='p-4'>
                    <Link href="dashboard" className='inline-flex items-center gap-x-1 ml-2 rounded-md font-semibold  border-2 border-gold  px-2 py-1 transition-all duration-300 ease-in hover:bg-gold'>
                        <FaArrowLeft/>   Back
                    </Link>
                </div>
              
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-4 lg:p-6 text-gray-900 dark:text-gray-100">
                        
                        <div className="rounded-lg bg-white dark:bg-slate-800   overflow-x-auto shadow-sm shadow-white">
                           
                            {  shipment != null ? (

                            <div className=''>
                                <button onClick={()=>printPageArea()} className='cursor-pointer inline-block text-white bg-primary rounded-md font-semibold px-2 py-1 border-2 border-transparent   transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold'>
                                    Print Invoice
                                </button>

                                
                                <div className='' id='print_area'>
                                    <div className='text-center mt-5'>
                                        <img src={Logo} alt="" className='h-16 mx-auto'/>
                                        <div className='text-center'>
                                            <img src={Barcode} alt="" className='h-36 inline-block mx-auto'/>
                                            <p className='text-gray-500  -mt-11'>{shipment.tracking_num}</p>
                                        </div>
                                    </div>
                                    <div className='mt-3 max-w-5xl mx-auto'>
                                        {/* Shipper and Receiver Information Starts Here */}
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 print:grid-cols-2'>

                                            <div className=''>
                                                <h3 className='font-black uppercase mb-3 text-gray-900'>Shipper Information</h3>
                                                <hr className='border-[1.5px] border-gray-300'/>

                                                <div className=''>
                                                    <p className='text-gray-500 font-semibold mb-1'>{shipment.shipper_name}</p>
                                                    <p className='text-gray-500 font-semibold mb-1'>{shipment.shipper_address}</p>
                                                    <p className='text-gray-500 font-semibold mb-1'>{shipment.shipper_phone}</p>
                                                    <p className='text-gray-500 font-semibold'>{shipment.shipper_email}</p>
                                                </div>
                                            </div>


                                            <div className=''>
                                                <h3 className='font-black uppercase mb-3 text-gray-900'>Receiver Information</h3>
                                                <hr className='border-[1.5px] border-gray-300'/>

                                                <div className=''>
                                                    <p className='text-gray-500 font-semibold mb-1'>{shipment.receiver_name}</p>
                                                    <p className='text-gray-500 font-semibold mb-1'>{shipment.receiver_address}</p>
                                                    <p className='text-gray-500 font-semibold mb-1'>{shipment.receiver_phone}</p>
                                                    <p className='text-gray-500 font-semibold'>{shipment.receiver_email}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Shipper and Receiver Information Ends Here */}

                                        <div className='bg-slate-500 text-center py-2 px-5 rounded my-4'>
                                            <p className='uppercase text-white font-bold'>Shipment Status:{shipment.status}</p>
                                        </div>

                                        {/* Shipment Information Start here */}
                                        <div className=''>
                                            <h3 className='font-black uppercase mb-1 text-gray-900'>Shipment Information</h3>
                                            <hr className='border-[1.5px] border-gray-300'/>
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-7'>

                                                <div className=''>
                                                    <p className='text-gray-800 font-black'>Origin</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.origin}</p>
                                                    <p className='text-gray-800 font-black'>Destination</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.destination}</p>
                                                    <p className='text-gray-800 font-black'>Weight</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.weight}</p>
                                                    <p className='text-gray-800 font-black'>Product</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.product}</p>
                                                    <p className='text-gray-800 font-black'>Total Freight</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.total_freight}</p>
                                                    <p className='text-gray-800 font-black'>Pickup Date</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.pickup_date}</p>
                                                    <p className='text-gray-800 font-black'>Comment</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.comment}</p>
                                                </div>

                                                <div className=''>
                                                    <p className='text-gray-800 font-black'>Package</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.packages}</p>
                                                    <p className='text-gray-800 font-black'>Carrier</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.carrier}</p>
                                                    <p className='text-gray-800 font-black'>Shipment Mode</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.mode}</p>
                                                    <p className='text-gray-800 font-black'>Qty</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.quantity}</p>
                                                    <p className='text-gray-800 font-black'>Expected Delivery Date</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.delivery_date}</p>
                                                    <p className='text-gray-800 font-black'>Pickup Time</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.pickup_time}</p>
                                                </div>

                                                <div className=''>
                                                    <p className='text-gray-800 font-black'>Status</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.status}</p>
                                                    <p className='text-gray-800 font-black'>Type of Shipment</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.shipment_type}</p>
                                                    <p className='text-gray-800 font-black'>Carrier Reference No:</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.carrier_ref_no}</p>
                                                    <p className='text-gray-800 font-black'>Payment Mode</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.payment_mode}</p>
                                                    <p className='text-gray-800 font-black'>Departure Time</p>
                                                    <p className='text-gray-400 font-semibold mb-2'>{shipment.departure_time}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Shipment information Ends Here */}

                                        {/* Shippment History Starts Here */}
                                        <div className='mt-5'>
                                            <h3 className='font-black uppercase mb-1 text-gray-900'>Shipment History</h3>
                                            <hr className='border-[1.5px] border-gray-300'/>

                                            <div className='mt-3'>
                                                <table className='w-full'>
                                                    <thead className='bg-primary text-white'>
                                                        <th className='px-4 py-2 text-center border-r border-r-gray-100'>Date</th>
                                                        <th  className='px-4 py-2 text-center border-r border-r-gray-100'>Time</th>
                                                        <th  className='px-4 py-2 text-center border-r border-r-gray-100'>Location</th>
                                                        <th  className='px-4 py-2 text-center border-r border-r-gray-100'>Status</th>
                                                        <th  className='px-4 py-2 text-center border-r border-r-gray-100'>Updated By</th>
                                                        <th  className='px-4 py-2 text-center'>Remark</th>
                                                    </thead>
                                                    <tbody className=''>
                                                        {
                                                            shipment?.history && shipment?.history.length >0 &&(
                                                                shipment.history.map(history=>(
                                                                    <tr key={history.id}className='border-b border-b-gray-300'>
                                                                    {/* Rearrange the date */}
                                                                    <td className='text-center'>{history.date}</td>
                                                                    <td className='text-center'>{history.time}</td>
                                                                    <td className='text-center'>{history.location}</td>
                                                                    <td className='text-center'>{history.status}</td>
                                                                    <td className='text-center'>Admin</td>
                                                                    <td className='text-center'>{history.remark}</td>
                                                                </tr>
                                                                ))
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            </div>
                                        {/* Shippment History Ends Here */}
                                    </div>
                                </div>
                            </div>
                            ):(
                                <div className='bg-red-200 rounded py-2 px-2 mt-1 text-center'>
                                    No shipment found possibly due to an invalid shipment id.
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            </div>
        </div>

       

            
    </AuthenticatedLayout>
  )
}

export default Invoice
