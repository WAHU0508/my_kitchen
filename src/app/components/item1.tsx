'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import solarimg from '../assets/solar-homes.png';

export default function Product1() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <div 
      className="relative w-[320px] h-[500px] group overflow-hidden cursor-pointer"
      onClick={toggleDetails}
    >
      <Image 
        src={solarimg}
        alt="Solar Img"
        fill
        className="object-cover"
      />

      {/* Hover overlay */}
      <div className={`absolute top-0 left-0 w-full h-full transition-colors duration-300 flex flex-col ${
        showDetails ? 'bg-black/60' : 'bg-transparent'
      }`}>
        <div className="ml-[50px] mt-[100px] mb-4 flex flex-col gap-3">
          <p className="text-white text-[32px] font-bold">01</p>
          <p className="text-white text-[32px] font-bold">Solar Solutions</p>
          <div className={`w-[50px] border-b-4 border-[#FF0105] transition-all duration-300 ${
            showDetails ? 'w-[150px]' : ''
          }`}></div>

          {/* Description shown only on hover or tap */}
          <p className={`text-white text-[16px] font-normal max-w-[250px] transition-all duration-500 ease-in-out ${
            showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            We provide cutting edge solar solutions to enhance energy efficiency and sustainability. 
            Our solar technology helps businesses, communities, and homes transition to clean, reliable, and cost-effective energy.
          </p>
        </div>
      </div>
    </div>
  );
}
