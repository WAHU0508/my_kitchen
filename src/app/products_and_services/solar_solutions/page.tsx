import React from 'react'
import Image from 'next/image'
import solarimg from '@/app/assets/img01.jpg';

export default function SolarSolutions() {
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className='relative w-full lg:w-[1440px] flex flex-col items-center justify-center'>
        {/* Background Image with header and quote overlay */}
        <div className="relative w-full h-[300px] lg:w-[1440px] lg:h-[550px] md:h-[550px]">
          <Image
            src={solarimg}
            alt="Cover Image"
            fill
            className="object-cover"
            priority
          />
      
          {/* Header inside image container (or move outside if needed) */}
          <div className="fixed top-4 left-0 w-full lg:z-20">
            <Header />
          </div>
          
          <div className="absolute bottom-5 lg:bottom-50 md:bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
            <p className="text-white font-semibold text-[32px] lg:text-[50px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
              Products and Services
            </p>
          </div>
        </div>
        
        {/* Main section */}
        <div className='flex flex-row gap-6'>
            <div className="w-[10px] h-auto bg-[#FF0105]"></div>
            <div className="w-full text-black text-[14px] font-light">
              We&apos;re here to help with all your electrical and energy solution. Visit us at our location or simply call us or send an email. 
              For any questions, feel free to contact us 
            </div>
        </div>
        
        {/* Footer section */}
        <div className='w-full bg-[#252865] mt-[20px]'>
          <Footer />
        </div>
        </div>
      </section>
  )
}
