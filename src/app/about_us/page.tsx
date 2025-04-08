'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import coverImg from '../assets/sivacon.jpg';
import mission1 from '../assets/mission.png';
import mission2 from '../assets/target.png';
import vision1 from '../assets/vision.png';
import vision2 from '../assets/vision (1).png';
import value1 from '../assets/value.png';
import value2 from '../assets/diamond.png';
import Header from '../components/header';
import Footer from '../components/footer';
import { motion } from 'framer-motion';

export default function AboutUsPage() {
  const [mission, setMission] = useState(true)
  const [vision, setVision] = useState(false)
  const [values, setValues] = useState(false)

  const handleMission = () => {
    setMission(true)
    setVision(false)
    setValues(false)
  }
  const handleVision = () => {
    setMission(false)
    setVision(true)
    setValues(false)
  }
  const handleValues = () => {
    setMission(false)
    setVision(false)
    setValues(true)
  }
  
  return (
    <section className="w-full flex items-center justify-center overflow-x-hidden">
      <div className='relative hidden md:block w-full lg:w-[1440px] flex flex-col items-center justify-center'>
        {/* Background Image with header and quote overlay */}
        <div className="relative w-full lg:w-[1440px] h-[550px]">
          <Image
            src={coverImg}
            alt="Cover Image"
            fill
            className="object-cover"
            priority
          />
      
          {/* Header inside image container (or move outside if needed) */}
          <div className="absolute top-4 left-0 w-full lg:z-20">
            <Header />
          </div>
      
          {/* Quote overlay */}
          <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
            <p className="text-white font-semibold text-[32px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
              Driven by Excellence, Energized by Trust.
            </p>
          </div>
        </div>
      
        {/* Main content */}
        <motion.div
          className="md:w-full lg:max-w-[1300px] px-6 md:px-[100px] flex flex-col mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
        >
          <motion.div
            className="text-black text-[24px] mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false }}
          >
            Our journey
          </motion.div>
        
          <motion.div
            className="flex flex-row items-start gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="w-[10px] h-[50px] bg-[#FF0105]"></div>
            <div className="w-full text-black text-[14px]">
              Alver Power Systems is a company that was founded and registered in 2022 in accordance with the Kenya Company Act rules, however it has been in operation as a sole proprietor since 2017. 
              Our goal is to offer cost-effective power solutions and sustainable, renewable energy-saving solutions that are both inexpensive and environmentally beneficial for consumers, businesses, and institutions.
              In order to consistently produce high-quality electrical solutions that perform and provide protection, we at Alver Power System have formed our company around understanding the needs and expectations of our customers.
              Our work is done with no exceptions, and it shows in the final outcome. Every project is handled equally, whether it involves industrial buildings, residential structures, or commercial and retail fit-outs. Experienced project managers, licensed electricians, and office-based support staff guarantee the effective completion of your contract. Our consumers' faith and trust in using our services has contributed to our success. We are committed to delivering high-quality services on time and under budget, keeping everyone safe, and working together with all parties.
              A focus on quality control and customer service means that a significant amount of our business originates from clients who frequently use our services.
            </div>
          </motion.div>
        </motion.div>
        
        <div className='mt-[20px] w-full flex flex-row gap-6 items-center justify-center'>
          <div className={`rounded-[20px] px-[20px] py-[50px] ${mission ? 'bg-[#FF0105]' : 'bg-[CACACA]'} flex flex-row items-center justify-center gap-2`}
              onClick={handleMission}
          >
             <div className='text-white'>
               <Image
                 src={mission ? mission1 : mission2}
                 width={48}
                 height={48}
                 alt='Mission'
                />
             </div> 
             <div className='text-white'>{mission ? 'Mission Statement' : ''}</div> 
          </div>
          <div className={`rounded-[20px] px-[20px] py-[50px] ${vision ? 'bg-[#FF0105]' : 'bg-[CACACA]'} flex flex-row items-center justify-center gap-2`}
               onClick={handleVision}
           >
             <div className='text-white'>
               <Image
                 src={vision ? vision1 : vision2}
                 width={48}
                 height={48}
                 alt='Mission'
                />
             </div> 
             <div className='text-white'>{vision ? 'Vision Statement' : ''}</div> 
          </div>
          <div className={`rounded-[20px] px-[20px] py-[50px] ${values ? 'bg-[#FF0105]' : 'bg-[CACACA]'} flex flex-row items-center justify-center gap-2`}
            onClick={handleValues}
            >
             <div className='text-white'>
               <Image
                 src={values ? value1 : value2}
                 width={48}
                 height={48}
                 alt='Mission'
                />
             </div> 
             <div className='text-white'>{values ? 'Values Statement' : ''}</div> 
          </div>
        </div>
        
        <div className='mt-[20px]'>
          <Footer />
        </div>
      </div>
    </section>

  );
}
