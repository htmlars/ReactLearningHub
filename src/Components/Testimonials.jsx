import React from 'react'
import Avatar from '../assets/avatar-1.webp'
import Avatar1 from '../assets/avatar-2.webp'
import Avatar2 from '../assets/avatar-3.webp'
import Avatar3 from '../assets/avatar-4.webp'
import Avatar4 from '../assets/avatar-5.webp'

const Testimonials = () => {
  return (
    <div id='community' className='py-28'>
        <div class="flex flex-col justify-center items-center">
            <div class="mx-auto max-w-2xl sm:text-center px-10 sm:px-4 lg:px-4">
                <h1 class="text-3xl tracking-tight text-slate-900 sm:text-4xl font-normal">Loved by businesses <span class="text-blue-500">worldwide.</span></h1>
                <p class="mt-4 text-lg tracking-tight text-slate-700 font-light">Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.</p>
            </div>
            <div class="flex flex-col lg:flex-row items-start justify-center lg:gap-x-4 xl:gap-x-8 gap-y-6 sm:gap-y-8 lg:gap-y-0 mt-20">
                <div class="flex flex-col gap-y-6 sm:gap-y-8 px-4 sm:px-20 md:px-40 lg:px-4">
                    <div class="relative rounded-2xl bg-white bg-opacity-40 p-6 shadow-xl shadow-slate-900/10 lg:max-w-sm">
                        <p class="text-lg tracking-tight font-light text-slate-900 mb-6">ReactLearnHub is so easy to use I have only been working with it for a couple days and i have improved by a ton.</p>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div class="flex flex-col">
                                <p class="font-light text-base text-slate-900">Sheryl Berge</p>
                                <p class="font-light mt-1 text-sm text-slate-500">CEO at Lynch LLC</p>
                            </div>
                            <img class="rounded-full overflow-hidden h-14 w-14" src={Avatar} alt="avatar"/>
                        </div>
                    </div>
                    <div class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 lg:max-w-sm">
                        <p class="text-lg tracking-tight font-light text-slate-900 mb-6">ReactLearnHub has been one of my best decisions in the past years. Ive grown from a total beginner to a React Pro in so little time.</p>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div class="flex flex-col">
                                <p class="font-light text-base text-slate-900">Amy Hahn</p>
                                <p class="font-light mt-1 text-sm text-slate-500">Director at Velocity Industries</p>
                            </div>
                            <img class="rounded-full overflow-hidden h-14 w-14" src={Avatar1} alt="avatar"/>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-y-6 sm:gap-y-8 px-4 sm:px-20 md:px-40 lg:px-4">
                    <div class="relative rounded-2xl bg-white bg-opacity-40 p-6 shadow-xl shadow-slate-900/10 lg:max-w-sm">
                        <p class="text-lg tracking-tight font-light text-slate-900 mb-6">The best part about ReactLearnHub is every time I check, theres a new challenge or component to learn with. It's crazy how dedicated the team behind ReactLearnHub is.</p>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div class="flex flex-col">
                                <p class="font-light text-base text-slate-900">Leland Kiehn</p>
                                <p class="font-light mt-1 text-sm text-slate-500">Founder of Kiehn and Sons</p>
                            </div>
                            <img class="rounded-full overflow-hidden h-14 w-14" src={Avatar2} alt="avatar"/>
                        </div>
                    </div>
                    <div class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 lg:max-w-sm">
                        <p class="text-lg tracking-tight font-light text-slate-900 mb-6">There are so many things I'd suffered from in other Guides or Courses that completely disappeared with this. Suspicious but I can’t say I don’t love it.</p>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div class="flex flex-col">
                                <p class="font-light text-base text-slate-900">Erin Powlowski</p>
                                <p class="font-light mt-1 text-sm text-slate-500">COO at Armstrong Inc</p>
                            </div>
                            <img class="rounded-full overflow-hidden h-14 w-14" src={Avatar3} alt="avatar"/>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-y-6 sm:gap-y-8 px-4 sm:px-20 md:px-40 lg:px-4">
                    <div class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 lg:max-w-sm">
                        <p class="text-lg tracking-tight font-light text-slate-900 mb-6">I used to think React was really hard to learn and that it would take months over months to get a hang of it. Ive been proven wrong.</p>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div class="flex flex-col">
                                <p class="font-light text-base text-slate-900">Peter Renolds</p>
                                <p class="mt-1 text-sm font-light text-slate-500">Founder of West Inc</p>
                            </div>
                            <img class="rounded-full overflow-hidden h-14 w-14" src={Avatar4} alt="avatar"/>
                        </div>
                    </div>
                    <div class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 lg:max-w-sm">
                        <p class="text-lg tracking-tight font-light text-slate-900 mb-6">Even for itermediate Reacters like me, ReactLearnHub still offers a challenge and an opportunity to learn more and more about my favourite JS Library.</p>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div class="flex flex-col">
                                <p class="text-base font-light text-slate-900">Amy Hahn</p>
                                <p class="mt-1 text-sm font-light text-slate-500">Director at Velocity Industries</p>
                            </div>
                            <img class="rounded-full overflow-hidden h-14 w-14" src={Avatar} alt="avatar"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials