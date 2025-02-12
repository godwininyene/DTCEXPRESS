import React from 'react';
import {Link } from '@inertiajs/react';
import logo from '@/Assets/images//logo.png'
import {LuMenu} from 'react-icons/lu';
import{MdClose} from 'react-icons/md';
import {IoIosHome, IoMdInformationCircle, IoIosHeadset} from 'react-icons/io';
import {MdMedicalServices} from 'react-icons/md';

const Header = () => {
    const[isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = ()=> setIsOpen(prev => !prev);

    const[isFixedClass, setiSFixedClass] = React.useState(false);

    const addFixedClass = ()=> window.pageYOffset > 200 ? setiSFixedClass(true) :setiSFixedClass(false);

    window.addEventListener('scroll', addFixedClass	)
    
    const fixedHeader ={
        backgroundColor:'#1b3a5d',
        borderBottom: "2px solid #3ea2ee",
        boxShadow:"0 10px 5px rgba(15, 16, 24, 0.1)",
    }
   
    return(
        <div className={`header fixed w-full z-50 left-0 top-0 ${isFixedClass ? 'animate-fadeInDown' :''}`} style={isFixedClass ? fixedHeader : {}}>
            <div className='max-w-[1140px] mx-auto w-full'> 

                <nav className='flex items-center  justify-between flex-wrap lg:flex-nowrap px-5 py-2 relative'>
                    <Link href="/" className='mr-4'>
                        <img src={logo} alt="" className="h-10"/>
                    </Link>

                    {/*Mobile Nav Icon */}
                    <button className=' border-0 outline-0 shadow-none block lg:hidden' onClick={toggleMenu}>
                       
                        {
                            (!isOpen) ?(
                                    <LuMenu className="text-3xl  inline text-white"/>
                                )
                                
                                :(
                                    <MdClose className="text-3xl  inline-block text-white"/>
                            ) 
                        }
                    </button>

                    <div className={`${isOpen ? 'h-80 bg-primary mt-3 rounded ': 'h-0'} overflow-hidden lg:h-auto lg:flex items-center basis-full grow transition-all duration-300 ease-linear`}>
                        <ul className='flex-col lg:flex-row flex lg:items-center ml-auto py-4 lg:py-0' id='header-nav'>
                           
                            <li className=''>
                                <Link href="/" className={`text-base font-bold ${route().current('/') ? 'text-gold': 'text-white'} py-3 px-4 hover:text-gold cursor-pointer flex items-center `} >
                                    <IoIosHome className='text-base  inline-block mr-1'/>
                                   Home
                                </Link>
                            </li>

                            <li className=''>
                                <Link href="about" className={`text-base font-bold ${route().current('about') ? 'text-gold': 'text-white'} py-3 px-4 hover:text-gold cursor-pointer flex items-center `} >
                                    <IoMdInformationCircle className='text-base  inline-block mr-1'/>
                                   About
                                </Link>
                            </li>

                            <li className=''>
                                <Link href="services" className={`text-base font-bold ${route().current('services') ? 'text-gold': 'text-white'} py-3 px-4 hover:text-gold cursor-pointer flex items-center `} >
                                    <MdMedicalServices className='text-base  inline-block mr-1'/>
                                   Services
                                </Link>
                            </li>

                            <li className=''>
                                <Link href="contact-us" className={`text-base font-bold ${route().current('contact-us') ? 'text-gold': 'text-white'} py-3 px-4 hover:text-gold cursor-pointer flex items-center `} >
                                    <IoIosHeadset className='text-base  inline-block mr-1'/>
                                    Contact Us
                                </Link>

                              
                            </li>
                          
                        </ul>
                        <li className=''>
                           
                            <Link href="track" className='inline-block text-white bg-gold leading-[46px]  rounded-md font-semibold px-8 border-2 border-transparent lg:ml-4 ps-3 pe-3 transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold'>
                                Track your parcel
                            </Link>
                        </li>
                    </div>
                </nav>
            </div>
        </div>
    )
  
}

export default Header