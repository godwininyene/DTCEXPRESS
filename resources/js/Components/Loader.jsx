import React from 'react'
import spinner from '@/Assets/images/loader.gif';

const Loader = () => {
  return (
    <div className="flex items-center justify-center mt-2 dark:text-white">
        <span>Processing request...</span>
        <img src={spinner} className="h-4 ml-1"/>
    </div>
  )
}

export default Loader