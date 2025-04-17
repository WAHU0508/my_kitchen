'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import electricalsimg from '@//assets/img03.jpg';
import { useRouter } from 'next/navigation';

export default function Product4() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  return (
    <div
      className="relative w-[320px] h-[250px] group overflow-hidden cursor-pointer"
      onClick={toggleActive}
    >
      <Image 
        src={electricalsimg}
        alt="Electrical Img"
        fill
        className="object-cover"
      />

      {/* Hover or Click Overlay */}
      <div className={`
        absolute top-0 left-0 w-full h-full
        transition-colors duration-300 flex flex-col
        ${isActive ? 'bg-black/60' : 'bg-transparent group-hover:bg-black/60'}
      `}>
        <div className="ml-[20px] mt-[10px] mb-4 flex flex-col gap-3">
          <p className="text-white text-[32px] font-bold">04</p>
          <p className="text-white text-[32px] h-[90px] font-bold">Electrical Installation</p>
          <div className={`
            border-b-4 border-[#FF0105]
            transition-all duration-300
            ${isActive ? 'w-[150px]' : 'w-[50px] group-hover:w-[150px]'}
          `}></div>
          <button 
            onClick={(e) => {
              e.stopPropagation(); // prevent re-toggling
              router.push('/products_and_services/electrical_installation');
            }}
            className={`
              w-[120px] py-2 rounded-[5px] border border-white text-[16px] text-white
              active:bg-white active:text-black
              transition-all duration-500 ease-in-out
              ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}
            `}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
