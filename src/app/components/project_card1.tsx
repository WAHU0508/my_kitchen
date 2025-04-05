import React from 'react'
import Image from 'next/image'
import mapPin from '../svgs/mapPin2.svg'
import solargen from '../assets/solargen.png'

export default function ProjectCard() {
  return (
    <div className='w-[300px] h-[259px] lg:w-[386px] lg:h-[379px] bg-[rgba(50,101,37,0.47)] opacity-[0.37] border border-[#D9D9D9] shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]'>
      <div className='w-[300px] h-[105px] lg:w-[379px] lg:h-[133px] mt-[10px] lg:mt-[20px]'>
        <Image
          src={solargen}
          width={379}
          height={133}
          className='w-[300px] h-[105px] lg:w-[379px] lg:h-[133px]'
        />
      </div>
      <p className='text-[20px] lg:text-[24px] mt-[20px] text-black'>Solargen Technologies</p>
      <div className='flex flex-row gap-2'>
        <Image
          src={mapPin}
          width={12}
          height={12}
        />
        <p className='text-[16px] text-black'>Nairobi</p>
        <div className="absolute w-[158.15px] h-0 left-[20px] lg:left-[34.92px] top-[60px] border-t-[5px] border-[#252865]"></div>
      </div>
    </div>
  )
}
