import React from 'react';
import Image from 'next/image'
import coverImg from '../assets/sivacon.jpg'
import Header from '../components/header'

export default function AboutUsPage() {  
  return (
    <section className='relative top-0 w-full flex flex-col items-center justify-center'>
      <div className='w-[1440px]'>
        <Image
          src={coverImg}
          alt='Cover Image'
          width={1440}
          height={300}
          className='absolute'
        />
      </div>
      <Header />
    </section>
  )
}
