import React from 'react'
import ManImg from '../assets/svg/hero_img.svg';
import Play from '../assets/svg/Play.svg';
import line from '../assets/svg/line.svg';

const Hero = () => {
  return (
    <div className='w-full h-full px-4 lg:px-20 py-8 lg:py-20 bg-[#FFD6D6]'>
        <div className='flex flex-col lg:flex-row gap-6 max-w-[80vw] lg:max-w-7xl w-full mx-auto relative'>
            <div className='w-full lg:w-[50%] flex flex-col'>
                <h1 className='text-2xl lg:text-[5rem] text-[#191A15] font-extrabold lg:leading-[5.625rem]'>We’re here to Increase your Productivity</h1>
                <div className='absolute top-72 hidden lg:block'>
                    <img src={line} alt="line" />
                </div>
                <p className='text-black text-lg w-full lg:w-[75%] font-medium mt-8 lg:mt-20'>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>
                <div className='w-full block lg:hidden mt-6'>
                    <img src={ManImg} className='w-full' alt="" />
                </div>
                <div className='flex flex-row gap-4 lg:gap-8 mt-8 mx-auto lg:mx-0'>
                    <button className='bg-[#54BD95] text-white text-lg font-medium py-3 px-4 w-[fit-content] rounded-full border border-[#54BD95]'>
                        Try free trial
                    </button>
                    <button className='flex items-center gap-3'>
                        <img src={Play} alt="play" />
                        <span className='text-[#191A15] text-lg font-medium'>View Demo</span>
                    </button>
                </div>
            </div>
            <div className='w-[50%] hidden lg:block'>
                <img src={ManImg} className='w-full' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero