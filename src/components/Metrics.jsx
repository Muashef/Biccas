import React from 'react'
import Cloud from '../assets/svg/cloud.svg';
import Collab from '../assets/svg/collab.svg';
import Daily from '../assets/svg/daily.svg';

const Metrics = () => {

    const tools = [
        {
            id: 1,
            image: Collab,
            quote: "Collaborate Teams",
            text: "Here you can handle projects together with team virtually"
        },
        {
            id: 3,
            image: Cloud,
            quote: "Cloud Storage",
            text: "No nedd to worry about storage because we provide storage up to 2 TB"
        },
        {
            id: 3,
            image: Daily,
            quote: "Daily Analytics",
            text: "We always provide useful informatin to make it easier for you every day"
        }
    ]
  return (
    <div className='w-full h-full px-14 py-6'>
        <div className='flex flex-col lg:flex-row gap-10'>
            {tools.map((item) => (
                <div key={item.id}>
                    <img src={item.image} className='' alt="" />
                    <h2 className='text-[#191A15] text-[1.875rem] font-bold mt-4'>{item.quote}</h2>
                    <p className='text-[#A6A6A6] font-medium text-base mt-2'>{item.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Metrics