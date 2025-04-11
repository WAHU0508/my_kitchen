import React from 'react';
import Image from 'next/image'
import location from '../assets/image 25.png'
import phone from '../assets/Icon.png'
import mail from '../assets/image 26.png'
import Header from '../components/header';
import contactus from '../assets/contactus.jpg'
// import { motion } from 'framer-motion';

export default function ContactUsPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className='relative w-full lg:w-[1440px] flex flex-col items-center justify-center'>
        {/* Background Image with header and quote overlay */}
        <div className="relative w-full h-[300px] lg:w-[1440px] lg:h-[550px] md:h-[550px]">
          <Image
            src={contactus}
            alt="Cover Image"
            fill
            className="object-cover"
            priority
          />
      
          {/* Header inside image container (or move outside if needed) */}
          <div className="absolute top-4 left-0 w-full lg:z-20">
            <Header />
          </div>

        </div>
        <div className='flex flex-row gap-6'>
            <div className="w-[10px] h-[50px] bg-[#FF0105]"></div>
            <div className="w-full text-black text-[14px] font-light">
              We&apos;re here to help with all your electrical and energy solution. Visit us at our location or simply call us or send an email. 
              For any questions, feel free to contact us 
            </div>
        </div>
        <div className='w-full flex flex-row items-center lg:gap-6'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src={location}
              alt='Location Icon'
              width={48}
              height={48}
            />
            <p className='lg:w-[250px] lg:text-[16px] mt-[20px] text-black text-center'>Garden estate along Garden Estate Road Nairobi, Kenya</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src={phone}
              alt='Phone Icon'
              width={48}
              height={48}
            />
            <div className='mt-[20px] flex flex-col'>
              <p className='lg:w-[250px] lg:text-[16px] text-black text-center'>(+254) 116 004 001</p>
              <p className='lg:w-[250px] lg:text-[16px] text-black text-center'>(+254) 116 004 002</p>
              <p className='lg:w-[250px] lg:text-[16px] text-black text-center'>(+254) 116 004 003</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src={mail}
              alt='Mail Icon'
              width={48}
              height={48}
            />
            <p className='lg:w-[250px] lg:text-[16px] mt-[20px] text-black text-center'>info@alverpower.com</p>
          </div>
        </div>
        
        </div>
      </section>
  )
}
