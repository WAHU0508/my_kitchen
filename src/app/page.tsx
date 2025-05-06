import React from 'react'
import Header from '@//components/header'

export default function HomePage() {
    return (
        <div className='text-black relative'>
            <div className='w-full relative'>
                <div className='fixed top-0 left-0 z-20'>
                    <Header/>
                </div>
                <video
                    src='/Myvideo.mp4'
                    autoPlay
                    loop
                    muted
                    className="w-full"
                />
            </div>
        </div>
    )
}