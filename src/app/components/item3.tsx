'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import solarimg from '../assets/cnc.png'

export default function Product1() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <div 
      className="relative min-w-[320px] h-[500px] group overflow-hidden cursor-pointer"
      onClick={toggleDetails}
    >
      <Image 
        src={solarimg}
        alt="CNC Img"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className={`absolute top-0 left-0 w-full h-full transition-colors duration-300 flex flex-col ${
        showDetails ? 'bg-black/60' : 'bg-transparent'
      } group-hover:bg-black/60`}>
        <div className="ml-[50px] mt-[100px] mb-4 flex flex-col gap-3">
          <p className="text-white text-[32px] font-bold">03</p>
          <p className="text-white text-[32px] font-bold leading-tight h-[70px]">CNC</p>
          <div className={`w-[50px] border-b-4 border-[#FF0105] transition-all duration-300 ${
            showDetails ? 'w-[150px]' : ''
          } group-hover:w-[150px]`}></div>

          {/* Description */}
          <p className={`text-white text-[16px] font-normal max-w-[250px] transition-all duration-500 ease-in-out ${
            showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } group-hover:opacity-100 group-hover:translate-y-0`}>
            Experience high-precision, fast-turnaround CNC machining tailored to your needs.
            From prototypes to production, we deliver accurate, reliable parts with expert craftsmanship every time.
          </p>
        </div>
      </div>
    </div>
  )
}
