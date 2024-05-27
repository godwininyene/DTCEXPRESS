import React from 'react'
import {LuMenu} from 'react-icons/lu';
import bannerBg from '@/Assets/images/banner_bg.jpg';
import airImg from '@/Assets/images/blueplane1.jpg';
import seaImg from '@/Assets/images/ship5.jpg';
import roadImg from '@/Assets/images/roadtruck.jpg';
const Services = () => {
  return (
    <section className="py-24 bg-[rgb(244,244,244)]">
        <div className="max-w-[1140px] w-11/12 mx-auto">
            <div className="max-w-4xl mx-auto ">
                <h1 className="font-bold text-3xl lg:text-4xl uppercase text-center relative">Specialist Logistics Services</h1>
                <p className="text-center text-md  my-3">
                    We are not just any courier service, we give our client the best satisfactory
                    result and delievery they can get and we deliever promptly. 
                    With an affordable charges while working as a team to utimately give you the best.
                </p>
            </div>

            <div className='flex flex-col lg:flex-row mt-16 gap-x-5'>

                <div className='w-full lg:w-1/3 flex-shrink-0' data-aos="fade-up">
                    <div className='h-full service-card  rounded-md bg-white shadow-lg text-center overflow-hidden'>
                        <div className='image-card'>
                            
                            <img src={airImg} className='w-full'/>
                        </div>
                        <div className='text-card p-8 -mt-10'>
                            <h2 className='font-medium text-2xl lg:text-3xl  my-5'>Air Freight</h2>
                            <p className="">
                                CD & T Express logistics company services operates globally, name the country you are and
                                we are capable of delivery through our air freight.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-1/3 flex-shrink-0' data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <div className='h-full service-card  rounded-md bg-white shadow-lg text-center overflow-hidden'>
                        <div className='image-card'>
                            
                            <img src={seaImg} className='w-full'/>
                        </div>
                        <div className='text-card p-8 -mt-10'>
                            <h2 className='font-medium text-2xl lg:text-3xl  my-5'>Sea Freight</h2>
                            <p className="">
                               Delivery through the sea is not exceptional either, your items can be
                               delivered through sea if the weight of the items are heavy in nature
                               from any country.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-1/3 flex-shrink-0' data-aos="fade-up">
                    <div className='h-full service-card  rounded-md bg-white shadow-lg text-center overflow-hidden'>
                        <div className='image-card'>
                            
                            <img src={roadImg} className='w-full'/>
                        </div>
                        <div className='text-card p-8 -mt-10'>
                            <h2 className='font-medium text-2xl lg:text-3xl  my-5'>Road Delivery</h2>
                            <p className="">
                               Within the states, we are 100% ready to deliver through road or by train
                               that is locally we are also available to serve you better.
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </section>
  )
}

export default Services