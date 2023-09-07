import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-slate-900'>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
              <button>
              <svg viewBox="0 0 28 28" aria-hidden="true" class="fill-blue-500" height="28" width="28"><path d="M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z"></path></svg>
              </button>
              <p className='text-sm ml-2 text-gray-200 pl-4 border-l border-gray-500'>Copyright ©2023 ReactLearnHub</p>
          </div>
          <div className="flex flex-col md:flex-row mt-6 md:mt-0 space-y-6 md:space-y-0 items-center justify-center space-x-4">
            <div className="space-x-8 md:space-x-6">
              <a className='text-gray-200 hover:text-gray-300 md:border-r border-r-none border-gray-500 md:pr-6' href="#home">Home</a>
              <a className='text-gray-200 hover:text-gray-300 md:border-r border-r-none border-gray-500 md:pr-6' href="#">Jobs</a>
              <a className='text-gray-200 hover:text-gray-300 md:border-r border-r-none border-gray-500 md:pr-6' href="#">Terms</a>
              <a className='text-gray-200 hover:text-gray-300 md:border-r border-r-none border-gray-500 md:pr-6' href="#">Privacy</a>
            </div>
            <button class="inline-flex cursor-pointer text-white bg-blue-500 hover:bg-blue-400 py-2 px-4 rounded-md transition-all"><a href="#" class="text-md">Get Started</a></button>
          </div>
      </div>
    </div>
  )
}

export default Footer