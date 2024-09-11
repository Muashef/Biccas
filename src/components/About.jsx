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
    <div className='w-full h-full px-8 lg:px-20 py-14 lg:py-20 bg-[#161C28]'>
        <div className='flex flex-col lg:flex-row justify-between gap-20'>
            <div className='w-full lg:w-[48%]'>
                <h2 className='text-[3.125rem] text-white font-semibold'>What People are Saying About Us</h2>
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
            <div className='bg-[#222938] w-full lg:w-[612px] py-8 rounded-3xl flex flex-col'>
                <div className='mx-auto'>
                    <img src={Cynd} className='mx-auto' alt="cylinder" />
                    <h2 className='text-[30px] font-medium text-white whitespace-nowrap mt-3'>Get Started</h2>
                </div>
                <form className='w-full px-8 lg:px-20 mt-6'>
                    <div className='w-full'>
                        <label className='text-white text-lg font-medium block' htmlFor="email">Email</label>
                        <input 
                          type="mail" 
                          id="mail"
                          name="mail"
                          required
                          placeholder="Enter your email"
                          className="block flex-1 border-1 bg-white py-2.5 pl-3 rounded-lg mt-3 w-full text-black placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className='mt-5'>
                        <label className='text-white text-lg font-medium block' htmlFor="message">Message</label>
                        <textarea 
                         name="message" 
                         id="message"
                         required
                         placeholder="what do you have to say?"
                         rows={2.5}
                         className="block w-full rounded-md border-0 py-3 pl-3 mt-2 text-gray-900 shadow-sm resize-none placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                        />
                    </div>
                    <button className='w-full bg-[#54BD95] py-3.5 px-8 rounded-lg shadow-lg text-white text-base font-semibold mt-4'>Request Demo</button>
                    <span className='flex flex-row items-center justify-center lg:items-end lg:justify-end mt-2 text-sm text-white font-medium'>
                    or
                    <a href="#" className='pl-1'>Start Free Trial</a>
                    </span>
                </form>
            </div>
        </div>
    </div>
  )
}

export default About