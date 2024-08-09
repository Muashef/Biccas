import React from 'react'

const Plan = () => {
  return (
    <div className='w-full h-full px-14 py-6 bg-[#FFD6D6]'>
        <h1 className='text-[#191A15] font-bold text-[50px] text-center '>Choose Plan <br /> That's Right for you</h1>
        <p className='text-[#A6A6A6] text-lg font-bold mt-8 text-center'>Choose plan that works best for you, feel free to contact us</p>
        <div className='flex flex-row items-center justify-center mt-6 gap-6 bg-white p-2 border border-white rounded-lg w-[22%] mx-auto'>
            <button>Bill Monthly</button>
            <button className='bg-[#54BD95] py-2 px-4 rounded-lg text-white text-lg'>Bill Yearly</button>
        </div>
    </div>
  )
}

export default Plan