import React from 'react'
import {FaQuoteLeft} from 'react-icons/fa'
const Praisal = () => {
  return (
    <section className="why-us py-24 bg-grey-500 bg-cover bg-center bg-fixed">
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
                            <div className='px-3 text-white bg-primary text-right w-[83.5%]'>
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
                            <div className='px-3 text-white bg-primary text-right w-[57.4%]'>
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
                            <div className='px-3 text-white bg-primary text-right w-[76.3%]'>
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
                            <div className='px-3 text-white bg-primary text-right w-[99.9%]'>
                            <small> 99.9%</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Praisal