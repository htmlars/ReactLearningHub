import React from 'react'
import Typed from 'react-typed'

const features = [
    {
      name: 'Made for Beginners.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.' 
    ,
    },
    {
      name: 'Learn it fast.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    },
    {
      name: 'React made fun.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    },
  ]

const Features = () => {
const Parentheses = '()';
const CurlyBrackets = '{';
const CurlyBracketsTwo = '}';
const ParaOne = '(';
const ParaTwo = ')';
const Chevron = '<';
const ChevronTwo = '>';
  return (
    <div id='features' className="overflow-hidden bg-white pb-10 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base leading-7 text-blue-500">Learn faster</h2>
              <p className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl">React made <span className='underline'>simple</span></p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-0 top-1 h-5 w-5 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className='relative bg-neutral-800 max-h-max font-mono py-10 px-4 md:p-10 rounded-xl shadow-xl'>
                <div className=''>
                  <span className='absolute top-3 left-3 bg-red-500 hover:bg-red-600 w-2 h-2 rounded-full'></span>
                  <span className='absolute top-3 left-6 bg-yellow-500 hover:bg-yellow-600 w-2 h-2 rounded-full'></span>
                  <span className='absolute top-3 left-9 bg-green-500 hover:bg-green-600 w-2 h-2 rounded-full'></span>
                </div>
                <p>
                    <span className='text-purple-500'>Import</span> <span className='text-rose-500'>React</span> <span className='text-purple-500'>from</span> <span className='text-white'>'<span className='text-green-500'>React</span><span className='text-white'>'</span></span>
                </p>
                <p className='mt-10'>
                    <span className='text-purple-500'>export</span> <span className='text-rose-500'>default</span> <span className='text-purple-500'>function</span> <span className='text-blue-500'>App</span> <span className='text-white'>{Parentheses}</span> <span className='text-yellow-500'>{CurlyBrackets}</span>
                </p>
                <p className='pl-4'>
                    <span className='text-purple-500'>return {ParaOne}</span>
                </p>
                <p className='pl-8'>
                    <span className='text-gray-500'>{Chevron}<span className='text-blue-500'>div</span></span> <span className='text-sky-500'>className<span className='text-white'>=</span><span className='text-gray-500'>'</span><span className='text-green-500'>bg-white</span></span> <span className='text-green-500'>max-w-7xl</span> <span className='text-green-500'>mx-auto</span> <span className='text-green-500'>px-6<span className='text-gray-500'>'</span><span className='text-gray-500'>{ChevronTwo}</span></span>                  
                </p>
                <p className='pl-12'>
                    <span className='text-gray-500'>{Chevron}<span className='text-blue-500'>h1</span><span className='text-gray-500'>{ChevronTwo}</span><span className='text-white'><Typed strings={['Made easy', 'Made quick', 'Made intuitive', 'Made convenient']} typeSpeed={40} backSpeed={60} loop/></span><span>{Chevron}/</span><span className='text-blue-500'>h1</span><span className='text-gray-500'>{ChevronTwo}</span></span> 
                </p>
                <p className='pl-8'>
                    <span className='text-gray-500'>{Chevron}<span className='text-blue-500'>div</span><span>{ChevronTwo}</span></span>
                </p>
                <p className='pl-4'>
                    <span className='text-purple-500'>{ParaTwo}</span>
                </p>
                <p>
                    <span className='text-yellow-500'>{CurlyBracketsTwo}</span>
                </p>
            </div>
            <div className="relative bg-neutral-800 max-h-max font-mono py-10 px-4 md:p-10 rounded-xl shadow-xl">
                <div className=''>
                  <span className='absolute top-3 left-3 bg-red-500 hover:bg-red-600 w-2 h-2 rounded-full'></span>
                  <span className='absolute top-3 left-6 bg-yellow-500 hover:bg-yellow-600 w-2 h-2 rounded-full'></span>
                  <span className='absolute top-3 left-9 bg-green-500 hover:bg-green-600 w-2 h-2 rounded-full'></span>
                </div>
                <p>
                    <span className='text-purple-500'>Import</span> <span className='text-rose-500'>React</span> <span className='text-purple-500'>from</span> <span className='text-white'>'<span className='text-green-500'>React</span><span className='text-white'>'</span></span>
                </p>
                <p className='mt-10'>
                    <span className='text-purple-500'>export</span> <span className='text-rose-500'>default</span> <span className='text-purple-500'>function</span> <span className='text-blue-500'>Hero</span> <span className='text-white'>{Parentheses}</span> <span className='text-yellow-500'>{CurlyBrackets}</span>
                </p>
                <p className='pl-4'>
                    <span className='text-purple-500'>return {ParaOne}</span>
                </p>
                <p className='pl-8'>
                    <span className='text-gray-500'>{Chevron}<span className='text-blue-500'>div</span></span> <span className='text-sky-500'>className<span className='text-white'>=</span><span className='text-gray-500'>'</span><span className='text-green-500'>bg-white</span></span> <span className='text-green-500'>max-w-7xl</span> <span className='text-green-500'>mx-auto</span> <span className='text-green-500'>px-6<span className='text-gray-500'>'</span><span className='text-gray-500'>{ChevronTwo}</span></span>                  
                </p>
                <p className='pl-12'>
                    <span className='text-gray-500'>{Chevron}<span className='text-blue-500'>h1</span></span> <span className='text-sky-500'>className<span className='text-white'>=</span><span className='text-gray-500'>'</span><span className='text-red-500'>text-red-400</span><span className='text-gray-500'>'</span><span className='text-gray-500'>{ChevronTwo}</span><span className='text-white'><Typed strings={['For Beginners', 'For Intermediates']} typeSpeed={40} backSpeed={60} loop/></span><span className='text-gray-500'>{Chevron}/</span><span className='text-blue-500'>h1</span><span className='text-gray-500'>{ChevronTwo}</span></span> 
                </p>
                <p className='pl-8'>
                    <span className='text-gray-500'>{Chevron}<span className='text-blue-500'>div</span><span>{ChevronTwo}</span></span>
                </p>
                <p className='pl-4'>
                    <span className='text-purple-500'>{ParaTwo}</span>
                </p>
                <p>
                    <span className='text-yellow-500'>{CurlyBracketsTwo}</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features