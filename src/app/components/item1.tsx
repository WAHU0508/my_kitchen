import React from 'react'
import Image from 'next/image'
import solarimg from '../assets/solar-homes.png'

export default function Product1() {
  return (
    <div className="relative w-[200px] h-[400px] md:w-[250px] md:h-[400px] lg:w-[350px] lg:h-[500px]">
      <Image 
        src={solarimg}
        alt="Solar Img"
        fill
        className="object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-none hover:bg-black/60 flex flex-col">
        <div className="ml-[50px] mt-[100px] mb-4 gap-2 flex flex-col">
          <p className="text-white text-[32px] font-bold">01</p>
          <p className="text-white text-[32px] font-bold">Solar Solutions</p>
          <div className="w-[50px] border-b-2 border-[#252865]" />
        </div>
      </div>
    </div>
  )
}
