import React from 'react'
import background from '@//assets/background1.png'
import Image from 'next/image'
import Header from '@//components/header'
import Footer from '@//components/footer'
import { motion } from 'framer-motion';

function ProductsAndServicesPage() {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-black'>
      <div className='w-full relative'>
        {/* Header */}
        <div className='w-full fixed top-0 left-0 z-20'>
            <Header/>
        </div>
        <div className='w-full h-full md:h-[600px]'>
            <Image
            src={background}
            alt='Products and Services'
            className='w-full h-full'
          />
        </div>
        <div className='absolute top-15 md:top-50 lg:top-50 left-1/2 transform -translate-x-1/2 text-center'>
            <p className='text-[24px] md:text-[50px] lg:text-[64px] text-white font-bold'>Our Products & Services</p>
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
                {[Item1, Item2, Item3, Item4].map((Component, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={cardVariants}
                  >
                    <Component />
                  </motion.div>
                ))}
              </div>
            </div>
        </motion.div>

      <Footer/>
    </div>
  )
}

export default ProductsAndServicesPage;