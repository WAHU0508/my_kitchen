'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@//assets/logo.png'
import twitter from '@//svgs/twitter.svg'
import facebook from '@//svgs/facebook.svg';
import instagram from '@//svgs/instagram.svg';
import linkedin from '@//svgs/linkedin.svg';

export default function Footer() {
    const [formData, setFormData] = useState<FormData>({ first_name: '', last_name: '',  email: '', message: '' });
    const [status, setStatus] = useState<string>('');

  interface FormData {
        first_name: string;
        last_name: string;
        email: string;
        message: string;
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await res.json();
            setStatus(data.success ? 'Message sent!' : 'Failed to send message.');
            // Clear status message after 3 seconds
            setTimeout(() => {
                setStatus(''); // Reset the status after 3 seconds
            }, 5000);
        } catch {
            setStatus('Something went wrong.');
        }
    };

    return (
        <footer className='w-full flex flex-col items-center justify-center bg-[#F8F8F8] text-black'>
            {/* Footer for large and medium screens*/}
            <div className='hidden w-full md:flex md:flex-row justify-between md:px-[2%] lg:px-[10%] mt-[50px]'>
                <div className='flex flex-col w-full md:w-[50%] '>
                    <Image
                        src={logo}
                        alt='Alver power Logo'
                        width={150} 
                        height={45}
                        className=''
                    />
                    <div className='w-full grid grid-cols-2 mt-[50px] space-x-4 space-y-6'>
                        <Link href='/about_us' className='text-[16px] hover:underline active:text-[#9b3705]'>About</Link>
                        <div className='flex flex-row gap-2'>
                            <p className='text-[16px]'>Tel:</p>
                            <a href="tel:0116004003" className="text-[16px] text-black hover:text-[#282565] hover:underline active:text-[#9b3705]">
                                0116004003
                            </a>
                        </div>
                        <Link href='/products_and_services' className='text-[16px] hover:underline active:text-[#9b3705]'>Products | Services</Link>
                        <div className='flex flex-col text-[16px]'>
                            <p>Email:</p>
                            <a href="mailto:info@alverpower.com" className="text-black hover:text-[#282565] hover:underline active:text-[#9b3705]">
                            info@alverpower.com
                            </a>
                        </div>
                        <Link href='/contact_us' className='text-[16px] hover:underline active:text-[#9b3705]'>Contact Us</Link>
                        <p className='text-[16px]'>Garden Estate rd, off Thika Road</p>
                    </div>
                </div>

                <div className='flex flex-col w-full md:w-[50%]'>
                    <h1 className='font-semibold text-[24px]'>Contact Us</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <div className='flex flex-row gap-2'>
                            <div className='w-[50%] flex flex-col'>
                                <label>First name*</label>
                                    <input
                                        type='text'
                                        name='first_name'
                                        onChange={handleChange}
                                        className='w-full border-b border-black px-2 py-2 rounded-md'
                                        required
                                    />
                            </div>
                            <div className='w-[50%] flex flex-col'>
                                <label>Last name</label>
                                    <input
                                        type='text'
                                        name='last_name'
                                        onChange={handleChange}
                                        className='w-full border-b border-black px-2 py-2 rounded-md'
                                    />
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>Email*</label>
                                <input
                                    type='text'
                                    name='email'
                                    onChange={handleChange}
                                    className='w-full border-b border-black px-2 py-2 rounded-md'
                                    required
                                />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>Write your message *</label>
                                <textarea
                                    rows={5}
                                    name='message'
                                    onChange={handleChange}
                                    className="w-full p-3 border-b border-black rounded-md"
                                    required
                                />
                        </div>
                        <button type='submit' className='text-white bg-black px-4 py-2 rounded-[30px] mt-[20px] max-w-max'>Submit</button>
                        {status && (
                            <p className={`mt-2 text-left text-[16px] 
                                ${status === 'Sending...' ? 'text-black' : ''} 
                                ${status === 'Message sent!' ? 'text-green-500' : ''} 
                                ${status === 'Failed to send message.' ? 'text-red-500' : ''}`}>
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
            
            {/* Small Screens */}
            <div className='md:hidden flex flex-col items-center justify-center mt-[20px] px-4'>
               <Image
                        src={logo}
                        alt='Alver power Logo'
                        width={150} 
                        height={45}
                        className=''
                /> 
                <div className='flex flex-col w-full'>
                    <h1 className='font-semibold text-[24px]'>Contact Us</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <div className='flex flex-row gap-2'>
                            <div className='w-[50%] flex flex-col'>
                                <label>First name*</label>
                                    <input
                                        type='text'
                                        name='first_name'
                                        onChange={handleChange}
                                        className='w-full border-b border-black px-2 py-2 rounded-md'
                                        required
                                    />
                            </div>
                            <div className='w-[50%] flex flex-col'>
                                <label>Last name</label>
                                    <input
                                        type='text'
                                        name='last_name'
                                        onChange={handleChange}
                                        className='w-full border-b border-black px-2 py-2 rounded-md'
                                    />
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>Email*</label>
                                <input
                                    type='text'
                                    name='email'
                                    onChange={handleChange}
                                    className='w-full border-b border-black px-2 py-2 rounded-md'
                                    required
                                />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>Write your message *</label>
                                <textarea
                                    rows={5}
                                    name='message'
                                    onChange={handleChange}
                                    className="w-full p-3 border-b border-black rounded-md"
                                    required
                                />
                        </div>
                        <button type='submit' className='text-white bg-black px-8 py-2 rounded-[30px] mt-[20px] max-w-max'>Submit</button>
                        {status && (
                            <p className={`mt-2 text-left text-[16px] 
                                ${status === 'Sending...' ? 'text-black' : ''} 
                                ${status === 'Message sent!' ? 'text-green-500' : ''} 
                                ${status === 'Failed to send message.' ? 'text-red-500' : ''}`}>
                                {status}
                            </p>
                        )}
                    </form>
                </div>
                <div className='w-full grid grid-cols-2 mt-[50px] space-x-2 space-y-6'>
                        <Link href='/about_us' className='text-[14px] hover:underline active:text-[#9b3705]'>About</Link>
                        <div className='flex flex-row gap-2'>
                            <p className='text-[14px]'>Tel:</p>
                            <a href="tel:0116004003" className="text-[14px] text-black hover:text-[#282565] hover:underline active:text-[#9b3705]">
                                0116004003
                            </a>
                        </div>
                        <Link href='/products_and_services' className='text-[14px] hover:underline active:text-[#9b3705]'>Products | Services</Link>
                        <div className='flex flex-col text-[14px]'>
                            <p>Email:</p>
                            <a href="mailto:info@alverpower.com" className="text-sm text-black hover:text-[#282565] hover:underline active:text-[#9b3705]">
                            info@alverpower.com
                            </a>
                        </div>
                        <Link href='/contact_us' className='text-[14px] hover:underline active:text-[#9b3705]'>Contact Us</Link>
                        <p className='text-[14px]'>Garden Estate rd, off Thika Road</p>
                </div>
            </div>
            
            {/* All rights */}
            <div className='w-full  md:px-[5%] md:py-[30px] lg:px-[10%] flex flex-col md:flex-row items-center justify-center md:justify-between'>
                <p className='md:w-full'>&copy; 2022 by Alver Power Systems Ltd.</p>
                <div className='flex flex-row w-full items-center justify-center md:items-center md:justify-end gap-2 md:gap-4  mt-[20px] md:mt-0'>
                    <a
                        href="https://x.com/AlverPower?t=sFrlL2lI0IN8B6d5m7gDgQ&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={twitter}
                            alt='Twitter Icon'
                            width={20}
                            height={20}
                            className='hover:border hover:border-black hover:rounded-full hover:p-1'
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/Alver?utm_source=qr&igsh=NzgzcDdzNTFrczV4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={facebook}
                            alt='Facebook Icon'
                            width={20}
                            height={20}
                            className='hover:border hover:border-black hover:rounded-full hover:p-1'
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/alverpower?utm_source=qr&igsh=NzgzcDdzNTFrczV4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={instagram}
                            alt='Instagram Icon'
                            width={20}
                            height={20}
                            className='hover:border hover:border-black hover:rounded-full hover:p-1'
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/alver-power-systems"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={linkedin}
                            alt='Linkedin Icon'
                            width={20}
                            height={20}
                            className='hover:border hover:border-black hover:rounded-full hover:p-1'
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}
