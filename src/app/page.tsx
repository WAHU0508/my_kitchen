import React from 'react'
import appvideo from '@//assets/My video.mp4'

export default function HomePage() {
    return (
        <div className='text-black relative'>
            <video
                src="/promo.mp4"
                controls
                autoPlay
                loop
                muted
                className="w-full"
            />
        </div>
    )
}