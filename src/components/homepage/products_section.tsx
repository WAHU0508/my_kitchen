import React from 'react'
import Image from 'next/image'
import sivacon from '@//assets/sivacon(2).jpg'

function ProductsSection() {
  return (
    <div className='w-full bg-white h-auto text-black flex flex-col md:flex-row items-center justify-center'>
        <div>
            <Image
                src={sivacon}
                alt='Sivacon Image'
                className='w-full h-full'
            />
        </div>
    </div>
  )
}

export default ProductsSection