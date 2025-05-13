'use client';
import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image';
import { Menu } from 'lucide-react';
import logo from '@//assets/logo.png';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle visibility on inactivity
  useEffect(() => {
    const resetTimer = () => {
      if (!visible) setVisible(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 3000); // 3 seconds of inactivity
    };

    const events = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    events.forEach(event => window.addEventListener(event, resetTimer));

    resetTimer(); // Start the timer on mount

    return () => {
      events.forEach(event => window.removeEventListener(event, resetTimer));
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [visible]);

  return (
    <header className={`w-full flex items-center justify-center transition-all duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Header for large and medium screens */}
      <div
        className={`hidden w-full md:flex md:flex-row items-center justify-between lg:px-8 py-2 sticky top-0 z-50 transition-all duration-500 ease-in-out 
          ${isScrolled ? 'bg-black/60 text-white' : ''} 
          ${pathname === '/about_us' ? 'text-black' : 'text-white'}`}
      >
        <Image src={logo} alt="Alver Power Logo" width={150} height={45} />
        <nav className="flex flex-row md:gap-4 lg:gap-6 items-center">
          <Link
            href='/'
            className={`text-white md:text-[12px] lg:text-[16px] xl:text-[16px] hover:text-[#C45308] cursor-pointer transition-colors duration-300 ${pathname === '/' ? 'text-[#C45308] border-b-4 border-[#C45308]' : 'text-white'}`}
          >
            Home
          </Link>
          <Link
            href='/about_us'
            className={`text-white md:text-[12px] lg:text-[16px] xl:text-[16px] hover:text-[#C45308] cursor-pointer transition-colors duration-300 ${pathname === '/about_us' ? 'text-[#C45308] border-b-4 border-[#C45308]' : 'text-white'}`}
          >
            About Us
          </Link>
          <Link
            href='/products_and_services'
            className={`text-white md:text-[12px] lg:text-[16px] xl:text-[16px] hover:text-[#C45308] cursor-pointer transition-colors duration-300 ${pathname === '/products_and_services' ? 'text-[#C45308] border-b-4 border-[#C45308]' : 'text-white'}`}
          >
            Products & Services
          </Link>
          <Link
            href='/contact_us'
            className={`text-white md:text-[12px] lg:text-[16px] xl:text-[16px] hover:text-[#C45308] cursor-pointer transition-colors duration-300 ${pathname === '/contact_us' ? 'text-[#C45308] border-b-4 border-[#C45308]' : 'text-white'}`}
          >
            Contact Us
          </Link>
          {/* <button className={`${isScrolled? 'bg-black text-white' : 'bg-white text-black'} px-2 py-1 hover:bg-white hover:text-black transition-all duration-300`}>
            Get Quote
          </button> */}
        </nav>
      </div>

      {/* header for smaller screens */}
      <div className={`lg:hidden md:hidden flex flex-row w-full items-center justify-between ${isScrolled? 'bg-black/60' : ''} px-2`}>
        <div className='flex items-center justify-center w-full'>
            <Image
                src={logo}
                width={120}
                height={38}
                alt='Alver Power Systems logo'
                className='w-[120px] h-[38px]'
            />
        </div>
        <button>
            <Menu size={31} color='white'/>
        </button>
      </div>
    </header>
  );
}
