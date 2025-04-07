import React from 'react';
import Image from 'next/image';
import coverImg from '../assets/sivacon.jpg';
import Header from '../components/header';

export default function AboutUsPage() {
  return (
    <section className='relative top-0 w-full flex flex-col items-center justify-center overflow-hidden'>

      {/* Background Image */}
      <div className='absolute top-0 left-0 w-[1440px] h-[700px]'>
        <Image
          src={coverImg}
          alt='Cover Image'
          width={1440}
          height={700}
          className='object-cover'
        />
      </div>

      {/* Header in front */}
      <div className='relative w-full'>
        <Header />
      </div>
      
    </section>
  );
}
