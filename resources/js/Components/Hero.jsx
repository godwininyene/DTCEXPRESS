import React from 'react';
// import bannerBg from '@/Assets/images/banner_bg.jpg';
import bannerBg from '@/Assets/images/van.webp'
import { Link } from '@inertiajs/react';
import { slideData } from '@/Data/data';

const Hero = () => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    const delay = 3500;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    React.useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slideData.length);
        }, delay);

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className='slideshow overflow-hidden min-h-[100vh] relative'>
            {slideData.map((data, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${data.id === 0 ? bannerBg : data.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className='h-full bg-gradient-to-b from-[#000000ec] via-[#000000b9] to-[#000000b9] bg-opacity-95 text-primary flex items-center'>
                        <div className='max-w-6xl mx-auto relative px-4 lg:px-0 h-full py-[120px]'>
                            <div className="flex flex-col lg:flex-row">
                                <div className="w-full lg:w-2/4 mb-10 lg:mb-0">
                                    <div className="text-center lg:text-left text-white" style={{ opacity: i === index ? 1 : 0, transform: i === index ? 'scale(1)' : 'scale(0.95)' }}>
                                        {data.id === 0 ? (
                                            <div>
                                                <span className="font-black text-6xl lg:text-8xl font-sans uppercase block">Easily</span>
                                                <p className="font-script text-3xl lg:text-8xl pt-2 animate-fade-in">
                                                    <span className="text-gold mr-4">Transit</span>
                                                    <span className="text-2xl lg:text-5xl">With</span>
                                                </p>
                                                <span className="text-4xl sm:text-6xl font-semibold text-blue-400">CD & T Express</span>
                                            </div>
                                        ) : (
                                            <div className="font-bold text-5xl lg:text-8xl font-sans uppercase">
                                                {data.id === 1 ? (
                                                    <div>
                                                        <p>{data.title.split(' ')[0]}</p>
                                                        <p>{data.title.split(' ')[1]}</p>
                                                    </div>
                                                ) : (
                                                    <p>{data.title}</p>
                                                )}
                                            </div>
                                        )}
                                        <p className="capitalize text-base sm:text-xl mb-7 animate-fade-in">{data.id === 0 ? 'We offer the best logistics services ever, international Air Frieghts, Trucking Powerful Transport and Courier Services.' : data.desc}</p>
                                        <div>
                                            <Link href="track" className='inline-block  rounded-md font-semibold py-2 md:py-4 px-2 md:px-5 border-2 border-gold transition-all duration-300 ease-in hover:bg-gold animate-fade-in'>Track your parcel</Link>
                                            <Link href="services" className='hidden lg:inline-block bg-gold  rounded-md font-semibold py-2 md:py-4 px-2 md:px-5 border-2 border-transparent ml-4 transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold animate-fade-in'>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/4">
                                    <img src={data.featureImg} className='transition-opacity duration-1000 ease-in-out opacity-0 transform' style={{ opacity: i === index ? 1 : 0, transform: i === index ? 'scale(1)' : 'scale(0.95)' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Hero;
