import React from 'react';
import Image from 'next/image';
import electricalsImg from './assets/electricals.png'
import switchboardImg from './assets/switchboard.png'
import solarpanelImg from './assets/solarpanel.png'
import avrImg from './assets/AVR.png'
import Carousel from './components/image_carousel'

export default function HomePage() { 
  return (
    <section className='w-full flex items-center justify-center'>
      <div className='border border-black lg:p-4 md:p-2 p-1 lg:w-[1300px] md:w-full w-full flex flex-col'>
        {/*Image section*/}
        <div className='hidden lg:flex lg:flex-row lg:gap-6 md:flex md:flex-row gap-2 justify-center'>
          <Image 
            src={solarpanelImg}
            alt='Solar Panels Image'
            width={250}
            height={250}
          />
          <Image 
            src={electricalsImg}
            alt='Electricals Image'
            width={250}
            height={250}
          />
          <Image 
            src={switchboardImg}
            alt='Switchboard Image'
            width={250}
            height={250}
          />
          <Image 
            src={avrImg}
            alt='AVR Image'
            width={250}
            height={250}
          />
        </div>
        {/*Small Screen*/}
        <div className='lg:hidden md:hidden flex items-center justify-center'>
          <Carousel />
        </div>
        
        <h1 className='w-full flex lg:items-center lg:justify-center md:items-center md:justify-center text-[#FF0105] text-[16px] lg:text-[32px] md:text-[28px]'>Powering Innovation, Ensuring Reliability</h1>
        <p className='w-full lg:w-[1186px] flex lg:items-center lg:justify-center md:items-center md:justify-center text-[#000000] text-[12px] lg:text-[24px] md:text-[20px]'>
          Alver Power Systems Ltd is your trusted partner for innovative electrical and renewable energy solutions across Kenya and East Africa.
We specialize in high-quality electrical installations, solar energy solutions and custom switchboard manufacturing. We also offer end to end services that include engineering, procurement, construction (EPC) and maintenance.
        </p>
      </div>
    </section>
  );
}
