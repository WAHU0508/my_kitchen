'use client'
import React from 'react';
import Image from 'next/image'
import Header from '@//components/header';
import Footer from '@//components/footer';
import products from '@//assets/product2.png'
import Item1 from '@//components/solar'
import Item2 from '@//components/switchboard'
import Item3 from '@//components/cnc'
import Item4 from '@//components/electricals'
import { motion } from 'framer-motion';

export default function ProductsPage() {
  
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-x-hidden">
    <div className='relative w-full lg:w-full flex flex-col items-center justify-center'>
        {/* Background Image with header and quote overlay */}
        <div className="relative w-full h-[300px] lg:w-full lg:h-[550px] md:h-[550px]">
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
                <p className="text-white font-semibold text-[24px] md:text-[30px] lg:text-[32px] w-[80vw] max-w-[800px] mx-auto">
                    Our Range of Electrical & Engineering Solutions
                </p>
            </div>

        </div>

        {/* Main Section */}
        <motion.div className="w-full lg:w-[90%] flex flex-col items-center justify-center mt-[20px]"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div className="text-[#252865] text-3xl lg:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: false }}
              >
                Our Products & Services
            </motion.div>
            <motion.div className="text-gray-600 text-base lg:text-lg mb-10 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: false }}
              >
                From solar energy to precision CNC machining, we provide a full suite of expert solutions tailored to power industries, infrastructures, and innovations.
            </motion.div>
            <div className="w-full flex flex-col items-center justify-center overflow-x-auto lg:overflow-x-hidden lg:overflow-y-hidden">
              <div className="w-full flex flex-wrap justify-center gap-4 px-4">
                <Item1 />
                <Item2 />
                <Item3 />
                <Item4 />
              </div>
            </div>
        </motion.div>
        {/* Footer Section */}
        <div className='w-full bg-[#F8F8F8] mt-[20px]'>
            <Footer />
        </div>
    </div>
</section>
  )
}
