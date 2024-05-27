import { Link, Head } from '@inertiajs/react';
import bgImg from '@/Assets/images/ship4new.jpg'

const CTA = () => {
  return (
    <div className='' style={{backgroundImage:`url(${bgImg})`}}>
        <div className='max-w-6xl text-white mx-auto p-10'>
            <h1 className=' text-3xl md:text-4xl text-bold font-sans'>Reach your destination 100% safe</h1>
            <p className='text-lg font-sans'>
                CD & T Express logistics company Services has made a name for it self globally,
                we take care of your parcels, items or goods and deliver them on time.
            </p>
            <div className='mt-7'>
                <Link href="track" className='hidden lg:inline-block bg-gold leading-[46px]  rounded-md font-semibold px-8 border-2 border-transparent  ps-3 pe-3 transition-all duration-300 ease-in hover:border-gold hover:bg-transparent hover:text-gold'>Track your parcel</Link>
            </div>
        </div>
    </div>
  )
}

export default CTA