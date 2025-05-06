import React from 'react'

export default function HomePage() {
    return (
        <div className='text-black relative'>
            <video
                src='/Myvideo.mp4'
                autoPlay
                loop
                muted
                className="w-full"
            />
        </div>
    )
}