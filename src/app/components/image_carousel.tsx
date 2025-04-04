'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import solarpanelImg from '../assets/solarpanel.jpg';
import electricalsImg from '../assets/electricals.jpg';
import switchboardImg from '../assets/switchboard.jpg';
import avrImg from '../assets/avr.jpg';

const images = [solarpanelImg, electricalsImg, switchboardImg, avrImg];

export default function TailwindCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="min-w-full h-[150px] flex justify-center items-center">
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
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-75 z-10"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-75 z-10"
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
}
