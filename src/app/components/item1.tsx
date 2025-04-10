import React from 'react'
import Image from 'next/image'
import solarimg from '../assets/solar-homes.png'

export default function Product1() {
  return (
    <div className="relative w-[200px] h-[400px] md:w-[250px] md:h-[400px] lg:w-[250px] lg:h-[400px]">
      <Image 
        src={solarimg}
        alt="Solar Img"
        width={250}
        height={400}
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-none hover:bg-black/60 flex flex-col">
        <div className="ml-[50px] mb-4 flex flex-col">
          <p className="text-white text-lg font-medium">01</p>
          <div className="w-[50px] border-b-2 border-[#252865]" />
        </div>
      </div>
    </div>
  )
}
