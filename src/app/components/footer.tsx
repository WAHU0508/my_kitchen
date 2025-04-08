import React from 'react'
import Image from 'next/image'
import { Clock } from "lucide-react"
import mapPin from "../svgs/mapPin2.svg"
import twitter from '../svgs/twitter.svg'
import facebook from '../svgs/facebook.svg';
import instagram from '../svgs/instagram.svg';
import linkedin from '../svgs/linkedin.svg';
import logo from '../svgs/logo.svg';
    

export default function Footer() {
    return (
        <footer className='w-full mb-4 flex items-center justify-center bg-[#F8F8F8]'>
            {/* Footer for large and medium screens*/}
            <div className='hidden lg:flex lg:flex-col text-black font-light mt-[20px] md:flex md:flex-col items-center justify-between lg:px-[60px] lg:w-[1440px] md:w-full lg:h-[215px] md:h-[215px] bg-[#F8F8F8]'>
                <div className='flex flex-row justify-between gap-[10px] lg:gap-[50px]'>
                    <div className='lg:w-[321px] lg:h-[137px] w-[250px] h-[137px] flex flex-col items-center justify-between'>
                        <Clock size={31} className='text-black'/>
                        <p className='text-[18px] text-center'>Monday - Friday</p>
                        <p className='text-[18px] text-center'>8 AM - 5PM (Saturday 8AM - 1PM)</p>
                    </div>
                    <div className='lg:w-[386px] lg:h-[144px] w-[250px] h-[144px] flex flex-col items-center justify-between'>
                        <Image
                            src={mapPin}
                            width={31}
                            height={31}
                            alt='Map Pin'
                        />
                        <p className='text-[18px] text-center'>Garden estate, along Garden estate rd Nairobi, Kenya</p>
                    </div>
                    <div className='border border-black lg:w-[348px] lg:h-[100px] w-[100px] h-[114px] flex flex-col items-center justify-between'>
                        <p className='text-[18px] text-center'>Follow Us</p>
                        <div className='flex flex-row w-full items-center gap-4'>
                            <Image
                                src={twitter}
                                alt='Twitter Icon'
                                width={31}
                                height={31}
                                className='hover:border hover:border-black hover:rounded-full hover:p-1'
                            />
                            <Image
                                src={facebook}
                                alt='Facebook Icon'
                                width={31}
                                height={31}
                                className='hover:border hover:border-black hover:rounded-full hover:p-1'
                            />
                            <Image
                                src={instagram}
                                alt='Instagram Icon'
                                width={31}
                                height={31}
                                className='hover:border hover:border-black hover:rounded-full hover:p-1'
                            />
                            <Image
                                src={linkedin}
                                alt='Linkedin Icon'
                                width={31}
                                height={31}
                                className='hover:border hover:border-black hover:rounded-full hover:p-1'
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full border-t border-white flex flex-row items-center justify-center lg:px-[100px]'>
                    <p className='text-[16px] text-center'>Alver Power Systems Ltd &copy; 2022. All rights reserved.</p>
{/*                     <p className='text-[18px] text-center hover:underline'>Privacy</p>
                    <p className='text-[18px] text-center hover:underline'>Terms of Use</p> */}
                </div>
            </div>
            {/* Footer for small screens */}
            <div className='lg:hidden md:hidden flex flex-col w-full items-center justify-between bg-[#252865] h-[65px] p-2'>
               <Image
                   src={logo}
                   alt='Alver Logo'
                   width={24}
                   height={24}
                />
                <p className='text-[10px] text-white'>Alver Power Systems Ltd &copy; 2022. All rights reserved.</p>
            </div>
        </footer>
    )
}
