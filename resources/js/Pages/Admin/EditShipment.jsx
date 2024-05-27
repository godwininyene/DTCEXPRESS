import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import {IoLogInOutline} from 'react-icons/io5';
import Loader from '@/Components/Loader';
import PrimaryButton from '@/Components/PrimaryButton';


const EditShipment = ({auth, shipment}) => {
    const[processing, setProcessing] = React.useState(false);
    const[message,setMessage] = React.useState(false);
    const[status,setStatus] = React.useState(false);

    const submit = async(e)=>{

        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setProcessing(true);

        try{
            const res = await axios.post(route('api.update_shipment'),data);
            if(res.data.status){
                setMessage(res.data.message);
                setStatus(res.data.status);
                e.target.reset();
            }
          
            setProcessing(false)
        }catch(error){
            if(error.reponse){
                setMessage(error.reponse.message);
                setStatus(res.data.status);
            }
            setProcessing(false);
           
        }
    }

  return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Edit Shipment</h2>}
    >
        <Head title="Edit Shipment" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        <div className='text-sm font-semibold'>Edit Details</div>
                        <hr className='border-gray-300 mb-5'/>
                        {shipment && (

                       
                            <form className='' onSubmit={submit}>
                                <input type="hidden"  id='tracking_num'value={shipment.id}name='id'/>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                                    {/* Shipper information fields start here */}
                                    <div className=''>
                                        <h3 className='font-black uppercase mb-4 text-gold'>Shipper Details</h3>
                                    

                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Name</div>
                                            <TextInput 
                                                required
                                                defaultValue={shipment.shipper_name}
                                                type="text" 
                                                name="shipper_name"  
                                                placeholder="Shipper Name" 
                                                className="w-full"
                                            />

                                        </div>

                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Phone</div>
                                            <TextInput 
                                                required
                                                defaultValue={shipment.shipper_phone}
                                                type="tel" 
                                                name="shipper_phone"  
                                                placeholder="Shipper Phone" 
                                                className="w-full"
                                            />

                                        </div>

                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Email</div>
                                            <TextInput 
                                                required
                                                defaultValue={shipment.shipper_email}
                                                type="email" 
                                                name="shipper_email"  
                                                placeholder="Shipper Email" 
                                                className="w-full"
                                            />

                                        </div>

                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Address</div>
                                            <TextInput 
                                                required
                                                defaultValue={shipment.shipper_address}
                                                type="text" 
                                                name="shipper_address"  
                                                placeholder="Shipper Address" 
                                                className="w-full"
                                            />

                                        </div>
                                    </div>
                                    {/* Shipper information fields ends here */}

                                    {/* Receiver Information fields Starts here */}
                                    <div className=''>
                                        <h3 className='font-black uppercase mb-4 text-gold'>Receiver Details</h3>
                                    

                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Name</div>
                                            <TextInput
                                                required 
                                                defaultValue={shipment.receiver_name}
                                                type="text" 
                                                name="receiver_name"  
                                                placeholder="Receiver Name" 
                                                className="w-full"
                                            />

                                        </div>

                                        
                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Phone</div>
                                            <TextInput 
                                                required
                                                defaultValue={shipment.receiver_phone}
                                                type="text" 
                                                name="receiver_phone"  
                                                placeholder="Receiver Phone" 
                                                className="w-full"
                                            />

                                        </div>

                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Email</div>
                                            <TextInput 
                                                required
                                                defaultValue={shipment.receiver_email}
                                                type="email" 
                                                name="receiver_email"  
                                                placeholder="Receiver Email" 
                                                className="w-full"
                                            />

                                        </div>

                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Address</div>
                                            <TextInput 
                                                required
                                                defaultValue={shipment.receiver_address}
                                                type="text" 
                                                name="receiver_address"  
                                                placeholder="Receiver Address" 
                                                className="w-full"
                                            />

                                        </div>
                                    </div>
                                    {/* Receiver Information fields Ends Here */}
                                </div>

                                {/* Shipment Information Starts Here */}
                                <div className=''>
                                    <h3 className='font-black uppercase my-4 text-gold'>Shipment Details</h3>

                                    <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                        <div className='w-[148px]'>Type of Shipment</div>
                                        <select 
                                            required
                                            name="shipment_type"  
                                            className="w-[36%] border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gold  focus:ring-0 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                        >
                                            <option value='' defaultValue="selected">- Select -</option>
                                            <option value="Van Move">Van Move</option>
                                            <option value="Tricycle Delivery">Tricycle Delivery</option>
                                            <option value="Motorbike Delivery">Motorbike Delivery</option>
                                            <option value="Door To Door">Door To Door</option>
                                            <option value="Office Pickup">Office Pickup</option>
                                            <option value="International Shipping">International Shipping</option>
                                            <option value="Truckload">Truckload</option>
                                        </select>

                                    </div>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                                        <div className=''>
                                    
                                            <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[200px]'>Packages</div>
                                                <TextInput 
                                                    required
                                                    defaultValue={shipment.packages}
                                                    type="text" 
                                                    name="packages"  
                                                    placeholder="Packages" 
                                                    className="w-full"
                                                />
                                            </div>

                                            <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[200px]'>Weight</div>
                                                <TextInput 
                                                    required
                                                    defaultValue={shipment.weight}
                                                    type="text" 
                                                    name="weight"  
                                                    placeholder="Weight" 
                                                    className="w-full"
                                                />
                                            </div>

                                            <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[200px]'>Product</div>
                                                <TextInput 
                                                    required
                                                    defaultValue={shipment.product}
                                                    type="text" 
                                                    name="product"  
                                                    placeholder="product" 
                                                    className="w-full"
                                                />
                                            </div>

                                            <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[200px]'>Payment Mode</div>
                                                <select 
                                                    required
                                                    name="payment_mode"  
                                                    placeholder="Payment Mode" 
                                                    className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gold  focus:ring-0 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                                >
                                                    <option value='' defaultValue="selected">- Select -</option>
                                                    <option value="Cash">Cash</option>
                                                    <option value="Cheque">Cheque</option>
                                                    <option value="Mobile Money">Mobile Money</option>
                                                </select>

                                            </div>

                                            
                                            <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[200px]'>Departure Time</div>
                                                <TextInput 
                                                    required
                                                    defaultValue={shipment.departure_time}
                                                    type="text" 
                                                    name="departure_time"  
                                                    placeholder="Departure Time" 
                                                    className="w-full"
                                                />
                                            </div>

                                            <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[200px]'>Destination</div>
                                                <TextInput 
                                                    required
                                                    defaultValue={shipment.destination}
                                                    name="destination"  
                                                    placeholder="Destination" 
                                                    className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gold  focus:ring-0 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                                />

                                            </div>

                                            <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[200px]'>Pickup Time</div>
                                                <TextInput 
                                                    required
                                                    defaultValue={shipment.pickup_time}
                                                    type="text" 
                                                    name="pickup_time"  
                                                    placeholder="Pickup Time"  
                                                    className="w-full"
                                                />
                                            </div>

                                        </div>

                                        <div className=''>
                                            <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[200px]'>Mode</div>
                                                <select 
                                                    required
                                                    name="shipment_mode"  
                                                    className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gold  focus:ring-0 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                                >
                                                    <option value='' defaultValue="selected">- Select -</option>
                                                    <option value="Air Shipping">Air Freight</option>
                                                    <option value="Sea Shipping">Sea Transport</option>
                                                    <option value="Land Shipping">Land Shipping</option>
                                                </select>


                                            </div>
                                    
                                            <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[200px]'>Quantity</div>
                                                <TextInput 
                                                    required
                                                    defaultValue={shipment.quantity}
                                                    type="text" 
                                                    name="quantity"  
                                                    placeholder="Quantity" 
                                                    className="w-full"
                                                />
                                            </div>

                                            <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[200px]'>Total Freight</div>
                                                <TextInput 
                                                    required
                                                    defaultValue={shipment.total_freight}
                                                    type="text" 
                                                    name="total_freight"  
                                                    placeholder="Total Freight" 
                                                    className="w-full"
                                                />
                                            </div>

                                            <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[200px]'>Origin</div>
                                                <TextInput 
                                                    required
                                                    defaultValue={shipment.origin}
                                                    name="origin"  
                                                    placeholder="Origin" 
                                                    className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gold  focus:ring-0 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                                />

                                            </div>

                                            <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[200px]'>Pickup Date</div>
                                                <TextInput 
                                                    required
                                                    defaultValue={shipment.pickup_date}
                                                    type="date" 
                                                    name="pickup_date"  
                                                    placeholder="Pickup Date" 
                                                    className="w-full"
                                                />
                                            </div>


                                            <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[200px]'>Expected Delivery Date</div>
                                                <TextInput 
                                                    required
                                                    defaultValue={shipment.delivery_date}
                                                    type="date" 
                                                    name="delivery_date"  
                                                    placeholder="Expected Delivery Date" 
                                                    className="w-full"
                                                />
                                            </div>
                                             <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                                <div className='w-[147px]'>Comment</div>
                                                <textarea 
                                                    type="text" 
                                                    defaultValue={shipment.comment}
                                                    name="comment"  
                                                    placeholder="Comment" 
                                                    className="w-[75%] border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gold  focus:ring-0 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                                />
                                            </div>
                                            {message &&<div id='alert' className={`${status ? 'bg-green-200' : 'bg-red-200'} px-3 py-1 rounded-md text-center mb-3`}>{message}</div>}

                                        

                                        </div>
                                    </div>

                                </div>
                                {/* Shipment Information Ends Here */}

                                <div className='text-right'>
                                    <PrimaryButton className="inline-flex items-center justify-center gap-2 items-bottom bg-primary dark:bg-gold dark:hover:bg-gold dark:hover:text-white dark:text-white hover:bg-gold rounded-md font-semibold px-2 py-3 transition-all duration-300 ease-in  text-white" disabled={processing}>
                                    { (processing) ? <Loader /> : <span>Update Shipment</span>}
                                    </PrimaryButton>
                                </div>
                            </form>
                        )}



                        {!shipment &&(
                            <p  className='bg-red-200 rounded py-2 px-2 mt-1 text-center'>No shipment record found for the selected shipment.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}

export default EditShipment