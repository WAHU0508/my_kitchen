import React from 'react';
import Image from 'next/image';
import coverImg from '../assets/sivacon.jpg';
import Header from '../components/header';
import Footer from '../components/footer';

export default function AboutUsPage() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-x-hidden">

  {/* Background Image with header and quote overlay */}
  <div className="relative w-[1440px] h-[550px]">
    <Image
      src={coverImg}
      alt="Cover Image"
      fill
      className="object-cover"
      priority
    />

    {/* Header inside image container (or move outside if needed) */}
    <div className="absolute top-4 left-0 w-full z-20">
      <Header />
    </div>

    {/* Quote overlay */}
    <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 z-10 text-center">
      <p className="text-white font-semibold text-[32px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
        Driven by Excellence, Energized by Trust.
      </p>
    </div>
  </div>

  {/* Main content */}
  <div className="border border-black max-w-[1300px] px-6 md:px-[100px] flex flex-col mt-10">
    <div className="text-black text-[24px] mb-4">Our journey</div>
    <div className="flex flex-row items-start gap-6">
      <div className="w-[10px] h-[50px] bg-[#FF0105]"></div>
      <div className="w-full text-black text-[14px]">
        Alver Power Systems is a company that was founded and registered in 2022 in accordance with the Kenya Company Act rules, however it has been in operation as a sole proprietor since 2017. 
        Our goal is to offer cost-effective power solutions and sustainable, renewable energy-saving solutions that are both inexpensive and environmentally beneficial for consumers, businesses, and institutions.
        In order to consistently produce high-quality electrical solutions that perform and provide protection, we at Alver Power System have formed our company around understanding the needs and expectations of our customers. 
        Our work is done with no exceptions, and it shows in the final outcome. Every project is handled equally, whether it involves industrial buildings, residential structures, or commercial and retail fit-outs. 
        Experienced project managers, licensed electricians, and office-based support staff guarantee the effective completion of your contract. 
        Our consumers' faith and trust in using our services has contributed to our success. We are committed to delivering high-quality services on time and under budget, keeping everyone safe, 
        and working together with all parties.
        A focus on quality control and customer service means that a significant amount of our business originates from clients who frequently use our services.
      </div>
    </div>
  </div>

  <div className='mt-[20px]'>
    <Footer />
  </div>
</section>

  );
}
