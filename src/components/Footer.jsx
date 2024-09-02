import React, {useState} from 'react'

const Footer = () => {
   
  return (
    <div className='w-full h-full py-10 px-14 bg-[#161C28]'>
        <div className='flex flex-col md:flex-row items-center justify-between '>
            <div>
                <h2 className='text-lg font-medium text-white'>© 2022 Biccas Inc. Copyright and rights reserved</h2>
            </div>
            <div>
                <p className='text-lg font-medium text-white'>Terms and Condtions</p>
            </div>
        </div>
    </div>
    
    
  )
}

export default Footer