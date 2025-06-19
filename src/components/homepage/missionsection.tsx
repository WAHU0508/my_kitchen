// MissionSection.tsx or .jsx
'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import sivacon from '@//assets/sivacon.png'

function MissionSection() {
  const imageRef = useRef(null)
  const isInView = useInView(imageRef, { once: false, margin: '-100px' })

  return (
    <div className='w-full bg-black h-auto text-white flex items-center justify-center lg:pt-[70px]'>
      <div className='w-[95%] md:w-[95%] lg:w-[80%] border-l-1 border-white h-auto flex flex-row'>
        <div className='mt-[50px] border-l-2 border-white h-[100px]'></div>
        <div className='w-full flex items-center justify-center flex-col md:flex-row lg:flex-row lg:gap-[200px]'>
          <div className='flex flex-col ml-[30px] md:ml-[30px] md:w-[600px] lg:ml-[50px] lg:w-[600px]'>
            <p className='text-[12px] md:text-[14px] lg:text-[14px]'>Mission</p>
            <p className='text-[14px] md:text-[18px] lg:text-[18px] mt-[30px] text-justify'>
              Build long-term, mutually beneficial relationships with all clients. \n

              Continuously exceed client expectations through exceptional service.\n
              
              Earn client trust through the dedication and professionalism of every team member. \n
              
              Deliver high-quality, safe, and innovative electrical solutions.\n
              
              Remain flexible and responsive to diverse client needs.\n
              
              Commit to strong technical, managerial, and business systems to ensure operational excellence.\n
              
              Promote a culture of reliability, integrity, and continuous improvement in all services offered.
            </p>
          </div>

          {/* Animated Image */}
          <motion.div
            ref={imageRef}
            initial={{ x: '-100%', opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className='w-full h-auto flex items-center justify-center'
          >
            <Image
              src={sivacon}
              alt='Sivacon Image'
              className='w-full h-auto object-contain'
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MissionSection
