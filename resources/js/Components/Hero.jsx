import React from 'react';
import bannerBg from '@/Assets/images/banner_bg.jpg';
import phoneMock from '@/Assets/images/hero_img.png';
import { Link, Head } from '@inertiajs/react';
import { slideData } from '@/Data/data';

const Hero = ()=>{

    const [index, setIndex] = React.useState(0);
   const [sw, setSw] = React.useState(1);
   const numSlides = slideData.length - 1;
   const timeoutRef = React.useRef(null);
   const delay = 3500;

   const resetTimeout = ()=>{
    if(timeoutRef.current){
        clearTimeout(timeoutRef.current);
    }
   };

    React.useEffect(()=>{
       timeoutRef.current = setTimeout(()=>{
            //Slideshow is just starting and progressing towards the left
            if(index < numSlides && sw == 1){
                setIndex(prevIndex => prevIndex + 1)//set index t0 the next slide
             //if we have gone through the whole slides, let us return back by way of reversal
            }else if(index == numSlides){
                setIndex(prevIndex => prevIndex - 1)//set index to the second to the last slide rather than the last since we were just on the last
                setSw(-1)
            }else{
                setIndex(index => index - 1)
                setSw(-1);
                if(index==0){//this ensures the animation continues to infinity
                    setSw(1)
				}
            }
        },delay);

        return ()=>{
            resetTimeout();
        }
    }, [index])
   

    const styles = {
        left:"-"+(index * 100)+"%",
        transition: 'ease 2000ms',
       
      }
    
    return(
        <div className='slideshow overflow-hidden min-h-[400px]  relative'>
            <div className={`slideshowSlider relative flex h-full`} style={styles} >
                
                {slideData.map((data, index)=>(
                    <div className={`slide w-full  flex-shrink-0 relative h-full bg-cover bg-center`} key={index} style={{backgroundImage:`url(${data.id == 0 ? bannerBg : data.imageUrl})`}}>
                        <div className={`h-full bg-gradient-to-b from-[#000000ec] via-[#000000b9] to-[#000000b9] bg-opacity-95 text-primary`}>
                            <div className='max-w-6xl mx-auto relative px-4 lg:px-0 h-full py-10 lg:py-20'>

                                <div className="flex  flex-col lg:flex-row">

                                    <div className="w-full lg:w-2/4  mb-10 lg:mb-0">
                                        <div className="text-center lg:text-left text-white">
                                            {
                                                (data.id == 0)? (
                                                    <div className=''>                                            
                                                        <span className="font-black text-6xl lg:text-8xl font-sans uppercase">
                                                            Easily
                                                        </span>

                                                        <p  className="font-script text-3xl lg:text-8xl  inline-block pt-2">
                                                            <span className="text-gold mr-4 inline-block">
                                                                Transit
                                                            </span>
                                                            <span className="text-2xl lg:text-5xl">With</span>
                                                        </p>

                                                        <span className="text-4xl sm:text-6xl inline-block mb-5 font-semibold text-blue-400">
                                                            CD & T Express
                                                        </span>
                                                    </div>
                                                ):(
                                                   
                                                    <div className="font-bold text-5xl lg:text-8xl font-sans uppercase">
                                                        
                                                        {(data.id ==1)? (
                                                            <div>
                                                                <p>{data.title.split(' ')[0]}</p>
                                                                <p>{data.title.split(' ')[1]}</p>
                                                            </div>
                                                        ):(
                                                            <p>{data.title}</p>
                                                        )}
                                                    </div>
                                                )
                                            }
                                            
                                            {
                                                (data.id ==0) ? (
                                                    <p  className="capitalize text-base sm:text-xl mb-7">
                                                        We offer the best logistics services ever, international Air Frieghts, 
                                                        Trucking Powerful Transport and Courier Services.
                                                    </p>
                                                ):(
                                                    <p  className="capitalize text-base sm:text-xl mb-7">{data.desc}</p>
                                                )
                                            }
                                           
                                            <div className="">
                                                <Link href="track" className='inline-block b leading-[46px]  rounded-md font-semibold px-8 border-2 border-gold  ps-3 pe-3 transition-all duration-300 ease-in hover:bg-gold'>Track your parcel</Link>
                                                <Link href="services" className='inline-block bg-gold leading-[46px]  rounded-md font-semibold px-8 border-2 border-transparent ml-4 ps-3 pe-3 transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold'>Learn More</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-2/4">
                                        <div className=''>
                                            <img src={data.featureImg} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
         
        </div>
    )
}

export default Hero