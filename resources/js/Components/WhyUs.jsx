
import React from 'react';
import { FaShuttleVan } from 'react-icons/fa';
import {LuBike, LuMenu} from 'react-icons/lu';
import {BsFillChatSquareFill, BsMapFill} from 'react-icons/bs'

const WhyUs = ()=>{
    return(
        <section className="why-us py-24 bg-grey-500 bg-cover bg-center bg-fixed">
            <div className="max-w-[1140px] w-11/12 mx-auto">
                <div className="max-w-4xl mx-auto ">
                    <h1 className="font-bold text-3xl lg:text-4xl uppercase text-center relative">Why Our Clients Chooses Us</h1>
                    <p className="text-center text-md  my-3">
                        We are not just any courier service, we give our client the best satisfactory
                        result and delievery they can get and we deliever promptly. 
                        With an affordable charges while working as a team to utimately give you the best.
                    </p>
                </div>
            </div>

            <div className="max-w-[1140px] w-11/12 mx-auto">
                <div className=" my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                    <div className="py-1 mx-4 md:mx-0">
                        <div data-aos="zoom-in-up" className="p-4 grid grid-cols-6 gap-4 shadow-md bg-white">
                            <div className="text-right font-bold text-yellow-500">
                                <FaShuttleVan className='text-3xl  inline-block'/>
                            </div>
                            <div className="col-span-5">
                                <h2 className="mb-3 font-semibold text-black text-lg uppercase">Pick Up</h2>
                                <p className="text-black">
                                    We do pickup as fast as possible regardless of the location. 
                                    Our dynamic and prompt response parcel managers are 
                                    always ready do pickup to your preferred location in no time.
                                </p>
                            </div>
                        </div>
                    </div>




                    <div className="py-1 mx-4 md:mx-0">
                        <div data-aos="zoom-in-up" className="p-4 grid grid-cols-6 gap-4 shadow-md bg-white">
                            <div className="text-right font-bold text-yellow-500">
                                <BsMapFill  className='text-3xl  inline-block'/>
                            </div>
                            <div className="col-span-5">
                                <h2 className="mb-3 font-semibold text-black text-lg uppercase">Track Your Parcel</h2>
                                <p className="text-black">
                                    You can track the movement of your parcel and know the exact location 
                                    and the pace at which it moving from pickup to delivery as you wait for it.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="py-1 mx-4 md:mx-0">
                        <div data-aos="zoom-in-up" className="p-4 grid grid-cols-6 gap-4 shadow-md bg-white">
                            <div className="text-right font-bold text-yellow-500">
                                <LuBike  className='text-4xl  inline-block'/>
                            </div>
                            <div className="col-span-5">
                                <h2 className="mb-3 font-semibold text-black text-lg uppercase">Fast Delivery</h2>
                                <p className="text-black">
                                    Our of team riders are reliable and competent and deliver speedily without excuses.
                                    You aquire it, we deliver 24/7, 
                                    No stress, No worries and No stories, We got you covered.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="py-1 mx-4 md:mx-0">
                        <div data-aos="zoom-in-up" className="p-4 grid grid-cols-6 gap-4 shadow-md bg-white">
                            <div className="text-right font-bold text-yellow-500">
                                <BsFillChatSquareFill className='text-3xl  inline-block'/>
                            </div>
                            <div className="col-span-5">
                                <h2 className="mb-3 font-semibold text-black text-lg uppercase">Request Quote</h2>
                                <p className="text-black">
                                In Express Logistics Courier Services, we provided a form for our customers to place their quote
                                request and get a response from us based on their quote request.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyUs;
