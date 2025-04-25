'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import solarimg from '@//assets/solar-homes.png';

export default function Product1() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <div 
      className="relative min-w-[25%] h-[500px] group overflow-hidden cursor-pointer"
      onClick={toggleDetails}
    >
      <Image 
        src={solarimg}
        alt="Solar Img"
        fill
        className="object-cover"
      />

      {/* Hover + Tap Overlay */}
      <div className={`absolute top-0 left-0 w-full h-full transition-colors duration-300 flex flex-col 
        ${showDetails ? 'bg-black/60' : 'bg-transparent'} group-hover:bg-black/60`}>
        
        <div className="w-full ml-[50px] mt-[100px] mb-4 flex flex-col gap-3">
          <p className="text-white text-[32px] font-bold">01</p>
          <p className="text-white text-[32px] font-bold h-[60px]">Solar Solutions</p>
          
          <div className={`border-b-4 border-[#FF0105] transition-all duration-300 
            ${showDetails ? 'w-[150px]' : 'w-[50px]'} group-hover:w-[150px] lg:group-hover:w-[150px] xl:group-hover:w-[250px] 2xl:group-hover:w-[350px]`}></div>

          <p className={`text-white text-[16px] font-normal max-w-[250px] lg:max-w-[250px] xl:max-w-[350px] transition-all duration-500 ease-in-out 
            ${showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} 
            group-hover:opacity-100 group-hover:translate-y-0`}>
            We provide cutting edge solar solutions to enhance energy efficiency and sustainability. 
            Our solar technology helps businesses, communities, and homes transition to clean, reliable, and cost-effective energy.
          </p>
        </div>
      </div>
    </div>
  );
}
