import React from 'react';
import Image from 'next/image';
import coverImg from '../assets/sivacon.jpg';
import Header from '../components/header';
import Footer from '../components/footer';

export default function AboutUsPage() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="relative w-[1440px] h-[550px] z-0">
        <Image
          src={coverImg}
          alt="Cover Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header in front of image */}
      <div className="absolute top-2 z-10">
        <Header />
      </div>
      <div className='absolute lg:w-[1300px]'>
        <p className='text-white font-semibold ml-[150px] text-[50px] w-[600px]'>Driven by Excellence, Energized by Trust.</p>
      </div>
      <div className='lg:w-[1300px] px-[150px] flex flex-col'>
        <div className='text-black lg:text-[24px]'>Our journey</div>
        <div className='flex flex-row'>
          <div className='w-[5px] h-[50px] bg-[#FF0105]'></div>
          <div className='lg:ml-[100px] text-black text-[16px]'>About us</div>
        </div>
      </div>
    </section>
  );
}
