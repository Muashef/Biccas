import React from 'react'

const Features = () => {
  return (
    <div className='w-full h-full px-20 py-12 bg-white'>
        <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-20'>
            <div className='w-[35%]'>
                <h2 className='text-[#191A15] text-[3.125rem] leading-[3.781875rem] font-semibold'>Our Features you can get</h2>
            </div>
            <div className='w-[42%]'>
              <p className='text-[#A6A6A6] text-lg font-medium'>We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>
            </div>
            <div className='w-[28%]'>
                <button className='bg-[#54BD95] text-white text-lg font-medium py-3 px-6 w-[fit-content] rounded-full border border-[#54BD95] '>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Features