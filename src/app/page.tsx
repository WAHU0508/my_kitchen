// homepage

import React from 'react'
import Image from 'next/image'
import Header from '@//components/header'
import strip1 from '@//assets/strip1.png'
import MissionSection from '@//components/homepage/missionsection'

export default function HomePage() {
    return (
        <div className='w-full flex flex-col items-center justify-center bg-black'>
            <div className='w-full relative'>
                <div className='w-full fixed top-0 left-0 z-20'>
                    <Header/>
                </div>
                <video
                    src='/Myvideo.mp4'
                    autoPlay
                    loop
                    muted
                    className="w-full min-h-screen"
                />
                <div className='absolute top-10 md:top-20 lg:top-40 lg:left-1/2 lg:transform lg:-translate-x-1/2 text-center'>
                    <p className='text-[24px] md:text-[50px] lg:text-[64px] text-white font-bold'>Powering Innovation, Ensuring Reliability</p>
                    <p className='text-[16px] md:text-[20px] lg:text-[24px] text-white font-normal'>Experience the power of alver power</p>
                </div>
                <div className='w-full absolute top-30 md:top-70 lg:top-130'>
                    <Image
                        src={strip1}
                        alt='Strip1'
                        className='w-full h-auto object-cover'
                    />
                </div>
            </div>

            {/* Mission section */}
            <div className='w-full mt-[10px] md:mt-[50px] lg:mt-[130px]'>
                <MissionSection/>
            </div>

            {/* Our Expertise */}
            <div className='w-full bg-white h-auto text-black flex items-center justify-center lg:pt-[70px]'>
                <div className=' w-[95%] md:w-[95%] lg:w-[80%] border-l-1 border-black h-auto flex flex-row'>
                    <div className='mt-[50px] border-l-2 border-black h-[100px] md:h-[100px] lg:h-[100px]'></div>
                    <div className='w-full flex flex-col md:flex-row lg:flex-row'>
                        <div className='flex flex-col ml-[30px] md:ml-[30px] w-[200px] md:w-[300px] lg:ml-[50px] lg:w-[300px]'>
                            <p className='text-[12px] md:text-[14px] lg:text-[14px]'>Our Expertise</p>
                            <p className='text-[18px] md:text-[20px] lg:text-[24px] mt-[30px] md:mt-[30px] lg:mt-[50px]'>
                                Delivering Excellence Across Diverse Services
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}