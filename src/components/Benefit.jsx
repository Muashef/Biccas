import React from 'react';
import Lap from '../assets/svg/laptop.svg';

const Benefit = () => {
  return (
    <div className='w-full h-full px-14 py-6 bg-[#FFD6D6]'>
        <div className='flex flex-col lg:flex-row max-w-[80vw] lg:max-w-7xl mx-auto'>
            <div>
                <h1 className='text-[#191A15] font-extrabold text-[50px]'>What Benifit Will You Get</h1>
            </div>
            <div>
                <img src={Lap} alt="laptop" />
            </div>
        </div>
    </div>
  )
}

export default Benefit