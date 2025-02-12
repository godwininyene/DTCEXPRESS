import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import {IoLogInOutline} from 'react-icons/io5';
import Loader from '@/Components/Loader';
import PrimaryButton from '@/Components/PrimaryButton';


const AddShipment = ({auth}) => {
    const[processing, setProcessing] = React.useState(false);
    const[message,setMessage] = React.useState(false);
    const[status,setStatus] = React.useState(false);

    const submit = async(e)=>{

        e.preventDefault();
        const date = new Date();
        const time = date.getTime();
        const tracking_num = `CD&T${time.toString().slice(0, 10)}US`;
        let tracking_num_field = document.querySelector('#tracking_num').value= tracking_num;

        const data = new FormData(e.currentTarget);
        setProcessing(true);

        try{
            const res = await axios.post(route('api.create_shipment'),data);
            console.log(res)
            if(res.data.status){
                setMessage(res.data.message);
                setStatus(res.data.status);
                e.target.reset();
            }
          
            setProcessing(false)
        }catch(error){
            console.log(error)
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
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Add Shipment</h2>}
    >
        <Head title="Add Shipment" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        <div className='text-sm font-semibold'>Shipment Details</div>
                        <hr className='border-gray-300 mb-5'/>
                        <form onSubmit={submit}>
                            <input type="hidden"  id='tracking_num'value=''name='tracking_num'/>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                                {/* Shipper information fields start here */}
                                <div className=''>
                                    <h3 className='font-black uppercase mb-4 text-gold'>Shipper Details</h3>
                                

                                    <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                        <div className='w-[200px]'>Name</div>
                                        <TextInput 
                                            required
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
                                        className="w-full lg:w-[36%] border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gold  focus:ring-0 dark:focus:ring-indigo-600 rounded-md shadow-sm"
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
                                                <option value="" defaultValue="selected">- Select -</option>
                                                <option value="Cash">Cash</option>
                                                <option value="Cheque">Cheque</option>
                                                <option value="Mobile Money">Mobile Money</option>
                                            </select>

                                        </div>

                                        
                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Departure Time</div>
                                            <TextInput 
                                                required
                                                type="time" 
                                                name="departure_time"  
                                                placeholder="Departure Time" 
                                                className="w-full"
                                            />
                                        </div>

                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Destination</div>
                                            <TextInput 
                                                required
                                                name="destination"  
                                                placeholder="Destination" 
                                                className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gold  focus:ring-0 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                            />

                                        </div>

                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Pickup Time</div>
                                            <TextInput 
                                                required
                                                type="time" 
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
                                                <option value="" defaultValue="selected">- Select -</option>
                                                <option value="Air Shipping">Air Freight</option>
                                                <option value="Sea Shipping">Sea Transport</option>
                                                <option value="Land Shipping">Land Shipping</option>
                                            </select>


                                        </div>
                                
                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Quantity</div>
                                            <TextInput 
                                                required
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
                                                name="origin"  
                                                placeholder="Origin" 
                                                className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gold  focus:ring-0 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                            />

                                        </div>

                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Pickup Date</div>
                                            <TextInput 
                                                required
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
                                                type="date" 
                                                name="delivery_date"  
                                                placeholder="Expected Delivery Date" 
                                                className="w-full"
                                            />
                                        </div>

                                        <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                            <div className='w-[200px]'>Status</div>
                                            <select 
                                                required
                                                name="status"  
                                                placeholder="Status" 
                                                className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gold  focus:ring-0 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                            >
                                                <option value="" defaultValue="selected">- Select -</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Picked Up">Picked Up</option>
                                                <option value="On Hold">On Hold</option>
                                                <option value="Out for delivery">Out for delivery</option>
                                                <option value="In Transit">In Transit</option>
                                                <option value="Enroute">Enroute</option>
                                                <option value="Cancelled">Cancelled</option>
                                                <option value="Delivered">Delivered</option>
                                                <option value="Returned">Returned</option>
                                            </select>
                                        </div>
                                        {message &&<div id='alert' className={`${status ? 'bg-green-200' : 'bg-red-200'} px-3 py-1 rounded-md text-center mb-3`}>{message}</div>}

                                    

                                    </div>
                                </div>

                                <div className='flex mb-3 md:items-center flex-col md:flex-row'>
                                    <div className='w-full lg:w-[147px]'>Comment</div>
                                    <textarea 
                                        type="text" 
                                        name="comment"  
                                        placeholder="Comment" 
                                        className="w-full lg:w-[36%] border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-gold  focus:ring-0 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                                    />
                                </div>

                            </div>
                            {/* Shipment Information Ends Here */}

                            <div className='text-right'>
                                <PrimaryButton className="inline-flex items-center justify-center gap-2 items-bottom bg-primary dark:bg-[#F17600] dark:hover:bg-yellow-500 dark:hover:text-white dark:text-white hover:bg-gold rounded-md font-semibold px-2 py-3 transition-all duration-300 ease-in  text-white" disabled={processing}>
                                { (processing) ? <Loader /> : <span>Create Shipment</span>}
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}

export default AddShipment