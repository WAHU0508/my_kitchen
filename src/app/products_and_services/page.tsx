import React from 'react'
import background from '@//assets/background1.png'
import Image from 'next/image'
import Header from '@//components/header'


function ProductsAndServicesPage() {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-black'>
      <div className='w-full relative'>
        {/* Header */}
        <div className='w-full fixed top-0 left-0 z-20'>
            <Header/>
        </div>
        <div className='w-full h-full md:h-[600px]'>
            <Image
            src={background}
            alt='Products and Services'
            className='w-full h-full'
          />
        </div>
        <div className='absolute top-10 md:top-50 lg:top-50 left-1/2 transform -translate-x-1/2 text-center'>
            <p className='text-[24px] md:text-[50px] lg:text-[64px] text-white font-bold'>Our Products & Services</p>
        </div>
      </div>
    </div>
  )
}

export default ProductsAndServicesPage