'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo2.jpg';
import { Menu, Clock } from 'lucide-react';
import mapPin from "../svgs/mapPin2.svg"
import twitter from '../svgs/twitter.svg'
import facebook from '../svgs/facebook.svg';
import instagram from '../svgs/instagram.svg';
import linkedin from '../svgs/linkedin.svg';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

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
        <header className='w-full mb-4 flex items-center justify-center'>
            {/* Header for large and medium screens */}
            <div className='hidden border border-[#0000003D] bg-[#FFFFFF] lg:flex lg:flex-row md:flex md:flex-row items-center justify-between px-10 lg:w-[1250px] xl:w-full 2xl:w-full md:w-full lg:h-[50px] md:h-[50px] shadow-xl rounded-[5px]'>
                <Image
                    src={logo}
                    width={150}
                    height={45}
                    alt='Alver Power Systems logo'
                    className='w-[150px] h-[48px]'
                />
                <div className='flex flex-row gap-6 h-full text-[15px] text-black items-center justify-center'>
                    <Link
                          href="/"
                          className={`h-full flex items-center justify-center font-semibold cursor-pointer hover:text-[#252865] hover:border-b-4 hover:border-[#FF0105] ${
                            pathname === '/' ? 'text-[#FF0105] border-b-4 border-[#FF0105]' : 'text-black'
                          }`}
                        >
                          Home
                    </Link>
                    <Link
                          href="/about_us"
                          className={`h-full flex items-center justify-center font-semibold cursor-pointer hover:text-[#252865] hover:border-b-4 hover:border-[#FF0105] ${
                            pathname === '/about_us' ? 'text-[#FF0105] border-b-4 border-[#FF0105]' : 'text-black'
                          }`}
                        >
                          About Us
                    </Link>
                    <Link
                          href="/products_and_services"
                          className={`h-full flex items-center justify-center font-semibold cursor-pointer hover:text-[#252865] hover:border-b-4 hover:border-[#FF0105] ${
                            pathname === '/products_and_services' ? 'text-[#FF0105] border-b-4 border-[#FF0105]' : 'text-black'
                          }`}
                        >
                          Products & Services
                    </Link>
                    <Link
                          href="/contact_us"
                          className={`h-full flex items-center justify-center font-semibold cursor-pointer hover:text-[#252865] hover:border-b-4 hover:border-[#FF0105] ${
                            pathname === '/contact_us' ? 'text-[#FF0105] border-b-4 border-[#FF0105]' : 'text-black'
                          }`}
                        >
                          Contact Us
                    </Link>
                </div>
            </div>

            {/* Header for small screens */}
            <div className='lg:hidden md:hidden flex flex-row w-full items-center gap-2 ml-2 mr-[20px]'>
                <button onClick={() => setIsOpen(true)}>
                    <Menu size={31} color='black'/>
                </button>
                <div className='border border-[#0000003D] bg-[#FFFFFF] flex items-center justify-center shadow-xl rounded-[10px] w-full h-[40px]'>
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
                        className={`overflow-x-auto fixed left-0 top-0 h-screen w-[262px] flex flex-col items-center bg-white shadow-xl z-50 transition-transform duration-300 transform ${
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
                                className='w-[120px] h-[38px] mt-[22px] mb-[20px]'
                            />
                            <ul className="space-y-[20px]">
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
                                <li><Link
                                        href="/products_and_services"
                                        className={`border-b border-black/10 flex items-center justify-center w-[146px] h-[22px] text-[12px] ${
                                          pathname === '/products_and_services' ? 'text-red-600' : 'text-black'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                        >
                                        Products & Services
                                    </Link>
                                </li>
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
                        {/* Footer section */}
                        <div className='flex flex-col items-center gap-[40px] mt-[100px] w-full h-full text-black bg-[#F8F8F8] py-2'>
                            {/* Operating Hours Section */}
                            <div className='w-[193px] h-[100px] flex flex-col items-center justify-between'>
                                <Clock size={24} className='text-black'/>
                                <p className='text-[12px] text-center'>Monday - Friday</p>
                                <p className='text-[12px] text-center'>8 AM - 5PM (Saturday 8AM - 1PM)</p>
                            </div>
                            
                            {/* Location section */}
                            <div className='w-[232px] h-[100px] flex flex-col items-center justify-between'>
                                <Image
                                    src={mapPin}
                                    width={24}
                                    height={24}
                                    alt='Map Pin'
                                />
                                <p className='text-[12px] text-center'>Garden estate, along Garden estate rd Nairobi, Kenya</p>
                            </div>
                            
                            {/* Social Media section */}
                            <div className='w-[186px] h-[70px] flex flex-col items-center justify-between'>
                                <p className='text-[12px] text-center'>Visit Us on</p>
                                <div className='flex flex-row w-full items-center justify-between'>
                                    <Image
                                        src={twitter}
                                        alt='Twitter Icon'
                                        width={23}
                                        height={23}
                                        className='hover:border hover:border-black hover:rounded-full hover:p-1'
                                    />
                                    <Image
                                        src={facebook}
                                        alt='Facebook Icon'
                                        width={23}
                                        height={23}
                                        className='hover:border hover:border-black hover:rounded-full hover:p-1'
                                    />
                                    <Image
                                        src={instagram}
                                        alt='Instagram Icon'
                                        width={23}
                                        height={23}
                                        className='hover:border hover:border-black hover:rounded-full hover:p-1'
                                    />
                                    <Image
                                        src={linkedin}
                                        alt='Linkedin Icon'
                                        width={23}
                                        height={23}
                                        className='hover:border hover:border-black hover:rounded-full hover:p-1'
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
