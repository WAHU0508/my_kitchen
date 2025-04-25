'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import sivacon from '@//assets/ss8.png'

export default function Product1() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <div 
      className="relative min-w-[20%] h-[500px] group overflow-hidden cursor-pointer"
      onClick={toggleDetails}
    >
      <Image 
        src={sivacon}
        alt="Switchboard Image"
        fill
        className="object-cover"
      />

      {/* Hover or Tap Overlay */}
      <div className={`absolute top-0 left-0 w-full h-full transition-colors duration-300 flex flex-col ${
        showDetails ? 'bg-black/60' : 'bg-transparent'
      } group-hover:bg-black/60`}>
        <div className="ml-[50px] mt-[100px] mb-4 flex flex-col gap-3">
          <p className="text-white text-[32px] font-bold">02</p>
          <p className="text-white text-[28px] font-bold leading-tight h-[60px]">Switchboard Manufacturing</p>
          <div className={`w-[50px] border-b-4 border-[#FF0105] transition-all duration-300 ${
            showDetails ? 'w-[150px]' : ''
          } group-hover:w-[150px]`}></div>

          {/* Description: visible on tap or hover */}
          <p className={`text-white text-[16px] font-normal max-w-[250px] transition-all duration-500 ease-in-out ${
            showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } group-hover:opacity-100 group-hover:translate-y-0`}>
            We specialize in the design and manufacturing of high-quality electrical switchboards for industrial, commercial, and residential applications. 
            Our switchboards are safe, efficient, and reliable.
          </p>
        </div>
      </div>
    </div>
  )
}
