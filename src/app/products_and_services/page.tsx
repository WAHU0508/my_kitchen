'use client'
import React from 'react';
import Image from 'next/image'
import Header from '../components/header';
import Footer from '../components/footer';
import products from '../assets/product2.png'
import Item1 from '../components/solar'
import Item2 from '../components/switchboard'
import Item3 from '../components/cnc'
import Item4 from '../components/electricals'
// import { motion } from 'framer-motion';

export default function ProductsPage() {
  
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className='relative w-full lg:w-[1440px] flex flex-col items-center justify-center'>
        {/* Background Image with header and quote overlay */}
        <div className="relative w-full h-[300px] lg:w-[1440px] lg:h-[550px] md:h-[550px]">
          <Image
            src={products}
            alt="Cover Image"
            fill
            className="object-cover"
            priority
          />
      
          {/* Header inside image container (or move outside if needed) */}
          <div className="fixed top-4 left-0 w-full lg:z-20">
            <Header />
          </div>
          
          <div className="absolute bottom-5 lg:bottom-50 md:bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
            <p className="text-white font-semibold text-[32px] lg:text-[50px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
              Products and Services
            </p>
          </div>
        </div>
        {/* Main section */}
        <div className="w-full mt-[20px] overflow-x-auto lg:overflow-x-hidden lg:overflow-y-hidden">
            <div className="flex flex-row items-center justify-center  min-w-max">
                <Item1 />
                <Item2 />
                <Item3 />
                <Item4 /> 
            </div>
        </div>
        
        {/* Footer section */}
        <div className='w-full bg-[#252865] mt-[20px]'>
          <Footer />
        </div>
        </div>
      </section>
  )
}
