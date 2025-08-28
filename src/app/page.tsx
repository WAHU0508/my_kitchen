// homepage
'use client'
import React from 'react';
import Image from 'next/image';
import Header from '@//components/header'

export default function HomePage() {
    return (
        <div className='w-full flex flex-col items-center justify-center bg-white'>
           {/*Header Section */}
            <div className='w-full relative'>
                <div className='w-full fixed top-0 left-0 z-20'>
                    <Header/>
                </div>
                <Image
                    src='/rustic-kitchen.png'
                    alt='Rustic Kitchen'
                    className="w-full lg:h-[700px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-4xl px-6">
              <h1 className="text-md md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl text-balance">
                Discover the joy of <span className='text-[#e46f2b]'>home cooking</span>
              </h1>
              <p className="text-sm md:text-lg lg:text-xl text-white leading-relaxed drop-shadow-lg text-pretty">
                Transform your kitchen into a culinary haven with our premium appliances and expert recipes. From
                everyday meals to special occasions, we provide everything you need to create memorable dining
                experiences for you and your loved ones.
              </p>
            </div>
          </div>
            </div>
        </div>
    )
}
