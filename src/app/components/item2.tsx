import React from 'react'
import Image from 'next/image'
import solarimg from '../assets/ss4.png'

export default function Product1() {
  return (
    <div className='border border-black w-[200px] h-[400px] lg:w-[250px] lg:h-[400px] md:w-[250px] md:h-[400px]'>
      <Image 
        src={solarimg}
        alt='Solar Img'
        width={250}
        height={400}
        className='w-full h-full object-cover'
      />
    </div>
  )
}
