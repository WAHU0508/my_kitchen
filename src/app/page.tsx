import React from 'react'
import Header from '@//components/header'

export default function HomePage() {
    return (
        <div className='text-black relative'>
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
                <div className='border border-black absolute top-10 md:top-20 lg:top-40 lg:left-1/2 lg:transform lg:-translate-x-1/2 text-center'>
                    <p className='text-[24px] md:text-[50px] lg:text-[64px] text-white font-bold'>Powering Innovation, Ensuring Reliability</p>
                    <p className='text-[16px] md:text-[20px] lg:text-[24px] text-white font-normal'>Experience the power of alver power</p>
                </div>
            </div>
        </div>
    )
}