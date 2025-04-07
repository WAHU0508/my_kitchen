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

    </section>
  );
}
