'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import coverImg from '@//assets/sivacon.jpg';
import mission1 from '@//assets/mission.png';
import mission2 from '@//assets/target.png';
import vision1 from '@//assets/vision.png';
import vision2 from '@//assets/vision (1).png';
import value1 from '@//assets/value.png';
import value2 from '@//assets/diamond.png';
import Header from '@//components/header';
import Footer from '@//components/footer';
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
    <section className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className='relative w-full lg:w-full flex flex-col items-center justify-center'>
        {/* Background Image with header and quote overlay */}
        <div className="relative w-full h-[300px] lg:w-full xl:w-full 2xl:w-full lg:h-[550px] md:h-[550px]">
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
          <div className="absolute bottom-5 lg:bottom-50 md:bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
            <p className="text-white font-semibold text-[32px] lg:text-[50px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
              Driven by Excellence, Energized by Trust.
            </p>
          </div>
        </div>
      
        {/* Main content */}
        <motion.div
          className="md:w-full lg:w-[90%] px-6 md:px-[100px] flex flex-col mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
        >
          <motion.div
            className="w-full text-black text-[24px] mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false }}
          >
            Our journey
          </motion.div>
        
          <motion.div
            className="w-full flex flex-row items-start gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="w-[10px] h-[50px] bg-[#FF0105]"></div>
            <div className="w-full text-black text-[14px] font-light">
              Alver Power Systems is a company that was founded and registered in 2022 in accordance with the Kenya Company Act rules, however it has been in operation as a sole proprietor since 2017. 
              Our goal is to offer cost-effective power solutions and sustainable, renewable energy-saving solutions that are both inexpensive and environmentally beneficial for consumers, businesses, and institutions.
              In order to consistently produce high-quality electrical solutions that perform and provide protection, we at Alver Power System have formed our company around understanding the needs and expectations of our customers.
              Our work is done with no exceptions, and it shows in the final outcome. Every project is handled equally, whether it involves industrial buildings, residential structures, or commercial and retail fit-outs. Experienced project managers, licensed electricians, and office-based support staff guarantee the effective completion of your contract. Our consumers&apos; faith and trust in using our services has contributed to our success. We are committed to delivering high-quality services on time and under budget, keeping everyone safe, and working together with all parties.
              A focus on quality control and customer service means that a significant amount of our business originates from clients who frequently use our services.
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div className='hidden mt-[20px] w-full lg:flex md:flex flex-row gap-6 items-stretch justify-center'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
        >
            {/* Mission */}
            <div
              className={`rounded-[20px] px-[50px] py-[50px] ${
                mission ? 'bg-[#FF0105]' : 'bg-[#CACACA]'
              } flex flex-row items-center justify-center gap-2 cursor-pointer transition-all duration-800 ease-in-out`}
              onClick={handleMission}
            >
              <div className='flex flex-col items-center justify-center gap-1'>
                <Image
                  src={mission ? mission1 : mission2}
                  width={48}
                  height={48}
                  alt='Mission'
                />
                <div className='text-black font-semibold text-[20px]'>
                  {mission ? '' : 'Mission'}
                </div>
              </div>
              <div className='text-white'>
                {mission && (
                  <div className='flex flex-col items-start gap-1 text-white text-left'>
                    <p className='font-bold text-[20px]'>Our Mission</p>
                    <p className='font-light text-[12px] max-w-[300px] leading-snug'>
                      To build strong, lasting client relationships by consistently exceeding expectations through the dedicated work of the Alver Power Systems team.
                    </p>
                  </div>
                )}
              </div>
            </div>
          
            {/* Vision */}
            <div
              className={`rounded-[20px] px-[50px] py-[50px] ${
                vision ? 'bg-[#FF0105]' : 'bg-[#CACACA]'
              } flex flex-row items-center justify-center gap-2 cursor-pointer transition-all duration-800 ease-in-out`}
              onClick={handleVision}
            >
              <div className='flex flex-col items-center justify-center gap-1'>
                <Image
                  src={vision ? vision1 : vision2}
                  width={48}
                  height={48}
                  alt='Vision'
                />
                <div className='text-black font-semibold text-[20px]'>
                  {vision ? '' : 'Vision'}
                </div>
              </div>
                <div className='text-white'>
                {vision && (
                  <div className='flex flex-col items-start gap-1 text-white text-left'>
                    <p className='font-bold text-[20px]'>Our Vision</p>
                    <p className='font-light text-[12px] max-w-[300px] leading-snug'>
                      Being the most skilled and reputable commercial electrical contractor/ service provider in East Africa.
                    </p>
                  </div>
                )}
              </div>
            </div>
          
            {/* Values */}
            <div
              className={`rounded-[20px] px-[50px] py-[50px] ${
                values ? 'bg-[#FF0105]' : 'bg-[#CACACA]'
              } flex flex-row items-center justify-center gap-2 cursor-pointer transition-all duration-800 ease-in-out`}
              onClick={handleValues}
            >
              <div className='flex flex-col items-center justify-center gap-1'>
                <Image
                  src={values ? value1 : value2}
                  width={48}
                  height={48}
                  alt='Values'
                />
                <div className='text-black font-semibold text-[20px]'>
                  {values ? '' : 'Values'}
                </div>
              </div>
                <div className='text-white'>
                {values && (
                  <div className='flex flex-col items-start gap-1 text-white text-left'>
                    <p className='font-bold text-[20px]'>Our Values</p>
                    <p className='font-light text-[12px] max-w-[300px] leading-snug'>
                      Customer focus, service, competitive, teamwork and commitment
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          <div className='md:hidden lg:hidden flex flex-col gap-2 mt-[20px]'>
            <motion.div 
                    className='rounded-[10px] px-[20px] py-[10px] bg-[#FF0105] flex flex-row items-center justify-center gap-2 cursor-pointer'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }}
          >
              <Image
                  src={mission1}
                  width={48}
                  height={48}
                  alt='Values'
                />
                <div className='flex flex-col items-start gap-1 text-white text-left'>
                    <p className='font-bold text-[20px]'>Our Mission</p>
                    <p className='font-light text-[12px] max-w-[300px] leading-snug'>
                      To build strong, lasting client relationships by consistently exceeding expectations through the dedicated work of the Alver Power Systems team.
                    </p>
                </div>
          </motion.div>
          <motion.div 
                    className='rounded-[10px] px-[20px] py-[10px] bg-[#FF0105] flex flex-row items-center justify-center gap-2 cursor-pointer'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }}
          >
              <Image
                  src={vision1}
                  width={48}
                  height={48}
                  alt='Vision'
                />
                <div className='flex flex-col items-start gap-1 text-white text-left'>
                    <p className='font-bold text-[20px]'>Our Vision</p>
                    <p className='font-light text-[12px] max-w-[300px] leading-snug'>
                      Being the most skilled and reputable commercial electrical contractor/ service provider in East Africa.
                    </p>
                </div>
          </motion.div>
          <motion.div 
                    className='rounded-[10px] px-[20px] py-[10px] bg-[#FF0105] flex flex-row items-center justify-center gap-2 cursor-pointer'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }}
          >
              <Image
                  src={value1}
                  width={48}
                  height={48}
                  alt='Values'
                />
                <div className='flex flex-col items-start gap-1 text-white text-left'>
                    <p className='font-bold text-[20px]'>Our Values</p>
                    <p className='font-light text-[12px] max-w-[300px] leading-snug'>
                      Customer focus, service, competitive, teamwork and commitment
                    </p>
                </div>
          </motion.div>
          </div>
        
      </div>
      <div className='w-full bg-[#F8F8F8] mt-[20px]'>
          <Footer />
      </div>
    </section>

  );
}
