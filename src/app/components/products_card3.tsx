import React from 'react'
import Image from 'next/image'
import avrImg from '../assets/AVR.png'

export default function ProductCard() {
  return (
        <div className="w-[300px] h-[309px] lg:w-[386px] lg:h-[379px] border border-[#D9D9D9] shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]">
          {/* Background Image with Opacity */}
          <div className='relative w-[300px] h-[250px] lg:w-[386px] lg:h-[304px] bg-[#B2B3B2]'>
            <Image
            src={avrImg}
            alt='Switchboard Image'
            width={386}
            height={304}
            className="absolute w-[300px] h-[250px] lg:w-[386px] lg:h-[304px] left-0 top-0 opacity-12"
          />
          <p className="absolute w-full h-[24px] left-[20px] lg:left-[35px] top-[20px] text-black lg:text-[20px]">AVR</p>
          <div className="absolute w-[158.15px] h-0 left-[20px] lg:left-[34.92px] top-[60px] border-t-[5px] border-black"></div>
          {/* Description */}
          <p className="absolute w-[250px] h-[123px] lg:w-[342px] lg:h-[168px] left-[20px] lg:left-[35px] top-[70px] text-black text-[14px] lg:text-[20px]">
            We provide high-quality Automatic Voltage Regulators (AVRs) designed to ensure stable and reliable power for homes, businesses and industries.
            Our AVRs protect electrical equipment from voltage flactuations, surges and power instability, extending their lifespan 
          </p>
          </div>
          
            <div className='w-[300px] h-[59px] lg:w-[386px] lg:h-[76px] bg-[#C6C6C4] flex items-center'>
              <button className="w-[141px] h-[39px] ml-[20px] lg:ml-[35px] bg-[#F4A261] border-[2px] border-[#F4A261] rounded-[5px] flex items-center justify-center">
              <span className="text-black text-[16px]">
                Find out more
            </span>
             </button>
            </div>  
    </div>

  )
}
