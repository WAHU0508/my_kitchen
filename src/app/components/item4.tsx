import React from 'react'
import Image from 'next/image'
import solarimg from '../assets/electrical-installation.png'

export default function Product1() {
  return (
    <div className="relative w-[200px] h-[400px] md:w-[250px] md:h-[400px] lg:w-[350px] lg:h-[500px] group overflow-hidden">
      <Image 
        src={solarimg}
        alt="Solar Img"
        fill
        className="object-cover"
      />

      {/* Hover overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent group-hover:bg-black/60 transition-colors duration-300 flex flex-col">
        <div className="ml-[50px] mt-[100px] mb-4 flex flex-col gap-3">
          <p className="text-white text-[32px] font-bold">04</p>
          <p className="text-white text-[32px] font-bold">Electrical Installation</p>
          <div className="w-[50px] group-hover:w-[150px] border-b-4 border-[#FF0105] transition-all duration-300"></div>

          {/* Description shown only on hover */}
          <p className="text-white text-[16px] font-normal max-w-[250px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            We offer complete electrical installation and wiring services for buildings, from planning and layout to final testing. 
            Our team ensures safe, efficient, and reliable electrical systems tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  )
}
