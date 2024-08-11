import React from 'react'
import Checks from '../assets/svg/check.svg';

const Plan = () => {
  return (
    <div className='w-full h-full px-6 lg:px-14 py-6 bg-[#FFD6D6]'>
        <h1 className='text-[#191A15] font-bold text-[50px] text-center '>Choose Plan <br /> That's Right for you</h1>
        <p className='text-[#A6A6A6] text-lg font-bold mt-8 text-center'>Choose plan that works best for you, feel free to contact us</p>
        <div className='flex flex-row items-center justify-center mt-6 gap-6 bg-white p-2 border border-white rounded-lg w-[22%] mx-auto'>
            <button className=''>Bill Monthly</button>
            <button className='bg-[#54BD95] py-2 px-4 rounded-lg text-white text-lg'>Bill Yearly</button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 place-content-center text-center mt-10'>
            <div className='bg-white shadow-md rounded-2xl p-4 lg:p-7 w-full lg:w-[374px] h-[644px]'>
                <h3 className='text-[30px] text-[#191A15] font-semibold'>Free</h3>
                <p className='text-[#A6A6A6] text-lg font-medium'>Have a go  and test your  superpowers</p>
                <p className='text-[#A6A6A6] text-lg font-medium'>$</p>
                <p className='text-[#191A15] text-[50px] font-semibold'>0</p>
                <div className='w-full flex flex-col space-y-5 mt-6 bg-[#F9FAFB] p-5 rounded-lg'>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>2 Users</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>2 Files</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>Public Shares & Comments</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>Chat Support</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>New Income Apps</p>
                  </div>

                  <button className='bg-white py-4 px-8 rounded-2xl shadow-lg text-[#54BD95] text-lg font-semibold mt-10'>Signup for free</button>
                </div>
            </div>
            <div className='bg-[#54BD95] shadow-md rounded-2xl p-4 lg:p-7 w-full lg:w-[374px] h-[684px]'>
                <h3 className='text-[30px] text-white font-semibold'>Pro</h3>
                <p className='text-white text-lg font-medium'>Experiment the power of infinite possibilities</p>
                <p className='text-white text-lg font-medium'>$</p>
                <p className='text-white text-[50px] font-semibold'>8</p>
                <button className='bg-[#85DAB9] py-2 px-2 rounded-lg text-white text-[14px]'>Save $50 a year</button>
                <div className='w-full flex flex-col space-y-5 mt-6 bg-[#F9FAFB] p-5 rounded-lg'>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>4 Users</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>All apps</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>Unlimited editable exports</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>Folders Collaboration</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>All incoming apps</p>
                  </div>

                  <button className='bg-[#54BD95] py-4 px-8 rounded-2xl shadow-lg text-white text-lg font-semibold mt-10'>Go to pro</button>
                </div>
            </div>
            <div className='bg-white shadow-md rounded-2xl p-4 lg:p-7 w-full lg:w-[374px] h-[644px]'>
                <h3 className='text-[30px] text-[#191A15] font-semibold'>Business</h3>
                <p className='text-[#A6A6A6] text-lg font-medium'>Unveil new superpowers and join the Design Leaque</p>
                <p className='text-[#A6A6A6] text-lg font-medium'>$</p>
                <p className='text-[#191A15] text-[50px] font-semibold'>16</p>
                <div className='w-full flex flex-col space-y-5 mt-6 bg-[#F9FAFB] p-5 rounded-lg'>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>All the features of pro plan</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>Account success Manager</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>Single Sign-On (SSO)</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>Co-conception program</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img src={Checks} className='w-[26px]' alt="Checks" />
                    <p className='text-[#191A15] text-lg font-medium'>Collaboration-Soon</p>
                  </div>

                  <button className='bg-white py-4 px-8 rounded-2xl shadow-lg text-[#54BD95] text-lg font-semibold mt-10'>Goto Business</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plan