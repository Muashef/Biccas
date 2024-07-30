import React from 'react'
import Logo from '../assets/svg/Biccas.svg';

const links = [
    {
        id: 1,
        url: "/",
        text: "Home"
    },
    {
        id: 2,
        url: "#products",
        text: "Products"
    },
    {
        id: 3,
        url: "#faq",
        text: "FAQ"
    },
    {
        id: 4,
        url: "#blog",
        text: "Blog"
    },
    {
        id: 5,
        url: "#about",
        text: "About Us"
    }
]

const Navbar = () => {
  return (
    <div>
        <nav className='w-full py-3 p-2 bg-[#FFD6D6]'>
            <div className='flex items-center justify-between mx-auto px-4 lg:px-14 py-4'>
                <a href="/">
                    <img src={Logo} className='w-[75.60px] lg:w-full' alt="Biccas Logo" />
                </a>

                <div className='hidden lg:flex items-center gap-4 lg:gap-[2rem]'>
                    {links.map((links) => (
                        <a href={links.url} key={links.id} className='text-[#A6A6A6] text-base font-medium'>
                            {links.text}
                        </a>
                    ))}
                </div>

                <div className='flex items-center gap-6'>
                    <button className='text-base text-[#A6A6A6] font-medium'>Login</button>
                    <button className='bg-[#54BD95] text-white text-base font-medium py-2 px-2 w-[fit-content] rounded-md border border-[#54BD95]'>
                        Sign Up
                    </button>
                </div>

            </div>

        </nav>
    </div>
  )
}

export default Navbar