import React from 'react'

export default function ProductCard() {
  return (
        <div className="w-[386px] h-[379px] border border-[#D9D9D9] shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]">
          {/* Background Image with Opacity */}
          <div
            className="w-[386px] h-[304px] left-0 top-0 opacity-45"
            style={{ backgroundImage: "url('/image.png')", backgroundSize: 'cover' }}
          />
        
          {/* Rectangle 14 - Overlay color */}
          <div className="w-[386px] h-[304px] left-0 top-0 bg-[#252865]"></div>
        
          {/* Title: "Solar Solutions" */}
          <div className="w-[141px] h-[24px] left-[35px] top-[49px] text-white text-[20px] leading-[24px] font-inter">
            Solar Solutions
          </div>
        
          {/* Line 7 */}
          <div className="w-[158.15px] h-0 left-[34.92px] top-[99.5px] border-t-[5px] border-white"></div>
        
          {/* Description */}
          <p className="w-[342px] h-[168px] left-[35px] top-[123px] text-white text-[20px] leading-[24px] font-inter">
            We provide cutting edge solar solutions to enhance energy efficiency and
            sustainability. Our solar technology helps businesses, communities, and
            home transition to clean, reliable and cost effective energy
          </p>
        
          {/* Rectangle 15 - Footer strip */}
          <div className="w-[386px] h-[76px] left-0 top-[303px] bg-[#172C5F]"></div>
        
          {/* Rectangle 16 - Button */}
          <div className="w-[141px] h-[39px] left-[35px] top-[330px] bg-[#F4A261] border-[2px] border-[#F4A261] rounded-[5px] flex items-center justify-center">
            <span className="text-black text-[16px] leading-[19px] font-inter">
              Find out more
            </span>
          </div>
    </div>

  )
}
