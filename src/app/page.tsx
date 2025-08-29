// homepage
'use client'
import React from 'react';
import Image from 'next/image';
// import { ArrowLeft } from "lucide-react";
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
                    className="w-full h-[350px] md:h-[500px] lg:h-[700px] object-cover"
                />
                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Header text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="mt-[20px] md:mt-0 text-center max-w-4xl px-6">
                      <h1 className="text-[24px] md:text-5xl lg:text-7xl font-bold text-white mb-2 md:mb-6 md:drop-shadow-2xl text-balance">
                        Discover the joy of <span className='text-[#cc7800]'>home cooking</span>
                      </h1>
                      <p className="text-[12px] mb-4 md:text-lg lg:text-xl text-white leading-relaxed md:drop-shadow-lg text-pretty">
                        Transform your kitchen into a culinary haven with our premium appliances and expert recipes. From
                        everyday meals to special occasions, we provide everything you need to create memorable dining
                        experiences for you and your loved ones.
                      </p>
                      {/* Buttons */}
                     <div className="flex flex-row md:gap-6 gap-4 justify-center items-center">
                        <button className="bg-[#cc7800] hover:bg-[#d4621f] text-white font-semibold md:px-4 px-4 md:py-3 py-2 rounded-lg transition-colors duration-300 shadow-lg flex items-center justify-center gap-2 md:text-sm text-[12px] max-w-[200px] sm:max-w-none">
                          Explore Recipes
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                        <button className="border border-white hover:bg-gray-100 text-gray-900 font-semibold md:px-4 px-4 md:py-3 py-2 rounded-lg transition-colors duration-300 shadow-lg md:text-sm text-[12px] max-w-[200px] sm:max-w-none">
                          Product Reviews
                        </button>
                      </div>
                    </div>
               </div>
                
            </div>
        </div>
    )
}
