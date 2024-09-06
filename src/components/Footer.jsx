import React, {useState} from 'react'
import FooterLogo from '../assets/svg/logo_footer.svg';

const Footer = () => {
   
  return (
    <div className='w-full h-full pt-14 lg:pt-20 px-8 lg:px-20 bg-[#161C28]'>
        <div className='flex flex-col md:flex-row justify-between '>
            <div className='w-full lg:w-96'>
              <img src={FooterLogo} alt="" />
              <p className='text-[#A6A6A6] text-lg font-medium mt-8'>Get started noew try our product</p>
              <div className='mt-6'>
                <input
                  type='text'
                  class='w-full bg-transparent border-2 border-[#A6A6A6] text-white text-sm rounded-full block pl-4 p-3 outline-none'
                  placeholder='Enter your email here'
                  required
                />
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-10 lg:gap-28 mt-14 lg:mt-0'> 
              <div className='flex flex-col gap-3'>
                <h1 className='text-white text-lg font-medium'>Support</h1>
                <p className='text-[#A6A6A6] text-lg font-medium'>Help Center</p>
                <p className='text-[#A6A6A6] text-lg font-medium'>Accout Information</p>
                <p className='text-[#A6A6A6] text-lg font-medium'>About</p>
                <p className='text-[#A6A6A6] text-lg font-medium'>Contact Us</p>
              </div>
              <div className='flex flex-col gap-3'>
                <h1 className='text-white text-lg font-medium'>Help and Solution</h1>
                <p className='text-[#A6A6A6] text-lg font-medium'>Talk to support</p>
                <p className='text-[#A6A6A6] text-lg font-medium'>Support docs</p>
                <p className='text-[#A6A6A6] text-lg font-medium'>System status</p>
                <p className='text-[#A6A6A6] text-lg font-medium'>Covid response</p>
              </div>
              <div className='flex flex-col gap-3'>
                <h1 className='text-white text-lg font-medium'>Product</h1>
                <p className='text-[#A6A6A6] text-lg font-medium'>Update</p>
                <p className='text-[#A6A6A6] text-lg font-medium'>Security</p>
                <p className='text-[#A6A6A6] text-lg font-medium'>Beta Test</p>
                <p className='text-[#A6A6A6] text-lg font-medium'>Pricing product</p>
              </div>
            </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between mt-20 lg:mt-24 pb-6'>
            <h3 className='text-white text-lg font-medium'>
              © 2022 Biccas Inc. Copyright and rights reserved
            </h3>
            <h2 className='text-white text-lg font-medium'>Terms and Conditions * Privacy Policy</h2>
        </div>
    </div>
    
    
  )
}

export default Footer