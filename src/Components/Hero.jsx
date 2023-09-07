import React from 'react'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Community', href: '#community' },
    { name: 'Pricing', href: '#pricing' },
  ]
  

const Hero = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const handleNav = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }
    
    return (
        <div id='home' className='bg-white bg-[url("../src/assets/grid-dark.svg")]'>
            <div className='py-6 bg-white max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between'>
                <div className='flex lg:flex-1'>
                    <button>
                    <svg viewBox="0 0 28 28" aria-hidden="true" class="fill-blue-500" height="28" width="28"><path d="M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z"></path></svg>
                    </button>
                </div>
                <div className='hidden lg:flex md:gap-x-12 pr-6'>
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className='text-sm leading-6 text-gray-600 hover:text-black ease-in-out'>
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className='flex items-center space-x-6'>
                    <button className='lg:border-l lg:pl-6'>
                        <a target="_blank" href="https://github.com/">
                            <svg viewBox="0 0 16 16" class="w-5 h-5 fill-gray-600 hover:fill-blue-500 ease-in-out" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                        </a>
                    </button>
                    <button className='hidden lg:block text-sm bg-blue-500 px-2 py-1 rounded-md text-white'>
                        Sign In
                    </button>
                    <div className="block lg:hidden z-50 cursor-pointer" onClick={handleNav}>
                        {!mobileMenuOpen ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                    </div>
                </div>
                <div className={!mobileMenuOpen ? 'lg:hidden absolute border inset-x-10 top-20 mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 opacity-100 scale-100 ease-in-out duration-500' : 'hidden'}>
                    <div className='p-4'>
                        <div className='flex flex-col gap-y-6'>
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className='text-lg leading-6 text-gray-600 hover:text-black ease-in-out'>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="mt-10">
                            <button className='w-full text-lg bg-blue-500 py-2 rounded-md text-white'>
                                Sign In
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center'>
                <div className='max-w-3xl mx-auto text-center pt-28 pb-28 sm:pt-40'>
                    <h1 className='text-slate-800 text-4xl sm:text-5xl md:text-6xl md:leading-tight'>Master React.js with <span className='text-blue-500'>ReactLearnHub</span></h1>
                    <p className='mt-6 text-lg text-gray-600 leading-7 max-sm'>ReactLearnHub is an interactive platform designed to help beginners and intermediate developers learn React in a fun and engaging way.</p>
                    <div className='mt-10'>
                    <label htmlFor="email-address" className="sr-only">
                    Email address
                    </label>
                    <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto mr-2 rounded-md bg-white/5 px-3.5 py-2 text-gray-600 border border-gray-300 ring-1 ring-inset ring-white/10 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                    />
                    <button
                    type="submit"
                    className="flex-none border border-blue-500 mt-4 xs:mt-0 rounded-md sm:mt-0 bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                    Get Started
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero