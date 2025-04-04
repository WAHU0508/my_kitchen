'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo2.jpg';
import { Menu } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <header className='w-full mb-4 flex items-center justify-center'>
            {/* Header for large and medium screens*/}
            <div className='hidden border border-[#0000003D] lg:flex lg:flex-row md:flex md:fex-row items-center justify-between px-10 lg:w-[1250px] md:w-full lg:h-[50px] md:h-[50px] shadow-xl rounded-[20px]'>
                <Image
                    src={logo}
                    width={150}
                    height={45}
                    alt='Alver Power Systems logo'
                    className='w-[150px] h-[48px]'
                />
                <div className='flex flex-row gap-6 text-[15px] text-black items-center justify-center'>
                    <p className='hover:text-[#252865] hover:underline cursor-pointer'>Home</p>
                    <p className='hover:text-[#252865] hover:underline cursor-pointer'>About Us</p>
                    <p className='hover:text-[#252865] hover:underline cursor-pointer'>Products & Service <span className='text-center'>&#8964;</span></p>
                    <p className='hover:text-[#252865] hover:underline cursor-pointer'>Contact Us</p>
                </div>
            </div>
            {/* Header for small screens */}
            <div className='lg:hidden md:hidden flex flex-row w-full items-center gap-2 ml-2'>
                <button onClick={() => setIsOpen(true)}>
                  <Menu size={31} />
                </button>
                <div className='border border-[#0000003D] flex items-center justify-center shadow-xl rounded-[10px] w-full h-[40px]'>
                    <Image
                        src={logo}
                        width={120}
                        height={38}
                        alt='Alver Power Systems logo'
                        className='w-[120px] h-[38px]'
                    />
                </div>
                
                {/* Side Modal */}
                  {isOpen && (
                    <div className="fixed inset-0 z-50 flex">
                      {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black opacity-40"
                        onClick={() => setIsOpen(false)}
                    ></div>
                {/* Modal */}
                  <div className="relative bg-white w-[262px] h-auto shadow-xl z-50 p-4 transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">Menu</h2>
                      <button onClick={() => setIsOpen(false)}>
{/*                         <X size={24} /> */}
                      </button>
                    </div>
        
                    {/* Your menu content goes here */}
                    <ul className="space-y-4">
                      <li><a href="#" className="text-blue-600 hover:underline">Home</a></li>
                      <li><a href="#" className="text-blue-600 hover:underline">About</a></li>
                      <li><a href="#" className="text-blue-600 hover:underline">Services</a></li>
                      <li><a href="#" className="text-blue-600 hover:underline">Contact</a></li>
                    </ul>
            </div>
        </header>
    );
}
