import React from 'react';
import Image from 'next/image'
import location from '../assets/image 25.png'
import phone from '../assets/Icon.png'
import mail from '../assets/image 26.png'
import Header from '../components/header'
import contactus from '../assets/contactus.jpg'
import { motion } from 'framer-motion';

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
      
          {/* Quote overlay */}
          <div className="absolute bottom-5 lg:bottom-50 md:bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
            <p className="text-white font-semibold text-[32px] lg:text-[50px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
              Get In Touch
            </p>
          </div>
        </div>
          <motion.div
            className="flex flex-row items-start gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="w-[10px] h-[50px] bg-[#FF0105]"></div>
            <div className="w-full text-black text-[14px] font-light">
              We’re here to help with all your electrical and energy solution. Visit us at our location or simply call us or send an email. 
              For any questions, feel free to contact us 
            </div>
        </motion.div>
        <div className='w-full flex flex-row items-center justify-center lg:gap-6'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src={location}
              alt='Location Icon'
              width={48}
              height={48}
            />
            <p className='lg:w-[250px] lg:text-[16px] text-black'>Garden estate along Garden Estate Road Nairobi, Kenya</p>
          </div>
          <div className='flex flex-col items-center justify-center'></div>
          <div className='flex flex-col items-center justify-center'></div>
        </div>
        
        </div>
      </section>
  )
}
