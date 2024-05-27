import React,{useState} from 'react'
import { Link, Head } from '@inertiajs/react';
import BaseLayout from '@/Layouts/BaseLayout';
import bannerBg from '@/Assets/images/banner_bg.jpg';
import truck from '@/Assets/images/truck_green.jpeg';
import {IoIosHeadset} from 'react-icons/io';
import {FaArrowCircleDown, FaArrowCircleUp, FaEnvelope,FaShuttleVan} from 'react-icons/fa';
import {BsMapFill} from 'react-icons/bs';
import { faqs } from '@/Data/data';

const Contact = () => {
    const [ID, setID] = useState(null);

    const toggleID = ID=>setID(prevID=> prevID == null ? ID :null)
  return (
        <BaseLayout>
          <Head title="Contact Us" />

          <div className="about-page-container  h-[318px] bg-center" style={{backgroundImage:`url(${bannerBg})`}}>
              <div className={`bg-gradient-to-b pt-28 h-full from-[#000000ec] dark:from-[#000000da] via-[#000000b9] to-[#000000b9] dark:to-[#000000d5]  text-primary`}>
                  <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-7 gap-4 mx-auto max-w-6xl px-8 md:px-2'>
                      <div data-aos="zoom-in" className='lg:col-span-4'>
                          <div className='rounded text-white opacity py-12 p-2 md:px-1 items-center'>
                              <span className='class="block mt-3 mb-0 text-xl flex items-center'>
                                  <IoIosHeadset />
                                  Our Contact
                              </span>
                              <span className='block text-3xl font-bold uppercase'>CONTACT & INSTANT FEEDBACK</span>
                              <hr className='w-1/4 border-2 border-yellow-400' />
                          </div>
                      </div>
                  </div>  
              </div>
          </div>

        <section className='container max-w-6xl mx-auto sm:px-6 lg:px-8'>
        {/* Contact details Start Here */}
        <div className='contact-details'>
          <div className="row grid grid-cols-1 md:grid-cols-2 gap-9">
            <div data-aos="fade-up-left" className='py-8 md:py-16 px-2 order-2'>
              <img src={truck} alt="" className='max-h-full max-w-full' />
            </div>
            <div className='px-6 md:px-1 order-1'>
              <div data-aos="fade-up" className="mt-16 mb-4">
                <h1 className='font-bold text-black text-4xl'>
                  <strong>CD & T Express logistics company Services</strong>
                </h1>
              </div>
              <div data-aos="fade-up" className='my-8 text-lg'>Feel free to contact us at anytime for our services!</div>
              <div data-aos="fade-up" className='mb-4'>
                <p className='mb-3 flex items-center'>
                  <strong className='inline-flex items-center'>
                    <FaEnvelope className='inline-block mr-1'/>
                    Email Us:   
                  </strong>
                  <p>
                    <a href="mailto:info@expresscourier.com" className='text-blue-600 inline-block pl-1'>support@cdtexpress.com</a>
                  </p>   
                </p>
                <span className='block -mt-4'>  We usually reply almost instantly!</span>

                <p className='mt-3 flex items-center'>
                  <strong className='inline-flex items-center'>
                    <IoIosHeadset className='inline-block mr-1'/>
                    Call Us:   
                  </strong>
                  <p>
                    <a href="tel:+1 562 452 3270" className='text-blue-600 inline-block pl-1'>+1 562 452 3270</a>
                  </p>   
                </p>


                <p className='mt-3'>
                  <strong className='inline-flex items-center'>
                    <BsMapFill className='inline-block mr-1'/>
                    CONTACT ADDRESS  
                  </strong>
                  <p>United States.</p>   
                </p>
              </div>

            </div>

          </div>
        </div>
        {/* Contact details  End */}


        {/* FAQ  and contact form details Start Here */}
        <div className='pb-10'>
          <div className='row grid grid-cols-1 md:grid-cols-2 gap-4'>


            <div className='col-md-6'>
              <button id='btn_truck' data-aos="zoom-in" className='outline outline-white'>
                <FaShuttleVan className='text-3xl' />
              </button>
              <div data-aos="fade-up" className='col-md-12 py-4 bg-black'>
                <h3 className='uppercase text-white text-center font-semibold'>General faqs</h3>
              </div>
              <div className='text-left'>
                <div className='container mx-auto bg-white border-grey-light border'>
                  {faqs.map((question, i)=>(
                    
                    <div className=''>
                      <div className=''>
                        {/* Question and direction arrows start here */}
                        <div className='tab_header'>
                          <a href="#" className='tab__link p-4  uppercase text-gray-50 bg-gray-800 hover:bg-gold border-b-2 border-white flex justify-between' onClick={(e)=>(e.preventDefault(),toggleID(question.id))}>
                            <strong>{question.question}</strong>
                            {
                              (ID !== question.id)?(
                                <span className='arrow-down'><FaArrowCircleDown className='h-6'/></span>
                              ):(
                                <span className='up-arrow'><FaArrowCircleUp className='h-6'/></span>
                              )
                            }
                          </a>
                        </div>
                        {/* Questions and direction arrows end here */}

                        {/* Answer start here */}
                        <div className={`p-2 text-gray-900 normal-case ${ID== question.id ? 'block': 'hidden'}`}>
                          <p className='pb-5'>{question.ans}</p>

                        </div>
                        {/* Answer end here */}
                      </div>
                       {/* A single question and answer ends here. */}
                    </div>
                  ))}

                </div>

              </div>
            </div>

            {/* Contact form start here */}
            <div className='col-md-6'>
              <div data-aos="zoom-in" className='col-md-12 py-4 bg-gray-800'>
                <h2 className='uppercase text-white text-center font-semibold'>Send Us A Message</h2>
              </div>
              <div className='container'>
                <div className='row'>
                  <div data-aos="fade-up" className='py-3 px-4'>
                    <form className=''>
                      <div className="row">
                        <div className='form-group col-md-12 mb-4'>
                          <input 
                            type="text" 
                            name='fullname' 
                            required 
                            placeholder='Full name'
                            className='block w-full py-2 px-3 bg-white font-normal border border-slate-300 rounded-md transition-all duration-100 focus:outline-0 focus:border-gold' 
                          />

                        </div>
                      </div>


                      <div className="row">
                        <div className='form-group grid mb-4 grid-cols-1 md:grid-cols-2 gap-4'>
                          <input 
                            type="email" 
                            name='email' 
                            required 
                            placeholder='Email Address' 
                            className='block w-full py-2 px-3 bg-white font-normal border border-slate-300 rounded-md transition-all duration-100 focus:outline-0 focus:border-gold' 
                          />

                          <input 
                            type="tel" 
                            name='phone' 
                            required 
                            placeholder='Phone Number' 
                            className='block w-full py-2 px-3 bg-white font-normal border border-slate-300 rounded-md transition-all duration-100 focus:outline-0 focus:border-gold' 
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className='form-group col-md-12 mb-3'>
                          <input 
                            type="text" 
                            name='subject' 
                            required 
                            placeholder='Subject'
                            className='block w-full py-2 px-3 bg-white font-normal border border-slate-300 rounded-md transition-all duration-100 focus:outline-0 focus:border-gold' 
                          />

                        </div>
                      </div>

                      <div className="row">
                        <div className='form-group col-md-12 mb-3'>
                          <textarea 
                            type="text" 
                            name='message' 
                            required 
                            placeholder='Message'
                            rows={7}
                            className='block w-full py-2 px-3 bg-white font-normal border border-slate-300 rounded-md transition-all duration-100 focus:outline-0 focus:border-gold' 
                          />

                        </div>
                      </div>
                      <div className="row">
                        <div className='form-group col-md-12 mb-3'>
                           
                          <button className='inline-block text-white bg-gold leading-[46px]  rounded-md font-semibold px-8 border-2 border-transparent ps-3 pe-3 transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold'>
                               Send Message
                          </button>
                        </div>
                      </div>
                    </form>

                  </div>

                </div>

              </div>

            </div>
            {/* Contact form ends here */}

          </div>
        </div>
        {/* FAQ and contact form ddetails End Here */}
        </section>
        </BaseLayout>
  )
}

export default Contact