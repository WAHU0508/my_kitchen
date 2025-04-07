import React from 'react';
import Image from 'next/image';
import coverImg from '../assets/sivacon.jpg';
import Header from '../components/header';
import Footer from '../components/footer';

export default function AboutUsPage() {
  return (
    <section className="relative w-full flex flex-col items-center">

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
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-center">
      <p className="text-white font-semibold text-[32px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
        Driven by Excellence, Energized by Trust.
      </p>
    </div>
  </div>

  {/* Main content */}
  <div className="max-w-[1300px] px-6 md:px-[100px] flex flex-col mt-10">
    <div className="text-black text-[24px] mb-4">Our journey</div>
    <div className="flex flex-row items-start gap-6">
      <div className="w-[10px] h-[50px] bg-[#FF0105]"></div>
      <div className="text-black text-[16px]">
        {/* Long text here */}
      </div>
    </div>
  </div>

  <Footer />
</section>

  );
}
