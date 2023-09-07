import React from 'react'
import Arrow from '../assets/arrow-right.svg'

const CTA = () => {
  return (
    <div className='mx-auto relative overflow-hidden bg-[url("../src/assets/bg-get-started.jpg")] bg-no-repeat bg-cover bg-center'>
      <div className='flex flex-col max-w-xl mx-auto justify-center items-center gap-y-4 py-24 px-10'>
        <h1 class="text-white z-50 text-3xl sm:text-4xl font-medium text-center tracking-tight">Get started today</h1>
        <p class="mt-4 text-lg z-50 tracking-tight text-white text-center">It's time to take control of React and understand its entirety in full depth with loads of fun.</p>
        <div class="flex items-center justify-center space-x-4 mt-6">
          <button class="inline-flex cursor-pointer bg-white z-20 hover:bg-gray-100 py-2 px-4 rounded-md transition-all"><a href="#" class="text-md">Get Started</a></button>
          <button class="inline-flex justify-center items-center z-20 py-2 px-4 rounded-md bg-slate-700 bg-opacity-40 hover:bg-opacity-50 transition-all"><a href="#" class="text-white text-md">Learn More <img className='w-1.5 h-auto inline ml-2' src={Arrow} alt="Arrow"/></a></button>
        </div>
      </div>
    </div>
  )
}

export default CTA