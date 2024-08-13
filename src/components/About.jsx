import React from 'react'
import Quote from '../assets/svg/quote.svg';

const About = () => {
  return (
    <div className='w-full h-full px-20 py-10 bg-[#161C28]'>
        <div className='flex flex-col lg:flex-row gap-4'>
            <div className='w-[48%]'>
                <h2 className='text-[3.125rem] text-white font-semibold'>People are Saying About DoWhith</h2>
                <p className='text-[#A6A6A6] font-medium text-lg mt-3'>Everything you need to accept to payment and grow your money of manage anywhere on planet</p>
                <span >
                    <img className='mt-12' src={Quote} alt="" />
                </span>
                <p className='text-[#A6A6A6] font-medium text-lg mt-8'>I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</p>
                <p className='text-[#A6A6A6] font-medium text-lg mt-8'>_ Aria Zinanrio</p>
            </div>
            <div>Get Started</div>
        </div>
    </div>
  )
}

export default About