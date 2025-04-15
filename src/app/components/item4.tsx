'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import solarimg from '../assets/electrical-installation.png'

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
        alt="Electrical Installation Img"
        fill
        className="object-cover"
      />

      {/* Hover/tap overlay */}
      <div className={`absolute top-0 left-0 w-full h-full transition-colors duration-300 flex flex-col ${
        showDetails ? 'bg-black/60' : 'bg-transparent'
      } group-hover:bg-black/60`}>
        <div className="ml-[50px] mt-[100px] mb-4 flex flex-col gap-3">
          <p className="text-white text-[32px] font-bold">04</p>
          <p className="text-white text-[28px] font-bold h-[60px] leading-tight">Electrical Installation</p>
          <div className={`w-[50px] border-b-4 border-[#FF0105] transition-all duration-300 ${
            showDetails ? 'w-[150px]' : ''
          } group-hover:w-[150px]`}></div>

          {/* Description */}
          <p className={`text-white text-[16px] font-normal max-w-[250px] transition-all duration-500 ease-in-out ${
            showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } group-hover:opacity-100 group-hover:translate-y-0`}>
            We offer complete electrical installation and wiring services for buildings, from planning and layout to final testing. 
            Our team ensures safe, efficient, and reliable electrical systems tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  )
}
