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
                <div className='absolute top-50 left-1/2 transform -translate-x-1/2 text-center'>
                    <p className='text-[64px] text-white font-bold'>Powering Innovation, Ensuring Reliability</p>
                </div>
            </div>
        </div>
    )
}