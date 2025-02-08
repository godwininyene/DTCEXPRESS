import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link } from '@inertiajs/react';
import React from 'react';
import Pagination from '@/Components/Pagination';
import { FaTimesCircle } from 'react-icons/fa';
import Dropdown from '@/Components/Dropdown';
import Modal from '@/Components/CustomModal'; 
import TextInput from '@/Components/TextInput';
import TextArea from '@/Components/TextArea';
import InputLabel from '@/Components/InputLabel';
import Loader from '@/Components/Loader';
import PrimaryButton from '@/Components/PrimaryButton';
import Spinner from '@/Assets/images/loader.gif';


export default function Dashboard({ auth}) {

    const[shipments, setShipments] = React.useState(null);
    const[shipment, setShipment] = React.useState(null);
    const [pagination, setPagination] = React.useState([]);
    const[ID, setID] = React.useState(null);
    const[processing, setProcessing] = React.useState(false);
    const[isDeleting, setIsDeleting] = React.useState(false);

    const toggleID = (e,id) =>{
        e.preventDefault();
        setHistoryModal(true);
        setID(id)
    }


    const fetch_shipments = async () => {
        try{
            const res = await axios.get(route('api.fetch_shipments'));
            if(res.data.status){
                setPagination(res.data.shipments);
                setShipments(res.data.shipments.data);
            }
        }catch(error){
           console.log(error)
        }

    }

    React.useEffect(()=>{
        fetch_shipments();
    },[]);

    const paginateResult = (data)=>{
        setPagination(data);
        setShipments(data.data);
    }

    const[historyModal, setHistoryModal] =React.useState(false);

    const updateHistory = async(e)=>{
        e.preventDefault();
        setHistoryModal(true);
        const data = new FormData(e.currentTarget);
        setProcessing(true);

        try{
            const res = await axios.post(route('api.update_shipment_history'), data);
            console.log(res);
            if(res.data.status){
                setPagination(res.data.shipments);
                setShipments(res.data.shipments.data);
                setHistoryModal(false);
            }
            setProcessing(false)
        }catch(error){
           console.log(error)
           setProcessing(false)
        }
    }

    const deleteShipment = async(id)=>{
      
       setIsDeleting(true);
        try{
            const res = await axios.post(route('api.delete_shipment'), {id:id});
            if(res.data.status){
                setPagination(res.data.shipments);
                setShipments(res.data.shipments.data);
               alert(res.data.message);
            }
            setIsDeleting(false);
        }catch(error){
           console.log(error)
           setIsDeleting(false);
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4 lg:p-6 text-gray-900 dark:text-gray-100">
                            <div className="rounded-lg bg-white dark:bg-slate-800   overflow-x-auto shadow-sm shadow-white">
                                <div className='text-sm font-semibold'>Shipments</div>
                                <hr className='border-gray-300 mb-5'/>

                                {pagination && pagination.total >0 && <div className="bg-primary mb-4 px-2 lg:px-4 py-1">
                                        <span className="text-sm lg:text-base text-white">Showing from {pagination.from} to {pagination.to} of  {pagination.total} total shipments</span>
                                </div>}
                                <div className="overflow-x-auto overflow-y-auto">
                                    <table className="w-full">
                                        
                                        <thead className='bg-[#f9fafb] dark:bg-slate-800 text-center'>
                                    
                                            <th className="text-sm uppercase font-semibold   px-4 py-2 text-center">sn</th>
                                            <th className="text-sm uppercase font-semibold   px-4 py-2 text-center">Tracking Number</th>
                                            <th className="text-sm uppercase font-semibold   px-4 py-2 text-center">Shipper Name</th>
                                            <th className="text-sm uppercase font-semibold   px-4 py-2 text-center">Receiver Name</th>
                                            <th className="text-sm uppercase font-semibold   px-4 py-2 text-center">Date</th>
                                            <th className="text-sm uppercase font-semibold   px-4 py-2 text-center">Status</th>
                                            <th className="text-sm uppercase font-semibold   px-4 py-2 text-center">Actions</th> 
                                        </thead>

                                                    
                                        <tbody>
                                            {shipments?.length > 0 && (
                                                shipments.map((shipment, i)=>(  
                                                
                                                    <tr key={shipment.id} className="border-b border-b-slate-300 text-center">
                                                        <td className="p-1 text-center">{i +1}</td>
                                                        <td className="text-sm p-1">{shipment.tracking_num} </td>
                                                        <td className="text-sm p-1">{shipment.shipper_name}</td>
                                                        <td className="text-sm p-1">{shipment.receiver_name}</td>
                                                        <td className="booth p-1">2023-19-10</td>
                                                        <td className="prodservice p-1 text-sm">{shipment.status}</td>
                                                        <td className="prodservice p-1 text-sm py-3 inline-flex relative">
                                                            <Link href={`invoice?id=${shipment.id}`} className='inline-block border rounded px-2 py-1 border-blue-700 text-blue-500 ml-2'>Invoice</Link>
                                                            <Link className='inline-block border rounded px-2 py-1 border-blue-700 text-blue-500 ml-2' href={`edit_shipment?id=${shipment.id}`}>Record</Link>
                                                            <Link className='inline-block border rounded px-2 py-1 border-blue-700 text-blue-500 ml-2' onClick={(e)=>toggleID(e,shipment.id)}>History</Link>
                                                           <button onClick={(e)=>(setID(shipment.id), deleteShipment(shipment.id))} className='inline-block border rounded px-2 py-1 border-red-700 text-red-500 ml-2'>
                                                                {
                                                                    (isDeleting && ID == shipment.id) ? <img src={Spinner} className="h-4 ml-1"/>: <span>Delete</span>
                                                                } 
                                                            </button>
                                                            
                                                        </td>
                                                    </tr>
                                                ))
                                                )
                                            }  
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                             {pagination && <div className="mt-3 flex justify-end">
                                <Pagination pageLimit={pagination.per_page} totalRecords={pagination.total} links={pagination.links} onPageResponse={(data) => paginateResult(data)} />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit History Modal */}
            <Modal show={historyModal} maxWidth="xl" onClose={() => setHistoryModal(false)}>
                <section className="px-4 py-3 dark:bg-slate-800">
                    <form onSubmit={updateHistory}>
                        <input type="hidden" name='shipment_id' value={ID}/>
                        <h2 className='font-semibold dark:text-slate-200'>Update Shipment History</h2>
                        <hr className='border-gray-300 mb-5'/>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           

                            <div className="mt-4">
                                <InputLabel htmlFor="location">
                                  Location
                                </InputLabel>

                                <TextInput
                                    id="location"
                                    type="text"
                                    required
                                    name="location"
                                    className="mt-1 block w-full dark:"
                                    placeholder="Enter Location"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="status">
                                  Status
                                </InputLabel>
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

                            <div className="mt-4 md:col-span-2">
                                <InputLabel htmlFor="remark">
                                    Remark
                                </InputLabel>

                                <TextArea
                                    id="remark"
                                    name="remark"
                                    className="mt-1 block w-full py-2 px-2"
                                />
                            </div>

                            <div className=''>
                                <PrimaryButton className="inline-flex items-center justify-center gap-2 items-bottom bg-primary dark:bg-[#F17600] dark:hover:bg-yellow-500 dark:hover:text-white dark:text-white hover:bg-gold rounded-md font-semibold px-2 py-3 transition-all duration-300 ease-in  text-white" disabled={processing}>
                                { (processing) ? <Loader /> : <span>Update History</span>}
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </section>
            </Modal>
        </AuthenticatedLayout>
    );
}
