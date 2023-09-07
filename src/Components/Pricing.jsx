import React from 'react'

const Freelancer = [
    '5 products',
    'Up to 1,000 subscribers',
    'Basic analytics',
    '48-hour support response time',
]

const Startup = [
    '25 products',
    'Up to 10,000 subscribers',
    'Advanced analytics',
    '24-hour support response time',
    'Marketing automations',
]

const Enterprise = [
    'Unlimited products',
    'Unlimited subscribers',
    'Advanced analytics',
    '1-hour, dedicated support response time',
    'Marketing automations',
]

const Pricing = () => {
  return (
    <div id='pricing' className='py-10 sm:py-20 bg-slate-950'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto sm:text-center'>
                <p className='text-md leading-8 text-blue-500'>Pricing</p>
                <h1 className='text-3xl tracking-tight text-white sm:text-4xl mt-2'>Pricing plans for teams of all sizes</h1>
                <p className='max-w-2xl mx-auto mt-6 text-md leading-8 text-gray-200'>Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
            </div>
            <div className='max-w-md lg:max-w-7xl mx-auto mt-20 h-auto grid lg:grid-cols-3 grid-cols-1 space-y-4 lg:space-y-0'>
                <div className='max-w-md border-t border-b border-l border-r lg:border-r-0 border-slate-800 lg:rounded-l-3xl lg:rounded-r-none rounded-3xl lg:rounded-tr-3xl p-10 flex flex-col min-h-[500px] lg:h-[550px]'>
                    <h2 className='text-lg font-semibold text-white'>Freelancer</h2>
                    <p className='text-sm text-gray-200 mt-4'>The essentials to provide your best work for clients.</p>
                    <p className='mt-6'>
                        <span className="text-4xl font-semibold tracking-tight text-gray-200">$24</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 ml-1">/month</span>
                    </p>
                    <ul
                        role="list"
                        className='mt-6 text-sm leading-6 text-gray-200'
                    >
                        {Freelancer.map((feature) => (
                            <li key={feature} className="flex gap-x-3 mt-3">
                                <svg class="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                                </svg>
                                {feature}
                            </li>
                        ))}
                        <p className='mt-3 opacity-0'>Marketing automations</p>
                    </ul>
                    <button class="w-full border border-slate-800 text-blue-500 text-sm font-semibold py-3 flex items-center justify-center rounded-md mt-6 lg:mt-auto">Buy plan</button>
                </div>
                <div className='max-w-md border rounded-3xl lg:rounded-b-none lg:rounded-t-3xl border-slate-800 p-10 flex flex-col min-h-[500px] lg:h-[550px]'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold text-white'>Startup</h2>
                        <button className='text-xs font-semibold text-slate-200 bg-slate-600 px-2 py-1 rounded-md cursor-default'>Most popular</button>
                    </div>
                    <p className='text-sm text-gray-200 mt-4'>A plan that scales with your rapidly growing business.</p>
                    <p className='mt-6'>
                        <span className="text-4xl font-semibold tracking-tight text-gray-200">$32</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-200 ml-1">/month</span>
                    </p>
                    <ul
                        role="list"
                        className='mt-6 text-sm leading-6 text-gray-200'
                    >
                        {Startup.map((feature) => (
                            <li key={feature} className="flex gap-x-3 mt-3">
                                <svg class="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button class="w-full border border-blue-800 hover:border-blue-700 text-white bg-blue-800 hover:bg-blue-700 text-sm font-semibold py-3 flex items-center justify-center rounded-md mt-14 lg:mt-auto">Buy plan</button>
                </div>
                <div className='max-w-md border-r border-t border-b border-l lg:border-l-0 border-slate-800 rounded-3xl lg:rounded-bl-none lg:rounded-r-3xl lg:rounded-tl-3xl p-10 flex flex-col min-h-[500px] lg:h-[550px]'>
                    <h2 className='text-lg font-semibold text-white'>Enterprise</h2>
                    <p className='text-sm text-gray-200 mt-4'>Dedicated support and infrastructure for your company.</p>
                    <p className='mt-6'>
                        <span className="text-4xl font-semibold tracking-tight text-gray-200">$48</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-200 ml-1">/month</span>
                    </p>
                    <ul
                        role="list"
                        className='mt-6 text-sm leading-6 text-gray-200'
                    >
                        {Enterprise.map((feature) => (
                            <li key={feature} className="flex gap-x-3 mt-3">
                                <svg class="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button class="border border-slate-800 text-blue-500 text-sm font-semibold py-3 flex items-center justify-center rounded-md mt-14 lg:mt-auto">Buy plan</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing