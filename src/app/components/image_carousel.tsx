'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import solarpanelImg from '../assets/solarpanel.png';
import electricalsImg from '../assets/electricals.png';
import switchboardImg from '../assets/switchboard.png';
import avrImg from '../assets/AVR.png';

const images = [solarpanelImg, electricalsImg, switchboardImg, avrImg];

export default function TailwindCarousel() {
  const [current, setCurrent] = useState(1); // Start from real first slide
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalSlides = images.length;

  // Clone slides: last | real slides | first
  const slides = [
    images[images.length - 1],
    ...images,
    images[0]
  ];

  const goToSlide = (index: number, smooth = true) => {
    const container = carouselRef.current;
    if (!container) return;
    const slideWidth = container.clientWidth;
    container.scrollTo({
      left: index * slideWidth,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  const nextSlide = () => setCurrent(prev => prev + 1);
  const prevSlide = () => setCurrent(prev => prev - 1);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Smooth looping
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    goToSlide(current);

    const timeout = setTimeout(() => {
      if (current === totalSlides + 1) {
        setCurrent(1);
        goToSlide(1, false);
      } else if (current === 0) {
        setCurrent(totalSlides);
        goToSlide(totalSlides, false);
      }
    }, 500); // Wait for transition to finish

    return () => clearTimeout(timeout);
  }, [current]);

  // Sync scroll position with state (for swipe)
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
      {/* Slide container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {slides.map((img, index) => (
          <div
            key={index}
            className="min-w-full h-[150px] flex justify-center items-center snap-center"
          >
            <Image
              src={img}
              alt={`Slide ${index}`}
              width={350}
              height={150}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-white px-3 py-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 z-10"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-white px-3 py-1 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 z-10"
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
}
