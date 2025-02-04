import React from 'react'
import { Link, Head } from '@inertiajs/react';
import BaseLayout from '@/Layouts/BaseLayout'
import bannerBg from '@/Assets/images/banner_bg.jpg';
import {MdMedicalServices} from 'react-icons/md'
import { FaSteam,FaTools,FaThumbsUp,FaLightbulb,FaQuoteLeft } from 'react-icons/fa';

const Services = () => {
  return (
    <BaseLayout>
      <Head title="Services - CD & T Express">
        <meta name="description"content="CD & T Express logistics company is the world's driving worldwide coordination supplier - we uphold industry and exchange the worldwide trade of merchandise through land, sea, and air transport." />
        <meta name="keywords" content="CD & T Express logistics company, International logistics services,  logistics solution, courier delivery, sea freight, Air Freight, Land Freight" />
      </Head>

      <div className="about-page-container bg-center" style={{backgroundImage:`url(${bannerBg})`}}>
          <div className={`bg-gradient-to-b pt-10 lg:pt-28 h-full from-[#000000ec] dark:from-[#000000da] via-[#000000b9] to-[#000000b9] dark:to-[#000000d5]  text-primary`}>
              <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-7 gap-4 mx-auto max-w-6xl px-8 md:px-2'>
                  <div data-aos="zoom-in" className='lg:col-span-4'>
                      <div className='rounded text-white opacity py-12 p-2 md:px-1 items-center'>
                          <span className='class="block mt-3 mb-0 text-xl flex items-center'>
                              <MdMedicalServices />
                              Our Services
                          </span>
                          <span className='block text-3xl font-bold uppercase'>CD & T Express logistics company</span>
                          <hr className='w-1/4 border-2 border-yellow-400' />
                      </div>
                  </div>
              </div>
          </div>
      </div>

        
      <section className='py-12 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center md:py-5 py-3 bg-white'>
            <h2 className='md:text-xl text-md text-black font-semibold tracking-wide uppercase font-sans'>Our Services</h2>
            <p className='mt-2 md:text-2xl text-lg leading-8 font-extrabold tracking-tight text-black sm:text-4xl'>Learn More About Our Unique Services</p>
            <p className='mt-4 max-w-2xl text-xs md:text-xl text-gray-800 lg:mx-auto'>Drawing a transparent overview of our Unique Services about transactions and others.</p>
          </div>

          <div className='mt-10'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>

              <div className='shadow-xl cursor-pointer font-sans  rounded-lg p-6 bg-white' data-aos="fade-down" data-aos-easing="ease-out-cubic">
                <div className='h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full'>
                  <FaSteam  className='text-3xl  inline-block mr-1'/>
                </div>
                <h3 className='text-gold mt-4 text-3xl'>Competitive exchange rates</h3>
                <p className='text-black mt-3'>
                  We are here to serve, and also make sure it affordable. CD & T Express logistics company is exceptional 
                  when it comes to prices despite the competition around currently,
                  we give the the best price.
                </p>
              </div>

              <div className='shadow-xl cursor-pointer font-sans  rounded-lg p-6 bg-white' data-aos="fade-right" data-aos-easing="ease-out-cubic">
                <div className='h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full'>
                  <FaTools  className='text-3xl  inline-block mr-1'/>
                </div>
                <h3 className='text-gold mt-4 text-3xl'>No hidden fees</h3>
                <p className='text-black mt-3'>
                  We have built a good standard and value for ourselves here, 
                  whatever has being calculated from your quote is equally
                  what you're going to be charged no extra charges.
                </p>
              </div>


              <div className='shadow-xl cursor-pointer font-sans  rounded-lg p-6 bg-white' data-aos="fade-right" data-aos-easing="ease-out-cubic">
                <div className='h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full'>
                  <FaThumbsUp  className='text-3xl  inline-block mr-1'/>
                </div>
                <h3 className='text-gold mt-4 text-3xl'>Transfers are instant</h3>
                <p className='text-black mt-3'>
                  We are currently banking with the most prominent and reliable bank, 
                  your tansfers are instantly recieved by us without delays. 
                  You can make transfer to us from whatever country you are and your item will be at your doorstep.
                </p>
              </div>

              <div className='shadow-xl cursor-pointer font-sans  rounded-lg p-6 bg-white' data-aos="fade-right" data-aos-easing="ease-out-cubic">
                <div className='h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full'>
                  <FaLightbulb  className='text-3xl  inline-block mr-1'/>
                </div>
                <h3 className='text-gold mt-4 text-3xl'>Mobile notifications</h3>
                <p className='text-black mt-3'>
                  Technology is the order of the day, so our mobile phones are always active so as to recieve sensitive data such as; your request, alert, 
                  and message to hasten up our client request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us  bg-grey-500 bg-cover bg-center bg-fixed">
        <div data-aos="zoom-in" className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-black ">
            
            <div data-aos="zoom-in" className='lg:py-32 py-12 px-2 sm:text-center md:text-right text-shadow'>
                <div className=''>
                    <h4 className='text-base font-semibold my-2 uppercase'>We are the best</h4>
                    <h1 className='text-2xl font-bold my-2 uppercase'>Cargo in numbers</h1>
                    <div className="my-3 flex">
                        <span className="block pr-1">
                            <FaQuoteLeft className='text-5xl'/>
                        </span>
                        <div className="flex-initial">
                            We are one of the fastest growing logistics and courier services company within our 
                            region and we intend to keep it that way! CD & T Express logistics company relengthlessly work to
                            make sure we satisfy our customers 
                            in order to keep the good percentage of our evalutions and rating high.
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" className='lg:py-32 md:py-12 lg:pb-0 pb-12 px-6 lg:col-span-2'>

                <div className="mb-3">

                    <small className="font-semibold uppercase">
                        Market Share in region
                    </small>

                    <div className="my-1">

                        <div className='w-full bg-gray-400  bg-opacity-25 overflow-hidden'>
                            <div className='px-3 text-white bg-gray-800 text-right w-[83.5%]'>
                               <small> 83.5%</small>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="mb-3">
                    <small className="font-semibold uppercase">
                        REVENUE GROWTH PER YEAR
                    </small>

                    <div className="my-1">

                        <div className='w-full bg-gray-400  bg-opacity-25 overflow-hidden'>
                            <div className='px-3 text-white bg-gray-800 text-right w-[57.4%]'>
                            <small> 57.4%</small>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="mb-3">
                    <small className="font-semibold uppercase">
                        PROFIT GROWTH PER YEAR
                    </small>

                    <div className="my-1">

                        <div className='w-full bg-gray-400  bg-opacity-25 overflow-hidden'>
                            <div className='px-3 text-white bg-gray-800 text-right w-[76.3%]'>
                            <small> 76.3%</small>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="mb-3">
                    <small className="font-semibold uppercase">
                        INCREASE IN NUMBER OF LOGISTICS CENTERS
                    </small>

                    <div className="my-1">

                        <div className='w-full bg-gray-400  bg-opacity-25 overflow-hidden'>
                            <div className='px-3 text-white bg-gray-800 text-right w-[99.9%]'>
                            <small> 99.9%</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className='w-full bg-gray-100'>
        <div data-aos="fade-in" className='py-12 px-6 max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            
            <div className='lg:col-span-2 lg:text-right md:text-center text-left'>
              <h2 className='text-gold text-3xl font-bold'>Your Consignment is Our Commitment!</h2>
              <p className='text-gray-700 text-base font-semibold'>For us moving your consignment from one destination to the other is equivalent to ensuring your reputation, travels far and wide, unblemished.</p>
            </div>

            <div className=''>
              <div className='bg-white shadow w-full py-3 px-6'>
                <p className='mb-1'>Interested in finding out more? Click on the button below to contact us.</p>
                <Link href="contact Us" className='inline-block text-white bg-gold leading-[46px]  rounded-md font-semibold px-4 border-2 border-transparent   transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold'>
                    Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>
    
    </BaseLayout>
   
  )
}

export default Services