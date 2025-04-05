import React from 'react'
import Image from 'next/image'
import mapPin from '../svgs/mapPin2.svg'
import rainbowResort from '../assets/rainbow_resort.png'
import logo1 from '../assets/image 16.png'
import solargen from '../assets/solargen.png'

export default function ProjectCard() {
  return (
    <div className='relative w-[300px] h-[259px] lg:w-[386px] lg:h-[379px] border border-[#D9D9D9] shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]'>
      <Image
          src={rainbowResort}
          alt='Solar Gen'
          width={379}
          height={133}
          className='absolute h-[259px] lg:w-[386px] lg:h-[379px]'
        />
      <div className='absolute w-[300px] h-[105px] lg:w-[379px] lg:h-[133px] mt-[10px] lg:mt-[20px]'>
        <Image
          src={logo1}
          alt='Solar Gen'
          width={379}
          height={133}
          className='absolute w-[300px] h-[105px] lg:w-[379px] lg:h-[133px]'
        />
      </div>
      <p className='absolute top-[100px] text-[20px] lg:text-[24px] ml-[20px] mt-[20px] text-[#000000]'>Solargen Technologies</p>
      <div className='absolute flex flex-row gap-2 ml-[20px] top-[140px]'>
        <Image
          src={mapPin}
          alt='Map pin'
          width={12}
          height={12}
        />
        <p className='text-[16px] text-[#000000]'>Nairobi</p>
      </div>
      <div className="absolute w-[158.15px] h-0 ml-[20px] mt-[20px] border-t-[5px] border-[#252865]"></div>
      <p className='absolute text-[14px] lg:text-[20px] ml-[20px] mt-[20px] text-[#000000]'>Supply of low voltage panels</p>
    </div>
  )
}
