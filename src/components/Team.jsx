import React from 'react'
import Desc from '../assets/svg/desc.svg';
import Gramm from '../assets/svg/gramm.svg';
import Inter from '../assets/svg/inter.svg';
import Notion from '../assets/svg/notion.svg';
import Splash from '../assets/svg/splash.svg';

const Team = () => {

    const teams =[Splash, Notion, Inter, Desc, Gramm]

  return (
    <div className='w-full h-full px-8 lg:px-20 py-8 lg:py-6 lg:pb-24 bg-[#FFD6D6]'>
        <h1 className='text-[2.5rem] text-[#191A15] font-bold text-center'>More than 25,000 teams use Collabs</h1>
        <div className='w-full flex flex-wrap items-center gap-14 mt-8 mx-auto'>
            {teams.map((items) => (
                <img src={items} alt="" />
            ))}
        </div>
    </div>
  )
}

export default Team