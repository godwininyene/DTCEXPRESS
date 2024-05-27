import React, {useEffect, Children } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';


const BaseLayout = ({children}) => {
    useEffect(()=>{
        AOS.init();
      })
  return (
    <div className='relative'>
        <Header />
       
      { children }
        <Footer />
    </div>
  )
}

export default BaseLayout