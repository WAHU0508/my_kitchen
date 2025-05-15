'use client'
import React from 'react'
import Image from 'next/image'
import MissionSection from '@//components/aboutpage/mission_section'
import OurJourney from '@//components/aboutpage/our_journeu'
import Footer from '@//components/footer'
import Header from '@//components/header'
import coverImg from '@//assets/cover1.png'
import NewsLetter from '@//components/aboutpage/newsletter'

function Aboutpage() {
  return (
    <div className='relative w-full flex flex-col items-center justify-center'>
      <div className='w-full fixed top-0 left-0 z-20'>
        <Header/>
      </div>
      
      <div className='w-full flex flex-col items-center justify-center text-black mt-[50px] md:mt-[60px] lg:mt-[100px]'>
        <h1 className='text-[32px] md:text-[40px]lg:text-[60px] xl:text-[64px]'>About Alver Power</h1>
        <p className='md:w-[80%] lg:w-[50%] text-[12px] md:text-[16px] lg:text-[16px] xl:text-[20px] text-center'>Alver Power Systems is a leading company specializing in switchboard manufacturing, 
          EPC services, solar solutions, electrical installation, and laser cutting machining.
           We are dedicated to providing high-quality, innovative solutions to meet the evolving needs of our clients.
        </p>

        {/* <div className='mt-[50px] w-full border-b-1 border-black'></div> */}
        <div className='w-full mt-[30px] md:mt-[60px]'>
            <MissionSection/>
        </div>

        {/* <div className='mt-[50px] w-full border-b-1 border-black'></div> */}
        <div className='w-full mt-[30px] flex items-center justify-center  md:mt-[60px]'>
            <OurJourney />
        </div>

        {/* <div className='mt-[50px] w-full border-b-1 border-black'></div> */}
        <div className='px-2 w-full h-[250px] md:h-[500px] lg:h-[600px] mt-[30px] md:mt-[60px]'>
          <Image
            src={coverImg}
            alt='coverImg'
            fill
            className='object-cover'
          />
        </div>
         
        <div className='w-full mt-[30px] flex items-center justify-center  md:mt-[60px]'>
            <NewsLetter/>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Aboutpage