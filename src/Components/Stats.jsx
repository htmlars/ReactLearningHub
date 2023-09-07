import React from 'react'
import { useSpring, animated } from 'react-spring';

function Number({n}) {
  const {number} = useSpring({
    from: {number:0},
    number: n,
    delay: 200,
    config: {mass: 1, tension: 20, friction: 10},
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

const Features = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto pb-20 px-6 lg:px-8'>
        <ul className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-end justify-between'>
            <li className='p-8 text-slate-900 bg-gray-100 rounded-lg flex flex-col border w-full md:max-w-sm md:min-h-[260px]'>
              <h1 className='text-5xl flex items-center'>
                <Number n={250} />k+
              </h1>
              <h2 className='mt-2 md:mt-8 font-semibold text-xl leading-9'>Users on the platform</h2>
              <p className='mt-auto text-md leading-7 text-gray-600'>Vel labore deleniti veniam consequuntur sunt nobis veniam consequuntur sunt nobis.</p>
            </li>
            <li className='p-8 text-white bg-slate-900 rounded-lg border border-slate-900 flex flex-col w-full md:max-w-sm min-h-max md:min-h-[300px]'>
              <h1 className='text-5xl flex items-center'>
                <Number n={30} />+
              </h1>
              <h2 className='mt-2 md:mt-20 font-semibold text-xl leading-9'>Interactive Challanges</h2>
              <p className='text-md leading-7 text-gray-200'>Vel labore deleniti veniam consequuntur sunt nobis veniam consequuntur sunt nobis.</p>
            </li>
            <li className='p-8 text-white bg-blue-500 rounded-lg border border-blue-500 flex flex-col w-full md:max-w-sm min-h-max md:min-h-[260px]'>
              <h1 className='text-5xl flex items-center'>
                <Number n={40} />h+
              </h1>
                <h2 className='mt-2 md:mt-8 font-semibold text-xl leading-9'>Video Content</h2>
                <p className='mt-auto text-md leading-7 text-gray-200'>Vel labore deleniti veniam consequuntur sunt nobis veniam consequuntur sunt nobis.</p>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Features