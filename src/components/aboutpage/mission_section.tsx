import React from 'react';
import Image from 'next/image';
import mission from '@//assets/mission.png';

function MissionSection() {
  return (
    <div className='w-full bg-white h-auto text-black flex items-center justify-center lg:pt-[70px]'>
          <div className='w-[95%] md:w-[95%] lg:w-[80%] border-l-1 border-black h-auto flex flex-row'>
            <div className='mt-[50px] border-l-2 border-black h-[100px]'></div>
            <div className='w-full flex items-center justify-center flex-col md:flex-row lg:flex-row lg:gap-[200px]'>
              <div className='flex flex-col ml-[30px] md:ml-[30px] md:w-[600px] lg:ml-[50px] lg:w-[600px]'>
                <p className='text-[12px] md:text-[14px] lg:text-[14px]'>Our Mission</p>
                <p className='text-[16px] md:text-[20px] lg:text-[20px]'>Empowering Industries with Cutting-Edge Solutions</p>
                <p className='text-[14px] md:text-[18px] lg:text-[18px] mt-[30px] text-justify'>
                  At Alver Power Systems, we are committed to redefining industry standards through our 
                  comprehensive range of services. Our team is driven by a passion for excellence, ensuring that we deliver 
                  top-notch solutions in switchboard manufacturing, EPC services, solar solutions, electrical installation, 
                  and laser cutting machining. We take pride in our ability to exceed client expectations and contribute to the
                  success of diverse projects.
                </p>
              </div>
    
              <div className='w-full h-full flex items-center justify-center'>
                <Image
                  src={mission}
                  alt='Mission Image'
                  className='w-[60%] h-full object-contain rounded-[20px]'
                />
              </div>
            </div>
          </div>
        </div>
  )
}

export default MissionSection;