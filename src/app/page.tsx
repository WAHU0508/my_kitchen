import React from 'react'
import Image from 'next/image'
import Header from '@//components/header'
import strip1 from '@//assets/strip1.png'
import MissionSection from '@//components/homepage/missionsection'

export default function HomePage() {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-full relative'>
                <div className='w-full fixed top-0 left-0 z-20'>
                    <Header/>
                </div>
                <video
                    src='/Myvideo.mp4'
                    autoPlay
                    loop
                    muted
                    className="w-full"
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
            <div className='w-full'>
                <MissionSection/>
            </div>
        </div>
    )
}