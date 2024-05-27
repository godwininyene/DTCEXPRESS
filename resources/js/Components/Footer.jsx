import React from 'react';
import bannerBg from '@/Assets/images/banner_bg.jpg';
import {Link } from '@inertiajs/react';
import logo from '@/Assets/images//logo.png'
import {LuMenu, LuPackageOpen} from 'react-icons/lu';
import {FaArrowAltCircleRight, FaEnvelope, FaFacebookSquare, FaInstagramSquare, FaShuttleVan, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import {BsMapFill} from 'react-icons/bs';
import { MdOutlineFlight } from 'react-icons/md';
import { FcShipped } from 'react-icons/fc';
import {IoIosHeadset} from 'react-icons/io';
const Footer = ()=>{
    return (
        <footer className='footer bg-cover bg-center bg-fixed' style={{backgroundImage:`url(${bannerBg})`}}>
            <div className={`h-full bg-gradient-to-b from-[#000000ec] via-[#000000b9] to-[#000000b9] bg-opacity-95 text-primary`}>
                <div className='max-w-6xl mx-auto relative px-4 lg:px-0  py-20 text-white'>

                    <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6'>

                        <div className='col-span-1 py-2 px-4 lg:col-span-1'>
                            <div className='flex-shrink-0 flex items-center'>
                                <Link to="/" className=''>
                                    <img src={logo} alt="" className='' />
                                    <div className='text-sm mt-2'>
                                        <p>
                                            CD & T Express logistics company is your #1 source for expedited international automobile 
                                            shopping with services to over 120 countries worldwide, we have the resources 
                                            and expertise to facilitate your 
                                            international shipment and make the delivery as simple as possible.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='col-span-1 py-2 px-4'>
                            <div className=''>
                                <h3 className='font-bold uppercase'>Our Services</h3>
                                <hr className='border-gray-100 my-3'/>
                                <ul className='py-2 px-4'>
                                    <li className="mb-1">
                                        <Link href="services" className='flex items-center transition-all duration-100 hover:text-gold'>
                                            <FaShuttleVan className='mr-1'/>
                                            Pickups & Warehousing
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="services" className='flex items-center transition-all duration-100 hover:text-gold'>
                                            <LuPackageOpen className='mr-1'/>
                                            Packaging & Storage
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="services" className='flex items-center transition-all duration-100 hover:text-gold'>
                                            <BsMapFill className='mr-1'/>
                                            Parcel Tracking
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="services" className='flex items-center transition-all duration-100 hover:text-gold'>
                                            <MdOutlineFlight className='mr-1'/>
                                            Air Frieghts
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="services" className='flex items-center transition-all duration-100 hover:text-gold'>
                                            <FcShipped className='mr-1'/>
                                            Sea Frieghts
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-span-1 py-2 px-4'>
                            <div className=''>
                                <h3 className='font-bold uppercase'>Quick Links</h3>
                                <hr className='border-gray-100 my-3'/>
                                <ul className='py-2 px-4'>
                                    <li className="mb-1">
                                        <Link href="track" className='flex items-center transition-all duration-100 hover:text-gold'>
                                            <FaArrowAltCircleRight className='mr-1'/>
                                            Track your Parcel
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="services" className='flex items-center transition-all duration-100 hover:text-gold'>
                                            <FaArrowAltCircleRight className='mr-1'/>
                                            Our Locations
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="about" className='flex items-center transition-all duration-100 hover:text-gold'>
                                            <FaArrowAltCircleRight className='mr-1'/>
                                            About US and Notices
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="contact-us" className='flex items-center transition-all duration-100 hover:text-gold'>
                                            <FaArrowAltCircleRight className='mr-1'/>
                                            Report an Issue
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="contact-us" className='flex items-center transition-all duration-100 hover:text-gold'>
                                            <FaArrowAltCircleRight className='mr-1'/>
                                            Our Customer Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-span-1 py-2 px-4'>
                            <div className=''>
                                <h3 className='font-bold uppercase'>Contacts</h3>
                                <hr className='border-gray-100 my-3'/>

                                <ul className='py-2 px-4'>
                                    <li className="mb-1">
                                        <Link href="" className='flex items-center'>
                                            <BsMapFill className='mr-1'/>
                                            United States
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <a href="tel:+15624523270" className='flex items-center'>
                                            <IoIosHeadset className='mr-1'/>
                                            + 1 562 452 3270
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a href="mailto:info@expresscourier.com" className='flex items-center'>
                                            <FaEnvelope className='mr-1'/>
                                            support@dtcexpress.com
                                        </a>
                                    </li>
                                    <li className="mt-2 pt-2">
                                        <Link href="contact us" className='flex items-center'>
                                            <FaFacebookSquare className='mx-1'/>
                                            <FaInstagramSquare className='mx-1'/>
                                            <FaTwitterSquare className='mx-1'/>
                                            <FaYoutubeSquare className='mx-1'/>
                                           
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-50 mt-6"/>
                <div className='text-center text-gray-50 p-4 font-bold'>
                    Copyright &copy; CD & T Express logistics company {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    )
};

export default Footer