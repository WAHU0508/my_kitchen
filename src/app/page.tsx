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
                    className="w-full"
                />
            </div>
        </div>
    )
}
