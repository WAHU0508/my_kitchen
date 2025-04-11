import React from 'react'
import Image from 'next/image'
import solarimg from '../assets/img01.jpg'

export default function Product1() {
  return (
    <div className="relative w-[320px] h-[250px] group overflow-hidden">
      <Image 
        src={solarimg}
        alt="Solar Img"
        fill
        className="object-cover"
      />

      {/* Hover overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent group-hover:bg-black/60 transition-colors duration-300 flex flex-col">
        <div className="ml-[20px] mt-[10px] mb-4 flex flex-col gap-3">
          <p className="text-white text-[32px] font-bold">01</p>
          <p className="text-white text-[32px] font-bold">Solar Solutions</p>
          <div className="w-[50px] group-hover:w-[150px] border-b-4 border-[#FF0105] transition-all duration-300"></div>
          <button className='w-[140px] border border-white text-[16px] text-white active:bg-white active:text-black opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out'>
            See More
          </button>
        </div>
      </div>
    </div>
  )
}
