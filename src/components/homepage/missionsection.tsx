import React from 'react';
import sivacon from '@//assets/sivacon.png'
import Image from 'next/image';

function MissionSection() {
  return (
    <div className='w-full bg-black h-auto text-white flex items-center justify-center lg:pt-[70px]'>
        <div className='w-[80%] border-l-1 border-white h-auto flex lg:flex-row'>
            <div className='mt-[50px] border-l-2 border-white lg:h-[100px]'></div>
            <div className='flex flex-col lg:ml-[50px] lg:w-[600px]'>
                <p className='lg:text-[14px]'>Mission</p>
                <p className='lg:text-[18px] lg:mt-[50px]'>Our mission is to build lasting, mutually beneficial relationships with each of our esteemed 
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