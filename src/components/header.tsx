'use client';
import React from 'react';
import Image from 'next/image'
import logo from '@//assets/logo.png'

export default function Header() {

    return (
        <header className='w-full flex items-center justify-center'>
            {/* Header for large and medium screens */}
            <div className='hidden w-full md:flex md:flex-row items-center justify-between bg-black/60 text-white px-4 py-2'>
              <Image
                src={logo}
                alt='Alver Power Logo'
                width={150}
                height={45}
              />
              <nav className='flex flex-row gap-6 items-center'>
                <p>Home</p>
                <p>About</p>
                <p>Products & Services</p>
                <p>Contact Us</p>
              </nav>
            </div>
        </header>
    );
}
