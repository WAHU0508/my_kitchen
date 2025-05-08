import React from 'react';
import sivacon from '@//assets/sivacon.png'
import Image from 'next/image';

function MissionSection() {
  return (
    <div className='w-full bg-black h-auto text-white flex items-center justify-center lg:pt-[70px]'>
        <div className=' w-[95%] md:w-[95%] lg:w-[80%] border-l-1 border-white h-auto flex flex-col md:flex-row lg:flex-row'>
            <div className='mt-[50px] border-l-2 border-white h-[30px] md:h-[70px] lg:h-[100px]'></div>
            <div className='flex flex-col md:ml-[20px] md:w-[500px] lg:ml-[50px] lg:w-[600px]'>
                <p className='text-[12px] md:text-[14px] lg:text-[14px]'>Mission</p>
                <p className='text-[16px] md:text-[18px] lg:text-[18px] mt-[30px] md:mt-[30px] lg:mt-[50px]'>Our mission is to build lasting, mutually beneficial relationships with each of our esteemed 
                    clients by continually exceeding their expectations and earning their confidence via the 
                    excellent and devoted work of every member of the Alver power System Team. Also to offer 
                    quality, safe, innovative, and flexible electrical services by ensuring commitment to the 
                    implementation or supporting technical, managerial and business operational systems
                </p>
            </div>
            <Image
                src={sivacon}
                alt='Sivacon Image'
                className='w-full h-auto object-contain'
            />
        </div>
    </div>
  )
}

export default MissionSection