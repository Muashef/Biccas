import React from 'react';
import Lap from '../assets/svg/laptop.svg';
import Checks from '../assets/svg/check.svg';

const Benefit = () => {
  return (
    <div className='w-full h-full px-14 py-6 bg-[#FFD6D6]'>
        <div className='flex flex-col lg:flex-row max-w-[80vw] lg:max-w-7xl mx-auto'>
            <div>
                <h1 className='text-[#191A15] font-extrabold text-[3.125rem]'>What Benifit Will You Get</h1>
                <div className='w-full flex flex-col space-y-8 mt-10'>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>Free Consulting With Experet Saving Money</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>Online Banking</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>Investment Report Every Month</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>Saving Money For The Future</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>Online Transaction</p>
                  </div>
                </div>
            </div>
            <div>
                <img src={Lap} alt="laptop" />
            </div>
        </div>
    </div>
  )
}

export default Benefit