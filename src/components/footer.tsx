import React from 'react'
import Image from 'next/image'
import logo from '@//assets/logo.png'
import twitter from '@//svgs/twitter.svg'
import facebook from '@//svgs/facebook.svg';
import instagram from '@//svgs/instagram.svg';
import linkedin from '@//svgs/linkedin.svg';

export default function Footer() {
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
                        <p className='text-[16px]'>About</p>
                        <p className='text-[16px]'>Tel: 0116004003</p>
                        <p className='text-[16px]'>Products | Services</p>
                        <div className='flex flex-col text-[16px]'>
                            <p>Email:</p>
                            <p>info@alverpower.com</p>
                        </div>
                        <p className='text-[16px]'>Contact Us</p>
                        <p className='text-[16px]'>Garden Estate rd, off Thika Road</p>
                    </div>
                </div>

                <div className='flex flex-col w-full md:w-[50%]'>
                    <h1 className='font-semibold text-[24px]'>Contact Us</h1>
                    <form className='flex flex-col'>
                        <div className='flex flex-row gap-2'>
                            <div className='w-[50%] flex flex-col'>
                                <label>First name*</label>
                                    <input
                                        type='text'
                                        className='w-full border-b border-black px-2 py-2 rounded-md'
                                        required
                                    />
                            </div>
                            <div className='w-[50%] flex flex-col'>
                                <label>Last name</label>
                                    <input
                                        type='text'
                                        className='w-full border-b border-black px-2 py-2 rounded-md'
                                    />
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>Email*</label>
                                <input
                                    type='text'
                                    className='w-full border-b border-black px-2 py-2 rounded-md'
                                    required
                                />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>Your Message *</label>
                                <textarea
                                    placeholder="Your Message"
                                    rows={5}
                                    className="w-full p-3 border-b border-black rounded-md"
                                    required
                                />
                        </div>
                        <button className='text-white bg-black px-4 py-2 rounded-[30px] mt-[20px] max-w-max'>Submit</button>
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
                    <form className='flex flex-col'>
                        <div className='flex flex-row gap-2'>
                            <div className='w-[50%] flex flex-col'>
                                <label>First name*</label>
                                    <input
                                        type='text'
                                        className='w-full border-b border-black px-2 py-2 rounded-md'
                                        required
                                    />
                            </div>
                            <div className='w-[50%] flex flex-col'>
                                <label>Last name</label>
                                    <input
                                        type='text'
                                        className='w-full border-b border-black px-2 py-2 rounded-md'
                                    />
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>Email*</label>
                                <input
                                    type='text'
                                    className='w-full border-b border-black px-2 py-2 rounded-md'
                                    required
                                />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>Write your message *</label>
                                <textarea
                                    rows={5}
                                    className="w-full p-3 border-b border-black rounded-md"
                                    required
                                />
                        </div>
                        <button className='text-white bg-black px-8 py-2 rounded-[30px] mt-[20px] max-w-max'>Submit</button>
                    </form>
                </div>
                <div className='w-full grid grid-cols-2 mt-[50px] space-x-2 space-y-6'>
                        <p className='text-[14px]'>About</p>
                        <p className='text-[14px]'>Tel: 0116004003</p>
                        <p className='text-[14px]'>Products | Services</p>
                        <div className='flex flex-col text-[14px]'>
                            <p>Email:</p>
                            <p>info@alverpower.com</p>
                        </div>
                        <p className='text-[14px]'>Contact Us</p>
                        <p className='text-[14px]'>Garden Estate rd, off Thika Road</p>
                </div>
            </div>

            <div className='w-full md:px-[5%] md:py-[30px] lg:px-[10%] flex flex-col md:flex-row md:items-center md:justify-between'>
                <p className='w-full'>&copy; 2022 by Alver Power Systems Ltd.</p>
                <div className='flex flex-row w-full md:items-center md:justify-end gap-2 md:gap-4  mt-[20px] md:mt-0'>
                    <a
                        href="https://x.com/AlverPower?t=sFrlL2lI0IN8B6d5m7gDgQ&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={twitter}
                            alt='Twitter Icon'
                            width={31}
                            height={31}
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
                            width={31}
                            height={31}
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
                            width={31}
                            height={31}
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
                            width={31}
                            height={31}
                            className='hover:border hover:border-black hover:rounded-full hover:p-1'
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}
