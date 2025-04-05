'use client';

import Image from 'next/image';
import { useRef } from 'react';
import solarpanelImg from '../assets/solarpanel.png';
import electricalsImg from '../assets/electricals.png';
import switchboardImg from '../assets/switchboard.png';
import avrImg from '../assets/AVR.png';

const images = [solarpanelImg, electricalsImg, switchboardImg, avrImg];

export default function TailwindCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (direction: 'prev' | 'next') => {
    const container = carouselRef.current;
    if (!container) return;

    const slideWidth = container.clientWidth;
    const scrollAmount = direction === 'next' ? slideWidth : -slideWidth;

    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg">
      {/* Touch Scrollable Slide Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-full h-[150px] flex justify-center items-center snap-center"
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              width={350}
              height={150}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={() => scrollToSlide('prev')}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-white px-3 py-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 z-10"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={() => scrollToSlide('next')}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-white px-3 py-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 z-10"
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
}
