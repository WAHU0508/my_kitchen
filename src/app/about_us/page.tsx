import React from 'react';
import Image from 'next/image'
import coverImg from '../assets/switchboard_3_.png'

export default function AboutUsPage() {  
  return (
    <section className='absolute top-0 w-full flex flex-col items-center justify-center'>
      <div className='w-[1440px] h-[300px]'>
        <Image
          src={coverImg}
          alt='Cover Image'
          width={1440}
          height={300}
        />
      </div>
    </section>
  )
}
