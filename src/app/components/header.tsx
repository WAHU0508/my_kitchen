'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo2.jpg';
import { Menu, Clock } from 'lucide-react';
import mapPin from "../svgs/mapPin.svg"
import twitter from '../svgs/twitter.svg'
import facebook from '../svgs/facebook.svg';
import instagram from '../svgs/instagram.svg';
import linkedin from '../svgs/linkedin.svg';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    
    return (
        <header className='w-full mb-4 flex items-center justify-center'>
            {/* Header for large and medium screens */}
            <div className='hidden border border-[#0000003D] bg-[#FFFFFF] lg:flex lg:flex-row md:flex md:flex-row items-center justify-between px-10 lg:w-[1250px] md:w-full lg:h-[50px] md:h-[50px] shadow-xl rounded-[20px]'>
                <Image
                    src={logo}
                    width={150}
                    height={45}
                    alt='Alver Power Systems logo'
                    className='w-[150px] h-[48px]'
                />
                <div className='flex flex-row gap-6 text-[15px] text-black items-center justify-center'>
                    <Link
                          href="/"
                          className={`cursor-pointer hover:text-[#252865] hover:underline ${
                            pathname === '/' ? 'text-red-600 underline' : 'text-black'
                          }`}
                        >
                          Home
                    </Link>
                    <Link
                          href="/about_us"
                          className={`cursor-pointer hover:text-[#252865] hover:underline ${
                            pathname === '/about_us' ? 'text-red-600 underline' : 'text-black'
                          }`}
                        >
                          About Us
                    </Link>
                    <Link
                          href="/products_and_services"
                          className={`cursor-pointer hover:text-[#252865] hover:underline ${
                            pathname === '/products_and_services' ? 'text-red-600 underline' : 'text-black'
                          }`}
                        >
                          Products & Services
                    </Link>
                    <Link
                          href="/contact_us"
                          className={`cursor-pointer hover:text-[#252865] hover:underline ${
                            pathname === '/contact_us' ? 'text-red-600 underline' : 'text-black'
                          }`}
                        >
                          Contact Us
                    </Link>
                </div>
            </div>

            {/* Header for small screens */}
            <div className='lg:hidden md:hidden flex flex-row w-full items-center gap-2 ml-2 bg-[#FFFFFF] '>
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
                        className={`fixed left-0 top-0 h-full w-[262px] flex flex-col items-center justify-between bg-white shadow-xl z-50 transition-transform duration-300 transform ${
                            isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                    >
                        <div className='flex flex-col items-center'>
                            <Image
                                src={logo}
                                width={120}
                                height={38}
                                alt='Alver Power Systems logo'
                                className='w-[120px] h-[38px] mt-[22px] mb-[20px]'
                            />
                            <ul className="space-y-[20px]">
                                <li><Link
                                        href="/"
                                        className={`border-b border-black/10 flex items-center justify-center w-[146px] h-[22px] text-[12px] ${
                                          pathname === '/' ? 'text-red-600' : 'text-black'
                                        }`}>
                                        Home
                                    </Link>
                                </li>
                                <li><Link
                                        href="/about_us"
                                        className={`border-b border-black/10 flex items-center justify-center w-[146px] h-[22px] text-[12px] ${
                                          pathname === '/about_us' ? 'text-red-600' : 'text-black'
                                        }`}>
                                        About Us
                                    </Link>
                                </li>
                                <li><Link
                                        href="/products_and_services"
                                        className={`border-b border-black/10 flex items-center justify-center w-[146px] h-[22px] text-[12px] ${
                                          pathname === '/products_and_services' ? 'text-red-600' : 'text-black'
                                        }`}>
                                        Products & Services
                                    </Link>
                                </li>
                                <li><Link
                                        href="/contact_us"
                                        className={`border-b border-black/10 flex items-center justify-center w-[146px] h-[22px] text-[12px] ${
                                          pathname === '/contact_us' ? 'text-red-600' : 'text-black'
                                        }`}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Footer section */}
                        <div className='flex flex-col items-center justify-between w-full h-[384px] text-white bg-[#252865] py-2'>
                            {/* Operating Hours Section */}
                            <div className='w-[193px] h-[108px] flex flex-col items-center justify-between'>
                                <Clock size={24} className='text-white'/>
                                <p className='text-[12px] text-center'>Monday - Friday</p>
                                <p className='text-[12px] text-center'>8 AM - 1PM (Saturday 8AM - 1PM)</p>
                            </div>
                            
                            {/* Location section */}
                            <div className='w-[232px] h-[72px] flex flex-col items-center justify-between'>
                                <Image
                                    src={mapPin}
                                    width={24}
                                    height={24}
                                    alt='Map Pin'
                                />
                                <p className='text-[12px] text-center'>Garden estate, along Garden estate rd Nairobi, Kenya</p>
                            </div>
                            
                            {/* Social Media section */}
                            <div className='w-[186px] h-[69px] flex flex-col items-center justify-between'>
                                <p className='text-[12px] text-center'>Visit Us on</p>
                                <div className='flex flex-row w-full items-center justify-between'>
                                    <Image
                                        src={twitter}
                                        alt='Twitter Icon'
                                        width={23}
                                        height={23}
                                        className='hover:border hover:border-white hover:rounded-full hover:p-1'
                                    />
                                    <Image
                                        src={facebook}
                                        alt='Facebook Icon'
                                        width={23}
                                        height={23}
                                        className='hover:border hover:border-white hover:rounded-full hover:p-1'
                                    />
                                    <Image
                                        src={instagram}
                                        alt='Instagram Icon'
                                        width={23}
                                        height={23}
                                        className='hover:border hover:border-white hover:rounded-full hover:p-1'
                                    />
                                    <Image
                                        src={linkedin}
                                        alt='Linkedin Icon'
                                        width={23}
                                        height={23}
                                        className='hover:border hover:border-white hover:rounded-full hover:p-1'
                                    />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
            )}
        </header>
    );
}
