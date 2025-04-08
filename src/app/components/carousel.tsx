'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import solarpanelImg from '../assets/blue-solar-panels.jpg';
import electricalsImg from '../assets/sivacon.jpg';
import switchboardImg from '../assets/blockset.jpg';
// import avrImg from '../assets/AVR.png';

const images = [solarpanelImg, electricalsImg, switchboardImg];

export default function TailwindCarousel() {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    if (!carouselRef.current) return;
    const slideWidth = carouselRef.current.clientWidth;
    carouselRef.current.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth',
    });
  };

  const nextSlide = () => {
    const newIndex = (current + 1) % images.length;
    setCurrent(newIndex);
    goToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (current - 1 + images.length) % images.length;
    setCurrent(newIndex);
    goToSlide(newIndex);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5s

    return () => clearInterval(interval);
  }, [current]);

  // Sync scroll with slide index
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setCurrent(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg">
      {/* Slide Container - scrollable and snap-enabled */}
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
              width={1440}
              height={600}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-white px-3 py-1 rounded-full hover:bg-opacity-75 z-10"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-white px-3 py-1 rounded-full hover:bg-opacity-75 z-10"
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
}
