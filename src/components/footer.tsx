import React from 'react'
import Image from 'next/image'
import logo from '@//assets/logo.png'

export default function Footer() {
    return (
        <footer className='w-full flex items-center justify-center bg-[#F8F8F8] text-black'>
            {/* Footer for large and medium screens*/}
            <div className='hidden w-full md:flex md:flex-row items-center justify-between px-[10%]'>
                <div className='flex flex-col w-full md:w-[50%] items-center justify-center'>
                    <Image
                        src={logo}
                        alt='Alver power Logo'
                        width={150} 
                        height={45}
                        className=''
                    />
                    <div className='w-full grid grid-cols-2 space-x-4'>
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
                <div className='flex flex-col w-full md:w-[50%] items-center justify-center'></div>
            </div>
        </footer>
    )
}
