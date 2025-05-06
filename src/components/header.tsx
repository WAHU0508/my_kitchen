'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import logo from '@//assets/logo.png'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className='w-full flex items-center justify-center'>
            {/* Header for large and medium screens */}
            <div className={`hidden w-full md:flex md:flex-row items-center justify-between text-white px-4 py-2 ${isScrolled? 'bg-white' : 'bg-black/60' }`}>
              <Image
                src={logo}
                alt='Alver Power Logo'
                width={150}
                height={45}
              />
              <nav className='flex flex-row gap-6 items-center'>
                <p className={`${isScrolled? 'text-black' : 'text-white'} text-[18px] hover:text-[#C45308] cursor-pointer`}>Home</p>
                <p className={`${isScrolled? 'text-black' : 'text-white'} text-[18px] hover:text-[#C45308] cursor-pointer`}>About</p>
                <p className={`${isScrolled? 'text-black' : 'text-white'} text-[18px] hover:text-[#C45308] cursor-pointer`}>Products & Services</p>
                <p className={`${isScrolled? 'text-black' : 'text-white'} text-[18px] hover:text-[#C45308] cursor-pointer`}>Contact Us</p>
                <button className='bg-black text-white px-2 py-1 hover:bg-white hover:text-black'>Get Quote</button>
              </nav>
            </div>
        </header>
    );
}
