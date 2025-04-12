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

            <div className="absolute lg:fixed top-4 left-0 w-full lg:z-20">
                <Header />
            </div>
            {/* Heading */}
            <div className="absolute bottom-20 md:bottom-50 lg:bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
                <p className="text-white font-semibold text-[24px] md:text-[30px] lg:text-[32px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
                    Our Range of Electrical & Engineering Solutions
                </p>
            </div>

        </div>

        {/* Main Section */}
        <div className="w-full flex flex-col items-center justify-center mt-[20px]">
            <h2 className="text-[#252865] text-3xl lg:text-5xl font-bold mb-6">
                Our Products & Services
            </h2>
            <p className="text-gray-600 text-base lg:text-lg mb-10 max-w-3xl mx-auto">
                From solar energy to precision CNC machining, we provide a full suite of expert solutions tailored to power industries, infrastructures, and innovations.
            </p>
            <div className="w-full flex flex-col items-center justify-center overflow-x-auto lg:overflow-x-hidden lg:overflow-y-hidden">
                <div className="w-full grid md:grid-cols-2 lg:flex lg:flex-row gap-4 place-items-center px-4">
                    <Item1 />
                    <Item2 />
                    <Item3 />
                    <Item4 />
                </div>
            </div>
        </div>

        {/* Footer Section */}
        <div className='w-full bg-[#252865] mt-[20px]'>
            <Footer />
        </div>
    </div>
</section>
  )
}
