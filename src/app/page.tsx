import React from 'react';
import Image from 'next/image';
import electricalsImg from './assets/electricals.png'
import switchboardImg from './assets/switchboard.png'
import solarpanelImg from './assets/solarpanel.png'
import avrImg from './assets/AVR.png'
import Carousel from './components/image_carousel'
import externalLink from './svgs/external_link.svg'
import ProductCard1 from './components/products_card1'
import ProductCard2 from './components/products_card2'
import ProductCard3 from './components/products_card3'

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
        
        <div className='w-full flex flex-row items-center justify-center lg:gap-[200px] md:gap-[150px] gap-[50px] mt-[20px]'>
          {/*Button 1*/}
          <div className="relative w-[123px] h-[23px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px]">
            {/* Rectangle 9 - blurred background box */}
            <div className="absolute w-[123px] h-[23px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>
            {/* Rectangle 8 - foreground box */}
            <button className="absolute w-[123px] h-[23px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] text-[10px] lg:text-[24px] md:text-[24px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center lg:items-center lg:justify-center md:items-center md:justify-center lg:gap-2 md:gap-2">
              Explore our products
              <Image
                src={externalLink}
                alt='Explore'
                width={18}
                height={18}
                className='w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] md:w-[18px] md:h-[18px]'
              />
            </button>
          </div>

          {/*Button 2*/}
          <div className="relative w-[123px] h-[23px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px]">
            {/* Rectangle 9 - blurred background box */}
            <div className="absolute w-[123px] h-[23px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>
            {/* Rectangle 8 - foreground box */}
            <button className="absolute w-[123px] h-[23px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] text-[10px] lg:text-[24px] md:text-[24px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center justify-center lg:items-center lg:justify-center md:items-center md:justify-center lg:gap-2 md:gap-2">
              Get a Quote
              <Image
                src={externalLink}
                alt='Get Quote'
                width={18}
                height={18}
                className='w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] md:w-[18px] md:h-[18px]'
              />
            </button>
          </div>
        </div>
        
        {/*Get To Know Us*/}
        <div className='flex flex-col mt-[40px]'>
            <div className='w-full flex flex-row items-center lg:items-center lg:justify-center md:items-center md:justify-center'>
              <div className="w-[25px] h-0 top-[745px] left-[625px] bg-[#D9D9D9] border-[5px] border-[#252865]"></div>
              <div className="text-black font-inter font-normal text-[14px] lg:text-[24px] md:text-[24px]">
                Get to know us
              </div>
            </div>
            <div className=" w-full flex flex-row lg:items-center lg:justify-center md:items-center md:justify-center gap-[10px] text-[16px] lg:text-[32px] md:text-[28px]">
              <p className='text-[#FF0105]'>Who</p>
              <p className='text-[#252865]'>We are</p>
            </div>
            <p className='w-full lg:w-[1186px] flex lg:items-center lg:justify-center md:items-center md:justify-center text-center text-[#000000] text-[12px] lg:text-[24px] md:text-[20px]'>Alver power systems is a manufacturing company that  specializes in electrical installations solar energy solutions and switchboard manufacturing.
                Mission: Our mission is to build lasting, mutually beneficial relationships with each of our esteemed clients by continually exceeding their expectations and earning their confidence.
                Vision: Being the most skilled and reputable commercial electrical contractor service provider in east Africa 
            </p>
          
            <div className='w-full flex items-center justify-center mt-[20px]'>
              <div className="relative w-[123px] h-[23px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px]">
                {/* Rectangle 9 - blurred background box */}
                <div className="absolute w-[123px] h-[23px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>
                {/* Rectangle 8 - foreground box */}
                <button className="absolute w-[123px] h-[23px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] text-[10px] lg:text-[24px] md:text-[24px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center lg:items-center lg:justify-center md:items-center md:justify-center lg:gap-2 md:gap-2">
                  Learn More
                  <Image
                    src={externalLink}
                    alt='Explore'
                    width={18}
                    height={18}
                    className='w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] md:w-[18px] md:h-[18px]'
                  />
                </button>
              </div>
            </div>

          {/*Product Cards*/}
          <div className='flex flex-col mt-[40px]'>
            <div className='w-full flex flex-row items-center lg:items-center lg:justify-center md:items-center md:justify-center'>
              <div className="w-[25px] h-0 top-[745px] left-[625px] bg-[#D9D9D9] border-[5px] border-[#252865]"></div>
              <div className="text-black font-inter font-normal text-[14px] lg:text-[24px] md:text-[24px]">
                What we do
              </div>
            </div>
            <div className=" w-full flex flex-row lg:items-center lg:justify-center md:items-center md:justify-center gap-[10px] text-[16px] lg:text-[32px] md:text-[28px]">
              <p className='text-[#FF0105]'>Our</p>
              <p className='text-[#252865]'>Products and Services</p>
            </div>
            
            <div className='overflow-x-auto whitespace-nowrap w-full grid grid-cols-1 lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 gap-4 items-center justify-center'>
              <ProductCard1 />
              <ProductCard2 />
              <ProductCard3 />
            </div>

             <div className='w-full flex items-center justify-center mt-[20px]'>
              <div className="relative w-[123px] h-[23px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px]">
                {/* Rectangle 9 - blurred background box */}
                <div className="absolute w-[123px] h-[23px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>
                {/* Rectangle 8 - foreground box */}
                <button className="absolute w-[123px] h-[23px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] text-[10px] lg:text-[24px] md:text-[24px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center lg:items-center lg:justify-center md:items-center md:justify-center lg:gap-2 md:gap-2">
                  Learn More
                  <Image
                    src={externalLink}
                    alt='Explore'
                    width={18}
                    height={18}
                    className='w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] md:w-[18px] md:h-[18px]'
                  />
                </button>
              </div>
            </div>
          </div>
          
          {/*Next Section*/}
          
        </div>
      </div>
    </section>
  );
}
