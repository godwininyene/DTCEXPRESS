import React from 'react';
import BaseLayout from '@/Layouts/BaseLayout';
import { Link, Head } from '@inertiajs/react';
import bannerBg from '@/Assets/images/banner_bg.jpg';
import img1 from '@/Assets/images/bg-1.jpeg';
import img2 from '@/Assets/images/bg-2.jpg';
import {IoMdInformationCircle} from 'react-icons/io'

const About = () => {
  return (
    <BaseLayout>
        <Head title="About Us">
            <meta name="description"content="CD & T Express logistics company is the world's driving worldwide coordination supplier - we uphold industry and exchange the worldwide trade of merchandise through land, sea, and air transport." />
            <meta name="keywords" content="CD & T Express logistics company, International logistics services,  logistics solution, courier delivery, sea freight, Air Freight, Land Freight" />
        </Head>

       <div className="about-page-container bg-center" style={{backgroundImage:`url(${bannerBg})`}}>
            <div className={`bg-gradient-to-b pt-10 lg:pt-28 h-full from-[#000000ec] dark:from-[#000000da] via-[#000000b9] to-[#000000b9] dark:to-[#000000d5]  text-primary`}>
                <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-7 gap-4 mx-auto max-w-6xl px-8 md:px-2'>
                    <div data-aos="zoom-in" className='lg:col-span-4'>
                        <div className='rounded text-white opacity py-12 p-2 md:px-1 items-center'>
                            <span className='class="block mt-3 mb-0 text-xl flex items-center'>
                                <IoMdInformationCircle />
                                About Us
                            </span>
                            <span className='block text-3xl font-bold uppercase'>CD & T Express logistics company</span>
                            <hr className='w-1/4 border-2 border-yellow-400' />
                        </div>  
                    </div>
                </div>
            </div>
        </div>

        <section className='bg-gray-100 py-7 px-6'>
            <h1 className='font-san font-bold text-gold text-2xl text-center mt-5 uppercase'>Our Core Values</h1>
            <div className='max-w-6xl py-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            
                <div data-aos="zoom-in" className='py-2 grid grid-cols-4'>
                    <div className='bg-gold w-7 h-7 cols-span-1'>
                        <h2 className='font-bold  text-center text-white'>1</h2>
                    </div>
                    <div className='col-span-3'>
                        <span className='font-bold text-xl text-gold'>Deligient Services</span>
                        <p className='text-sm text-black'>CD & T Express logistics company Services are being carried out with outermost deligience and supervision.</p>
                    </div>
                </div>

                <div data-aos="zoom-in" className='py-2 grid grid-cols-4'>
                    <div className='bg-gold w-7 h-7 cols-span-1'>
                        <h2 className='font-bold  text-center text-white'>2</h2>
                    </div>
                    <div className='col-span-3'>
                        <span className='font-bold text-xl text-gold'>Teamwork</span>
                        <p className='text-sm text-black'>Efficient and consistantly working as a teamwork is what makes us exceptional to be able to deliver.</p>
                    </div>
                </div>

                <div data-aos="zoom-in" className='py-2 grid grid-cols-4'>
                    <div className='bg-gold w-7 h-7 cols-span-1'>
                        <h2 className='font-bold  text-center text-white'>3</h2>
                    </div>
                    <div className='col-span-3'>
                        <span className='font-bold text-xl text-gold'>Integrity</span>
                        <p className='text-sm text-black'>Maintaining our moral principles is very essential regarding our services towards our clients.</p>
                    </div>
                </div>


                <div data-aos="zoom-in" className='py-2 grid grid-cols-4'>
                    <div className='bg-gold w-7 h-7 cols-span-1'>
                        <h2 className='font-bold  text-center text-white'>4</h2>
                    </div>
                    <div className='col-span-3'>
                        <span className='font-bold text-xl text-gold'>Sustainability</span>
                        <p className='text-sm text-black'>We make sure that we maintain our usual concept of doing things no matter the setbacks.</p>
                    </div>
                </div>
            </div>
        </section>

        
      <section className='h-30'>
        <div className=''>
          <div className='max-w-6xl py-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            
            
            <div data-aos="fade-up" className='py-9 px-3'>
              <div className='text-xl italic'>
                <p className='mt-1 text-black'>
                  At CD & T Express logistics company, we pride ourselves on our capacity to give shippers, 
                  both substantial and little, with an arrangement of administrations intended to
                  deal with their complex and regularly changing supply chains. 
                  We are a non-resource based logistics suppliers with access to one of the world’s biggest systems of air, 
                  sea and road transportation bearers.
                </p>
                <p className='py-5 block '>
                  <Link to="services" className='inline-block text-white bg-gold leading-[46px]  rounded-md font-semibold px-8 border-2 border-transparent ps-3 pe-3 transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold'>
                    See Our Services
                  </Link>
                </p>
              </div>
            </div>


            <div data-aos="fade-up" className='py-9 px-3'>
              <div className=''>
                <img src={img1} alt="" className='mx-auto rounded-lg mb-3 md:mb-0 max-h-full max-w-full'/>
              </div>
            </div>

            <div data-aos="fade-up" className='py-9 px-3'>
              <div className=''>
                <img src={img2} alt="" className='mx-auto rounded-lg mb-3 md:mb-0 max-h-full max-w-full'/>
              </div>
            </div>
            <div data-aos="fade-up" className='py-9 px-3'>
              <div className='text-xl italic px-6'>
                <p className='mt-1'>
                  Nevertheless our transportation abilities, ‘CD & T Express logistics company service’ has a
                  system of distribution centers deliberately situated in key residential areas.
                  With a joined impression of in excess of 3 million square feet over the U.K., 
                  we can meet our client’s stockpiling and satisfaction needs.
                </p>
                <p className='mt-3'>
                  Employing our worldwide transportation and stockroom connect with our industry skill, 
                  we can restructure payload transportation and
                  dispersion forms with an emphasis on building a very strong supply chains.
                </p>

              </div>
            </div>


          </div>
        </div>
      </section>
    </BaseLayout>
    
  )
}

export default About