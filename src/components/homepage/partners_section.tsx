// MissionSection.tsx or .jsx
'use client'
import React from 'react'
import Image from 'next/image'
import schneider_logo from '@//assets/schneider_logo.png'
import siemens_logo from '@//assets/siemens_logo.png'
import bodor_logo from '@//assets/bodor_logo.png'
import cs_logo from '@//assets/c&sLogo.png'

function PartnersSection() {

  return (
    <div className='w-full bg-black h-auto text-white flex items-center justify-center lg:pt-[20px]'>
      <div className='w-[95%] md:w-[95%] lg:w-[80%] border-l-1 border-white h-auto flex flex-row'>
        <div className='mt-[50px] border-l-2 border-white h-[100px]'></div>
        <div className='w-full flex items-center justify-center flex-col md:flex-row lg:flex-row lg:gap-[200px]'>
          <div className='flex flex-col ml-[30px] md:ml-[30px] md:w-[600px] lg:ml-[50px] lg:w-[600px]'>
            <p className='text-[12px] md:text-[14px] lg:text-[14px]'>COLLABORATION</p>
            <p className='text-[12px] md:text-[14px] lg:text-[14px] mt-[30px]'>Our Partners </p>
            <p className='text-[14px] md:text-[18px] lg:text-[18px] mt-[30px] text-justify'>
              Alver Power Systems collaborates with industry leaders and technology partners to drive innovation and deliver superior solutions to our clients. 
              Our strong partnerships enable us to expand our capabilities and offer cutting-edge products and services.
            </p>
          </div>

          <div className='ml-[20px] w-full h-auto grid grid-cols-2 items-center justify-center'>
            <div>
                <Image
                    src={schneider_logo}
                    alt='Schneider Logo'
                    
                />
            </div>
            <div>
                <Image
                    src={siemens_logo}
                    alt='Siemens Logo'
                    
                />
            </div>
            <div>
                <Image
                    src={bodor_logo}
                    alt='Bodor Logo'
                    
                />
            </div>
            <div>
                <Image
                    src={cs_logo}
                    alt='C&S Logo'
                    
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
