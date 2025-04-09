"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // Optional if you're using Next.js

import solarpanelImg from '../assets/blue-photovoltaic-solar-panels.jpg';
import electricalsImg from '../assets/sivacon.jpg';
// import switchboardImg from '../assets/BlokSeT.jpg';

const images = [solarpanelImg, electricalsImg];

export default function TailwindCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Previous button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-opacity-50 transition"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2  text-white p-2 rounded-full hover:bg-opacity-50 transition"
      >
        ›
      </button>
    </div>
  );
}
