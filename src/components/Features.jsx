import React from 'react'

const Features = () => {
  return (
    <div className='w-full h-full px-14 py-12 bg-white'>
        <div className='flex flex-col lg:flex-row max-w-[80vw] lg:max-w-7xl mx-auto'>
            <div>
                <h2 className='text-[#191A15] text-[3.125rem] leading-[3.781875rem] font-medium'>Our Features you cab get</h2>
            </div>
            <p className='text-[#A6A6A6] text-lg font-medium'>We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>
            <button className='bg-[#54BD95] text-white text-lg font-medium py-3 px-3 w-[fit-content] rounded-full border border-[#54BD95]'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Features