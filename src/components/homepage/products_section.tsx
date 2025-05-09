import React from 'react'
import Image from 'next/image'
import sivacon from '@//assets/sivacon(2).jpg'

function ProductsSection() {
  return (
    <div className='w-full bg-white h-auto text-black flex flex-col md:flex-row items-center justify-center mt-[20px]'>
        <div className='w-[95%] md:w-[95%] lg:w-[80%] h-auto flex flex-col md:flex-row items-center justify-center'>
            <div className='w-[50%]'>
                <div className='text-black lg:w-[70%] flex flex-col gap-[50px]'>
                    <p className='lg:text-[40px]'>Switchboard Manufacturing</p>
                    <p className='lg:text-[16px]'>From custom-designed switch boards to panel assemblies, 
                        we offer high-quality manufacturing solutions tailored to meet your specific requirements.
                    </p>
                    <button className='bg-white text-black flex flex-row'>
                        <p className='border border-black px-4 py-1'>read more</p>
                        <p className='border border-l-0 border-black px-4 py-1'>A</p>
                    </button>
                </div>
                
            </div>
            <div className='w-[50%] h-auto'>
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

export default ProductsSection