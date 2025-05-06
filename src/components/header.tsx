'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import logo from '@//assets/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full flex items-center justify-center">
      {/* Header for large and medium screens */}
      <div
        className={`hidden w-full transition-all duration-500 ease-in-out md:flex md:flex-row items-center justify-between text-white px-8 py-2 ${
          isScrolled ? 'bg-white' : 'bg-black/60'
        } transition-all duration-300 sticky top-0 z-50`}
      >
        <Image src={logo} alt="Alver Power Logo" width={150} height={45} />
        <nav className="flex flex-row gap-6 items-center">
          <p
            className={`${
              isScrolled ? 'text-black' : 'text-white'
            } text-[18px] hover:text-[#C45308] cursor-pointer transition-colors duration-300`}
          >
            Home
          </p>
          <p
            className={`${
              isScrolled ? 'text-black' : 'text-white'
            } text-[18px] hover:text-[#C45308] cursor-pointer transition-colors duration-300`}
          >
            About
          </p>
          <p
            className={`${
              isScrolled ? 'text-black' : 'text-white'
            } text-[18px] hover:text-[#C45308] cursor-pointer transition-colors duration-300`}
          >
            Products & Services
          </p>
          <p
            className={`${
              isScrolled ? 'text-black' : 'text-white'
            } text-[18px] hover:text-[#C45308] cursor-pointer transition-colors duration-300`}
          >
            Contact Us
          </p>
          <button className={`${isScrolled? 'bg-black text-white' : 'bg-white text-black'} px-2 py-1 hover:bg-white hover:text-black transition-all duration-300`}>
            Get Quote
          </button>
        </nav>
      </div>

      {/* header for smaller screens */}
      <div className='lg:hidden md:hidden flex flex-row w-full items-center gap-2 mt-2 ml-2 mr-[20px]'>
        <div className='border border-[#0000003D] bg-[#FFFFFF] flex items-center justify-center shadow-xl rounded-[10px] w-full h-[40px]'>
            <Image
                src={logo}
                width={120}
                height={38}
                alt='Alver Power Systems logo'
                className='w-[120px] h-[38px]'
            />
        </div>
        <button onClick={() => setIsOpen(true)}>
            <Menu size={31} color='white'/>
        </button>
      </div>
    </header>
  );
}
