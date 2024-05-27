import React from 'react';
import {IoIosHome, IoMdInformationCircle, IoIosHeadset, IoIosLogIn, IoIosPersonAdd} from 'react-icons/io';
import {FaLightbulb, FaSteam, FaThumbsUp, FaTools} from 'react-icons/fa';

const Extra = () => {
  return (
    <section className="py-10 bg-white">
       
            <div className='md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 p-6'>

                <div className='shadow-xl cursor-pointer font-sans text-center rounded-lg p-5' data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <FaSteam  className='text-3xl  inline-block mr-1'/>
                    <h3 className='text-gold mt-4 text-3xl'>Experience</h3>
                    <p className='text-black mt-3'>
                        Our team of staffs are not much but they have 
                        the experience and required skills needed to
                        caryy out daily activities.
                    </p>
                </div>

                <div className='shadow-xl cursor-pointer font-sans text-center rounded-lg p-5' data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <FaTools className='text-3xl  inline-block mr-1'/>
                    <h3 className='text-gold mt-4 text-3xl'>Tools</h3>
                    <p className='text-black mt-3'>
                        At CD & T Express logistics company services we have all the available and necessary 
                        equipment needed to make sure we serve you better.
                    </p>
                </div>

                <div className='shadow-xl cursor-pointer font-sans text-center rounded-lg p-5' data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <FaThumbsUp  className='text-3xl  inline-block mr-1'/>
                    <h3 className='text-gold mt-4 text-3xl'>Accesibility</h3>
                    <p className='text-black mt-3'>
                        It obvious that many courier service are not easily accessed, 
                        but at CD & T Express logistics company Service
                        we are easily accessed even with just a phone call.
                    </p>
                </div>

                <div className='shadow-xl cursor-pointer font-sans text-center rounded-lg p-5' data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <FaLightbulb  className='text-3xl  inline-block mr-1'/>
                    <h3 className='text-gold mt-4 text-3xl'>Affordability</h3>
                    <p className='text-black mt-3'>
                        Our service is very affordable for all kinds and level of individuals to
                        be able to use our services. We give you the best price.
                    </p>
                </div>
            </div>
       
    </section>
  )
}

export default Extra