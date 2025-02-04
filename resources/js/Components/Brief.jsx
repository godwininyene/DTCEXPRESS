import React from 'react'
import img3 from  '@/Assets/images/delivery_agent.jpg';
import { Link, Head } from '@inertiajs/react';

const Brief = () => {
  return (
    <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">

            <div data-aos="fade-up" className='text-white aos-init aos-animate'>
                <div className=''>
                    <img src={img3} alt="" className='w-full' />
                </div>
            </div>

            <div data-aos="fade-up" className='unique py-12 lg:px-5 w-full bg-white text-black aos-init aos-animate'>
                <div className=''>
                  <h1 className='font-bold text-2xl md:text-3xl lg:mt-10 px-5'>Logistics Solutions For Your Industry.</h1>
                  <p className='text-black px-5 py-10'>
                    Our Services is skillfully managed and monitored from collection to delievery.
                    Our steadfast services can be trusted & Wide range of Network 
                    including Road pickup and Doorstep Deliveries.
                  </p>
                  <Link href="track" className='inline-block text-white bg-gold leading-[46px]  rounded-md font-semibold px-8 border-2 border-transparent ml-4 ps-3 pe-3 transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold'>Track your parcel</Link>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Brief