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
      <div className='relative hidden md:block w-full lg:w-[1440px] flex flex-col items-center justify-center overflow-y-hidden'>
          <div className="relative w-full lg:w-[1440px] h-[550px]">
              <Image
                  src={products}
                  alt="Cover Image"
                  fill
                  className="object-cover"
                  priority
              />
              <div className="fixed top-0 left-0 w-full lg:z-20">
                  <Header />
              </div>
              <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
                  <p className="text-white font-semibold text-[32px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
                  Our Range of Electrical & Engineering Solutions
                  </p>
              </div>
          </div>
      </div>
      
      <div className='relative w-full lg:w-[1440px] flex flex-col items-center justify-center'>
        <div className='relative w-full h-[300px] lg:hidden md:hidden flex flex-col items-center justify-center'>
                    <Image
                      src={products}
                      alt="Cover Image"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute top-2 left-0 w-full lg:z-20">
                        <Header />
                    </div>
                    <div className="absolute bottom-10 md:bottom-50 lg:bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
                      <p className="text-white font-semibold text-[20px]">
                       Our Range of Electrical & Engineering Solutions
                      </p>
                    </div>
            </div>
        {/* Main section */}
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
        
        {/* Footer section */}
        <div className='w-full bg-[#252865] mt-[20px]'>
          <Footer />
        </div>
        </div>
      </section>
  )
}
