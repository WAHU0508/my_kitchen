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
                  <h1 className="lg:text-6xl font-bold text-white text-center drop-shadow-2xl">Discover the joy of <span className='text-[#000000]'>Home cooking</span></h1>
                </div>
            </div>
        </div>
    )
}
