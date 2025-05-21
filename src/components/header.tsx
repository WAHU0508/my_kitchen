'use client';
import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image';
import { Menu } from 'lucide-react';
import logo from '@//assets/logo.png';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
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

   // Disable scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.position = 'static';
        }
    }, [isOpen]);

  return (
    <header className={`hover:bg-white hover:text-black w-full relative flex items-center justify-center transition-all duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Header for large and medium screens */}
      <div
        className={`hidden w-full md:flex md:flex-row items-center justify-between lg:px-8 py-2 sticky top-0 z-50 transition-all duration-500 ease-in-out 
          ${isScrolled ? 'bg-black/60 text-white' : ''} 
          ${pathname === '/about_us' ? 'text-black' : 'text-white'}`}
      >
        <Image src={logo} alt="Alver Power Logo" width={150} height={45} />
        <nav className="flex flex-row md:gap-4 lg:gap-6 items-center">
            <Link
              href="/"
              className={`md:text-[12px] lg:text-[16px] xl:text-[16px] hover:text-[#C45308] cursor-pointer transition-colors duration-300 ${
                pathname === '/' ? 'text-[#C45308] border-b-4 border-[#C45308]' : ''
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Home
            </Link>

          <Link
            href='/about_us'
            className={`md:text-[12px] lg:text-[16px] xl:text-[16px] hover:text-[#C45308] cursor-pointer transition-colors duration-300 ${pathname === '/about_us' ? 'text-[#C45308] border-b-4 border-[#C45308]' : ''}`}
          >
            About Us
          </Link>
          <Link
            href='/products_and_services'
            className={`md:text-[12px] lg:text-[16px] xl:text-[16px] hover:text-[#C45308] cursor-pointer transition-colors duration-300 ${pathname === '/products_and_services' ? 'text-[#C45308] border-b-4 border-[#C45308]' : ''}`}
          >
            Products & Services
          </Link>
          <Link
            href='/contact_us'
            className={`md:text-[12px] lg:text-[16px] xl:text-[16px] hover:text-[#C45308] cursor-pointer transition-colors duration-300 ${pathname === '/contact_us' ? 'text-[#C45308] border-b-4 border-[#C45308]' : ''}`}
          >
            Contact Us
          </Link>
          {/* <button className={`${isScrolled? 'bg-black text-white' : 'bg-white text-black'} px-2 py-1 hover:bg-white hover:text-black transition-all duration-300`}>
            Get Quote
          </button> */}
        </nav>
      </div>

      <div className={`absolute top-full w-[98%] bg-white text-black py-10 shadow-xl z-50 ${isHovered ? 'flex' : 'hidden'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      >
        <div className="mx-auto w-full max-w-[1200px] px-8 flex justify-between">
          <Link href="/overview" className="text-sm hover:text-[#C45308]">Overview</Link>
          {/* Add more items if needed */}
        </div>
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
        <button onClick={() => setIsOpen(true)}>
            <Menu size={31} color='white'/>
        </button>
      </div>

      {/* Modal and Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black opacity-40 transition-opacity duration-300"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Modal with slide-in animation */}
                    <div
                        className={`overflow-x-auto fixed right-0 top-0 h-screen w-[270px] flex flex-col items-center bg-white shadow-xl z-50 transition-transform duration-300 transform ${
                            isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                        style={{ touchAction: 'none' }}
                    >
                        <div className='flex flex-col items-center'>
                            <Image
                                src={logo}
                                width={120}
                                height={38}
                                alt='Alver Power Systems logo'
                                className='w-[120px] h-[38px] mt-[22px] mb-[50px]'
                            />
                            <ul className="space-y-[50px]">
                                <li><Link
                                        href="/"
                                        className={`border-b border-black/10 flex items-center justify-center w-[146px] h-[22px] text-[12px] ${
                                          pathname === '/' ? 'text-red-600' : 'text-black'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                        >
                                        Home
                                    </Link>
                                </li>
                                <li><Link
                                        href="/about_us"
                                        className={`border-b border-black/10 flex items-center justify-center w-[146px] h-[22px] text-[12px] ${
                                          pathname === '/about_us' ? 'text-red-600' : 'text-black'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                        >
                                        About Us
                                    </Link>
                                </li>
                                <li className="border-b border-black/10 flex flex-row items-center justify-center w-full">
                                      <Link
                                        href="/products_and_services"
                                        className={`flex items-center justify-start w-[146px] h-[22px] text-[12px] ${
                                          pathname === '/products_and_services' ? 'text-red-600' : 'text-black'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                      >
                                        Products & Services
                                      </Link>
                                    
                                      {/* Plus/Minus button */}
                                      <button
                                        className="text-[16px] text-black ml-2"
                                        onClick={(e) => {
                                          e.preventDefault(); // prevent Link click
                                          setIsExpanded(!isExpanded);
                                        }}
                                      >
                                        {isExpanded ? '−' : '+'}
                                      </button>
                                    </li>
                                {isExpanded && (
                                  <ul className="pl-4 mt-2 space-y-2 text-[12px]">
                                    <li>
                                      <Link href="/products_and_services/solar_solutions" className="border-b border-black/10 p-1 flex items-center justify-center text-gray-700 hover:text-red-500">
                                        Solar Solutions
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/products_and_services/switchboard_manufacturing" className="border-b border-black/10 p-1 flex items-center justify-center text-gray-700 hover:text-red-500">
                                        Switchboard Manufacturing
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/products_and_services/CNC" className="border-b border-black/10 p-1 flex items-center justify-center text-gray-700 hover:text-red-500">
                                        CNC
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/products_and_services/electrical_installation" className="border-b border-black/10 p-1 flex items-center justify-center text-gray-700 hover:text-red-500">
                                        Electrical Installation
                                      </Link>
                                    </li>
                                  </ul>
                                )}

                                <li><Link
                                        href="/contact_us"
                                        className={`border-b border-black/10 flex items-center justify-center w-[146px] h-[22px] text-[12px] ${
                                          pathname === '/contact_us' ? 'text-red-600' : 'text-black'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                        >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
            )}
    </header>
  );
}
