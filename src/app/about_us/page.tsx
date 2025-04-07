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
      
      <div className='lg:w-[1300px] px-[100px] flex flex-col'>
        <div className='text-black lg:text-[24px]'>Our journey</div>
        <div className='flex flex-row'>
          <div className='w-[5px] h-[50px] bg-[#FF0105]'></div>
          <div className='lg:ml-[100px] text-black text-[16px]'>Alver Power Systems is a company that was founded and registered in 2022 in accordance with the Kenya Company Act rules, however it has been in operation as a sole proprietor since 2017. Our goal is to offer cost-effective power solutions and sustainable, renewable energy-saving solutions that are both inexpensive and environmentally beneficial for consumers, businesses, and institutions.
In order to consistently produce high-quality electrical solutions that perform and provide protection, we at Alver Power System have formed our company around understanding the needs and expectations of our customers. Our work is done with no exceptions, and it shows in the final outcome. Every project is handled equally, whether it involves industrial buildings, residential structures, or commercial and retail fit-outs. Experienced project managers, licensed electricians, and office-based support staff guarantee the effective completion of your contract. Our consumers' faith and trust in using our services has contributed to our success. We are committed to delivering high-quality services on time and under budget, keeping everyone safe, and working together with all parties. 
            A focus on quality control and customer service means that a significant amount of our business originates from clients who frequently use our services.
          </div>
        </div>
      </div>
    </section>
  );
}
