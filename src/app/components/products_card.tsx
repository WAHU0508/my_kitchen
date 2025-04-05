import React from 'react'
import Image from 'next/image'
import solarImg from '../assets/solarpanel.png'

export default function ProductCard() {
  return (
        <div className="w-[386px] h-[379px] border border-[#D9D9D9] shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]">
          {/* Background Image with Opacity */}
          <Image
            src={solarImg}
            alt='Solar Image'
            width={386}
            height={304}
            className="relative w-[386px] h-[304px] left-0 top-0 opacity-45"
          />
    </div>

  )
}
