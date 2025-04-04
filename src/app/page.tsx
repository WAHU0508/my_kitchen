import React from 'react';
import Image from 'next/image';
import electricalsImg from './assets/electricals.png'
import switchboardImg from './assets/switchboard.png'
import solarpanelImg from './assets/solarpanel.png'
import avrImg from './assets/AVR.png'
import Carousel from './components/image_carousel'
import externalLink from './svgs/external_link.svg'

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
        <p className='w-full lg:w-[1186px] flex lg:items-center lg:justify-center md:items-center md:justify-center text-center text-[#000000] text-[12px] lg:text-[24px] md:text-[20px]'>
          Alver Power Systems Ltd is your trusted partner for innovative electrical and renewable energy solutions across Kenya and East Africa.
We specialize in high-quality electrical installations, solar energy solutions and custom switchboard manufacturing. We also offer end to end services that include engineering, procurement, construction (EPC) and maintenance.
        </p>
        <div className='w-full flex flex-row items-center justify-center lg:gap-[200px] md:gap-[150px] gap-[50px]'>
          <div className="relative w-full h-full">
            {/* Rectangle 9 - blurred background box */}
            <div className="absolute inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>
            {/* Rectangle 8 - foreground box */}
            <button className="absolute inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center justify center gap-2">
              Explore
              <Image
                src={externalLink}
                alt='Explore'
                width={18}
                height={18}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
