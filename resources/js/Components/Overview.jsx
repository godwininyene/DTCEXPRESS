import React from 'react'

const Overview = () => {
  return (
    <div className='py-12 h-30 bg-primary'>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-4 gap-1 max-w-6xl mx-auto'>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">
                {/* <div className="imgBox lg:text-right text-center">
                    <img src="" alt="" className="text-right inline-block lg:mt-4"/>
                </div> */}
                <div className='text-center mb-5 lg:mb-0'>
                    <h1 className='text-white text-5xl font-semibold'>1274</h1>
                    <p className='text-white text-md text-center'>PROJECT DONE</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  mt-2">
                {/* <div className="imgBox lg:text-right text-center">
                    <img src="" alt="" className="text-right inline-block lg:mt-4"/>
                </div> */}
                <div className='text-center mb-5 lg:mb-0'>
                    <h1 className='text-white text-5xl font-semibold'>3274</h1>
                    <p className='text-white text-md text-center'>OFFICIAL BRANCHES</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  mt-2">
                {/* <div className="imgBox lg:text-right text-center">
                    <img src="" alt="" className="text-right inline-block lg:mt-4"/>
                </div> */}
                 <div className='text-center mb-5 lg:mb-0'>
                    <h1 className='text-white text-5xl font-semibold'>2750</h1>
                    <p className='text-white text-md text-center'>COUNTRIES COVER</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
                {/* <div className="imgBox lg:text-right text-center">
                    <img src="" alt="" className="text-right inline-block lg:mt-4"/>
                </div> */}
                 <div className='text-center mb-5 lg:mb-0'>
                    <h1 className='text-white text-5xl font-semibold'>504</h1>
                    <p className='text-white text-md text-center'>SATISFIED CLIENTS</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Overview