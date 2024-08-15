import React from 'react'
import Quote from '../assets/svg/quote.svg';
import FaceOne from '../assets/svg/face1.svg';
import FaceTwo from '../assets/svg/face_two.svg';
import FaceThree from '../assets/svg/face3.svg';
import FaceFour from '../assets/svg/face4.svg';
import PlayBtn from '../assets/svg/play_btn.svg';
import Cynd from '../assets/svg/cynd.svg';

const About = () => {
    const abouts = [
        {
            id: 1,
            image: FaceOne
        },
        {
            id: 2,
            image: FaceTwo
        },
        {
            id: 3,
            image: FaceThree
        },
        {
            id: 4,
            image: FaceFour
        },
        {
            id: 5,
            image: PlayBtn
        }
    ]

  return (
    <div className='w-full h-full px-20 py-20 bg-[#161C28]'>
        <div className='flex flex-col lg:flex-row justify-between gap-4'>
            <div className='w-[48%]'>
                <h2 className='text-[3.125rem] text-white font-semibold'>People are Saying About DoWhith</h2>
                <p className='text-[#A6A6A6] font-medium text-lg mt-3'>Everything you need to accept to payment and grow your money of manage anywhere on planet</p>
                <span >
                    <img className='mt-12' src={Quote} alt="" />
                </span>
                <p className='text-[#A6A6A6] font-medium text-lg mt-8'>I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</p>
                <p className='text-[#A6A6A6] font-medium text-lg mt-8'>_ Aria Zinanrio</p>

                <div className='flex flex-row flex-wrap gap-6 mt-7'>
                    {abouts.map((item) => (
                        <img src={item.image} key={item.id} />
                    ))}
                </div>
            </div>
            <div className='bg-[#222938] px-64 rounded-3xl flex flex-col items-center mx-auto'>
                <div className=''>
                    <img src={Cynd} alt="cylinder" />
                    <h2 className='text-[30px] font-medium text-white whitespace-nowrap mt-3'>Get Started</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About