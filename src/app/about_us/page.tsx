'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import coverImg from '../assets/switchboard_3_.png'

export default function AboutUsPage() {
  const TimerSections = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentSection(1), 3000); // Show section 1 after 3 seconds
    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (currentSection === 1) {
      const timer2 = setTimeout(() => setCurrentSection(2), 3000); // Show section 2 after another 3 seconds
      return () => clearTimeout(timer2);
    }
  }, [currentSection]);
    
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      <div className='hidden lg:flex md:flex w-[1440px] h-[600px]'>
        <Image
          src={coverImg}
          alt='Cover Image'
          width={1440}
          height={600}
        />
      </div>
{/*       <div className='w-full md:h-[141px] lg:h-[141px] flex items-center justify-center bg-[#CACACA]'>
        <div className='w-full lg:w-[1300px]'>
          <p className='lg:text-[32px] font-semibold text-black md:w-[327px] ml-[20px] lg:w-[327px] w-[214px]'>About Us - Alver Power Systems Ltd.</p>
        </div>
      </div>
      <div className='lg:p-4 md:p-2 p-1 lg:w-[1300px] md:w-full w-full flex flex-col'>
        <p className='w-full lg:w-[1186px] text-[#000000] text-[12px] lg:text-[24px] md:text-[20px]'>
          Alver Power Systems is a company that was founded and registered in 2022 in accordance with the Kenya Company Act rules, 
          however it has been in operation as a sole proprietor since 2017. Our goal is to offer cost-effective power solutions and sustainable, 
          renewable energy-saving solutions that are both inexpensive and environmentally beneficial for consumers, businesses, and institutions.
          In order to consistently produce high-quality electrical solutions that perform and provide protection, we at Alver Power System have formed our company around understanding 
          the needs and expectations of our customers. Our work is done with no exceptions, and it shows in the final outcome. Every project is handled equally, whether it involves industrial buildings, residential structures, or commercial and retail fit-outs. Experienced project managers, licensed electricians, and office-based 
          support staff guarantee the effective completion of your contract. Our consumers' faith and trust in using our services has contributed to our success.
        </p>
        <div className='container'>
            <div
          className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ${
            currentSection === 0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Section 1: This is the first section.
        </div>
  
        <div
          className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ${
            currentSection === 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Section 2: This is the second section.
        </div>
        </div>
      </div> */}
    </section>
  )
}
