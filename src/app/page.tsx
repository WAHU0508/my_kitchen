// homepage
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
    return (
        <div className='w-full flex flex-col items-center justify-center bg-white'>
           {/*Header Section */}
            <div className='w-full relative'>
                <div className='w-full fixed top-0 left-0 z-20'>
                    <Header/>
                </div>
                <Image
                    src='/beautiful-rustic-kitchen-with-fresh-ingredients-an.png'
                    className="w-full lg:min-h-screen"
                />
            </div>
        </div>
    )
}
