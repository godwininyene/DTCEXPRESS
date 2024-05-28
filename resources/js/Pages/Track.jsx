import React from 'react'
import { Link, Head } from '@inertiajs/react';
import BaseLayout from '@/Layouts/BaseLayout';
import bannerBg from '@/Assets/images/banner_bg.jpg';
import Logo from '@/Assets/images/logo.png';
import Barcode from '@/Assets/images/barcode.png'
import {BsMapFill} from 'react-icons/bs';
import Loader from '@/Components/Loader';
import spinner from '@/Assets/images/loader.gif';


const Track = () => {
    const[processing, setProcessing] = React.useState(false);
    const[shipment, setShipment] = React.useState(false);
    const[error,setError] = React.useState(false);


    const submit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setProcessing(true);

        // getLocation();

        try{
            const res = await axios.post(route('api.track_shipment'),data);
            if(res.data.status){
                setShipment(res.data.shipment);
            }
          
            setProcessing(false)
        }catch(error){
            setError(error.response.data.message);
            if(error){
                setShipment(false);
            }
            setProcessing(false);
        }

    }

    const printPageArea = ()=>{
        let printContent = document.querySelector('#print_area').innerHTML;
        let originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML= originalContent;
    }

    // var map = new google.maps.Map(mapCanvas, mapOptions);
    var x = document.getElementById("mapholder");
    function getLocation() {
    if (navigator.geolocation) {
        console.log(navigator)
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    }

    function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon)
    var mapholder = document.getElementById('mapholder')
    mapholder.style.height = '250px';
    mapholder.style.width = '500px';

    var myOptions = {
        center:latlon,zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    }
        
    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
    }

    function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
        case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
        case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
        case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }

    
    }
  return (
    <BaseLayout>
       <Head title="Contact - CD & T Express">
            <meta name="description"  content="Track with your 15 character tracking number." />
            <meta name="keywords" content="CD & T Express logistics company, International logistics services,  logistics solution, courier delivery, sea freight, Air Freight, Land Freight" />
          </Head>
       

        <div className="h-[318px] bg-center" style={{backgroundImage:`url(${bannerBg})`}}>
            <div className={`bg-gradient-to-b pt-28 h-full from-[#000000ec] dark:from-[#000000da] via-[#000000b9] to-[#000000b9] dark:to-[#000000d5]  text-primary`}>
                <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-7 gap-4 mx-auto max-w-6xl px-8 md:px-2'>
                    <div data-aos="zoom-in" className='lg:col-span-4'>
                        <div className='rounded text-white opacity py-12 p-2 md:px-1 items-center'>
                            <span className='class="block mt-3 mb-0 text-xl flex items-center'>
                                <BsMapFill />
                                Tracking
                            </span>
                            <span className='block text-3xl font-bold uppercase'>parcel status details</span>
                            <hr className='w-1/4 border-2 border-yellow-400' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id='tracking-component-div' className='p-5'>
            <div className="container max-w-6xl py-6 mx-auto text-center">
                <div className='mt-5 justify-content-center'>
                    <div className='w-1/2 mx-auto bg-red 300'>
                        {/* <img src={bannerBg} alt=""  className='inline-block mx-auto h-24 w-24'/> */}
                    </div>

                </div>
                <div className='justify-content-center mt-5'>
                    <div className='w-2/3 mx-auto'>
                    <div id="mapholder"></div>
                        <div className='mb-4'>
                            <h2 className='text-center uppercase'>Track with your 15 character tracking number</h2>
                        </div>
                        <form onSubmit={submit}className=''>
                            <div className="mb-4">
                                <input name='tracking_num' type="text"  className='py-3 px-4 w-full rounded-md border border-[#1F2235] transition-all duration-100 focus:outline-0 focus:border-gold' />
                                {error && <div className='bg-red-200 rounded py-2 px-2 mt-1'>{error}</div>}
                               
                            </div>
                            <div className="text-center">
                                <button className='inline-flex items-center text-white bg-gold  rounded-md font-semibold px-8 py-2 border-2 border-transparent  transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold'>
                                    
                                    { (processing) ?  <div className='flex items-center'> <span>Processing</span><img src={spinner} className="h-4 ml-1"/></div> : <span>Track</span>}
                                </button>   
                            </div>
                        </form>
                    </div>
                </div>
                <div className='row justify-content-center mt-5'>
                    <div data-aos="fade-up" className='col-md-6 mb-5'>
                        <h3>Here’s the fastest way to check the status of your shipment. There will be no need to call Customer Service – our online results give you real-time, detailed progress of your shipment is shown through CD & T Express logistics company Services.</h3>
                    </div>
                    {/* <button onClick={getLocation}>Try It</button> */}
                </div>

            </div>
            <div className="max-w-6xl mx-auto">
               
                { shipment &&(
                    <div className='pt-2 pb-10 border-t border-t-gray-300'>
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

                            <div className="max-w-5xl mx-auto mt-7">

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
                    )
                }
            </div>
        </div>
    </BaseLayout>
    
  )
}

export default Track
