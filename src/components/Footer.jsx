import React, {useState} from 'react'
import FooterLogo from '../assets/svg/logo_footer.svg';

const Footer = () => {
   
  return (
    <div className='w-full h-full py-10 px-20 bg-[#161C28]'>
        <div className='flex flex-col md:flex-row items-center justify-between '>
            <div>
              <img src={FooterLogo} alt="" />
              <p className='text-[#A6A6A6] text-lg font-medium mt-8'>Get started noew try our product</p>
              <div className='mt-4'>
                <input
                  type='text'
                  class='bg-transparent border border-[#A6A6A6] text-white text-sm rounded-full block w-full pl-4 p-2.5 outline-none'
                  placeholder='Enter your email here'
                  required
                />
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-28'> 
              <div className='text-white text-lg font-medium'>Support</div>
              <div className='text-white text-lg font-medium'>Help and Solution</div>
              <div className='text-white text-lg font-medium'>Product</div>
            </div>
        </div>
    </div>
    
    
  )
}

export default Footer