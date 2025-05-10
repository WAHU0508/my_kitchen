import React from 'react'
import Image from 'next/image'
import sivacon from '@//assets/sivacon(2).jpg'

function ProductsSection() {
  return (
    <div className='w-full bg-white h-auto text-black flex flex-col md:flex-row items-center justify-center pt-[20px]'>
        <div className='w-full h-auto flex flex-col md:flex-row items-center justify-center md:justify-between md:pl-[5%] lg:pl-[10%]'>
            <div className='w-[95%] md:w-[50%]'>
                <div className='text-black w-full flex flex-col gap-[20px] md:gap-[50px] lg:gap-[70px]'>
                    <p className='text-[24px] md:text-[32px] lg:text-[40px]'>Switchboard Manufacturing</p>
                    <p className='text-[12px] md:text-[16px] lg:text-[16px]'>From custom-designed switch boards to panel assemblies, 
                        we offer high-quality manufacturing solutions tailored to meet your specific requirements.
                    </p>
                    <button className='bg-white text-black flex flex-row mb-[20px] md:mb-0'>
                        <p className='border border-black px-4 py-1 rounded-tl-[10px] rounded-bl-[10px]'>read more</p>
                        <p className='border border-l-0 border-black px-4 py-1 rounded-tr-[10px] rounded-br-[10px]'>A</p>
                    </button>
                </div>
            </div>
            <div className='w-full md:w-[50%] lg:w-[50%] h-auto'>
                <Image
                    src={sivacon}
                    alt='Sivacon Image'
                    className='w-full h-full'
                />
            </div>
        </div>
    </div>
  )
}

export default ProductsSection;