import React from 'react'
import Pub from '../assets/svg/pub.svg';
import Pie from '../assets/svg/pie.svg';
import Eng from '../assets/svg/eng.svg';
import Star from '../assets/svg/five_stars.svg';
import Stars from '../assets/svg/four_stars.svg';

const Support = () => {
  return (
    <div className='w-full h-full px-14 py-16 bg-[#F9F8FE]'>
        <div className='flex flex-col lg:flex-row max-w-[80vw] gap-4 lg:max-w-7xl mx-auto'>
            <div className='w-[50%] flex flex-col'>
                <h1 className='text-[#191A15] text-[3.125rem] font-semibold leading-[3.781875rem]'>How we support our partner all over the world</h1>
                <p className='text-[#A6A6A6] text-base font-medium mt-8'>SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>

                <div className='flex flex-row gap-24 mt-14'>
                    <div>
                        <img src={Star} alt="Stars" />
                        <p className='text-[#191A15] font-bold text-lg mt-4'>4.9/5 rating</p>
                        <p className='text-[#A6A6A6] text-lg font-extrabold mt-3'>databricks</p>
                    </div>
                    <div>
                        <img src={Stars} alt="Stars" />
                        <p className='text-[#191A15] font-bold text-lg mt-4'>4.8/5 rating</p>
                        <p className='text-[#A6A6A6] text-lg font-extrabold mt-3'>chainanalysis</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-[40%]'>
                <div className='flex items-start mt-4'>
                    <img src={Pub} alt="Publish" />
                    <div>
                        <h2 className='text-[#191A15] font-bold text-[1.75rem]'>Publishing</h2>
                        <p className='text-[#A6A6A6] text-lg font-medium mt-2'>Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your brand</p>
                    </div>
                </div>
                <div className='flex items-start mt-4'>
                    <img src={Pie} alt="Analytics" />
                    <div>
                        <h2 className='text-[#191A15] font-bold text-[1.75rem]'>Analytics</h2>
                        <p className='text-[#A6A6A6] text-lg font-medium mt-2'>Analyze your performance and create goegeous report</p>
                    </div>
                </div>
                <div className='flex items-start mt-4'>
                    <img src={Eng} alt="Publish" />
                    <div>
                        <h2 className='text-[#191A15] font-bold text-[1.75rem]'>Engagments</h2>
                        <p className='text-[#A6A6A6] text-lg font-medium mt-2'>Quickly navigate and engage with your audience</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Support