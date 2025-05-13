import React from 'react'
import Image from 'next/image'
import logo from '@//assets/logo.png'

export default function Footer() {
    return (
        <footer className='w-full flex items-center justify-center bg-[#F8F8F8] text-black'>
            {/* Footer for large and medium screens*/}
            <div className='hidden w-full md:flex md:flex-row justify-between md:px-[5%] lg:px-[10%] mt-[50px]'>
                <div className='flex flex-col w-full md:w-[50%] '>
                    <Image
                        src={logo}
                        alt='Alver power Logo'
                        width={150} 
                        height={45}
                        className=''
                    />
                    <div className='w-full grid grid-cols-2 space-x-4 space-y-6'>
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
                    <h1>Contact Us</h1>
                    <form className='flex flex-col'>
                        <div className='flex flex-row gap-2'>
                            <div className='w-[50%] flex flex-col'>
                                <label>First name*</label>
                                    <input
                                        type='text'
                                        className='w-full border border-black px-2 py-2 rounded-md'
                                        required
                                    />
                            </div>
                            <div className='w-[50%] flex flex-col'>
                                <label>Last name</label>
                                    <input
                                        type='text'
                                        className='w-full border border-black px-2 py-2 rounded-md'
                                    />
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>Email*</label>
                                <input
                                    type='text'
                                    className='w-full border border-black px-2 py-2 rounded-md'
                                    required
                                />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>Email*</label>
                                <textarea
                                    placeholder="Your Message"
                                    rows={5}
                                    className="w-full p-3 border border-black rounded-md"
                                    required
                                />
                        </div>
                        <button className='text-white bg-black px-2 py-2 rounded-[5px]'>Submit</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}
