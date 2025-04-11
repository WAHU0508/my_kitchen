'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function SolarSolutions() {
    const router = useRouter();
  
    return (
        <section className="w-full flex flex-col items-center justify-center">
            <div className='relative w-full lg:w-[1440px] flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto'>
                {/* Background Image with header and quote overlay */}
                <div className="relative w-full h-[300px] lg:w-[1440px] lg:h-[550px] md:h-[550px]">
                    <Image
                        src='/img04.jpg'
                        alt="Cover Image"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute bottom-20 lg:bottom-50 md:bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
                        <p className="text-white font-semibold text-[32px] lg:text-[50px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
                            CNC
                        </p>
                    </div>
                </div>

                {/* Main section */}
          

            </div>
        </section>
    )
}
