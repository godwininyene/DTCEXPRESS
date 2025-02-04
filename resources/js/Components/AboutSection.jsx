import React from 'react'
import img1 from '@/Assets/images/bg-1.jpeg'
import img2 from '@/Assets/images/bg-2.jpg'
import img3 from '@/Assets/images/bg-3.jpeg'
import {Link } from '@inertiajs/react';
const AboutSection = () => {
  return (
    <section className="py-[50px] lg:py-[100px] bg-primary overflow-hidden px-3 lg:px-0">
        <div className="max-w-[1140px] mx-auto">
            <div className='flex gap-x-12 flex-col lg:flex-row items-center'>

                <div className='w-full lg:w-2/4 flex-shrink-0' data-aos="fade-right" data-aos-offset="350">
                    <div className=' bg-white rounded-md'>
                        <div className='p-3 lg:p-7 '>
                            <h2 className='text-4xl font-bold'>
                                CD & T Express logistics company Around
                                
                                <span className='text-gold inline-block ml-1'>the Word</span>
                            </h2>
                            <p  className=" mt-7">
                                CD & T Express logistics company is the world's driving worldwide coordination
                                supplier - we uphold industry and exchange the worldwide trade
                                of merchandise through land, sea, and air transport.
                               
                            </p>

                            <p  className="my-7 text-slate-500">
                               Our worth added administrations guarantee the progression of products
                               proceeds consistently and supply chains stay lean and streamlined for progress
                            </p>
                            <div className=''>
                                <Link href="about" className='inline-block bg-gold text-white leading-[46px]  rounded-md font-semibold px-8 border-2 border-transparent ps-3 pe-3 transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold'>More About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-2/4 flex-shrink-0 h-[300px] mt-10 lg:mt-0' >
                    <div className="composition h-full" data-aos-offset="350" data-aos-easing="fade-up">
						<img src={img1} className="composition-photo composition-photo-0" />
						<img src={img2} className="composition-photo composition-photo-1" />
						<img src={img3} className="composition-photo composition-photo-2" />
					</div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default AboutSection