import React from 'react'
import Image from 'next/image'
import { Clock, MapPin } from "lucide-react"
import mapPin from "../svgs/mapPin.svg"
import twitter from '../svgs/twitter.svg'
import facebook from '../svgs/facebook.svg';
import instagram from '../svgs/instagram.svg';
import linkedin from '../svgs/linkedin.svg';
import logo from '../svgs/logo.svg';
    

export default function Footer() {
    return (
        <footer className='w-full mb-4 flex items-center justify-center'>
            {/* Header for large and medium screens*/}
            <div className='hidden lg:flex lg:flex-col text-white md:flex md:fex-col items-center justify-between px-[60px] lg:w-[1440px] md:w-full lg:h-[215px] md:h-[215px] bg-[#252865]'>
                <div className='flex flex-row justify-between gap-[50px]'>
                    <div className='w-[321px] h-[137px] flex flex-col items-center justify-between'>
                        <Clock size={31} className='text-white'/>
                        <p className='text-[18px] text-center'>Monday - Friday</p>
                        <p className='text-[18px] text-center'>8 AM - 1PM (Saturday 8AM - 1PM)</p>
                    </div>
                    <div className='w-[386px] h-[144px] flex flex-col items-center justify-between'>
                        <Image
                            src={mapPin}
                            width={31}
                            height={31}
                            alt='Map Pin'
                        />
                        <p className='text-[18px] text-center'>Garden estate, along Garden estate rd Nairobi, Kenya</p>
                    </div>
                    <div className='w-[348px] h-[144px] flex flex-col items-center justify-between'>
                        <p className='text-[18px] text-center'>Visit Us on</p>
                        <div className='flex flex-row w-full items-center justify-between'>
                            <Image
                                src={twitter}
                                alt='Twitter Icon'
                                width={48}
                                height={48}
                                className='hover:border hover:border-white hover:rounded-full hover:p-1'
                            />
                            <Image
                                src={facebook}
                                alt='Facebook Icon'
                                width={48}
                                height={48}
                                className='hover:border hover:border-white hover:rounded-full hover:p-1'
                            />
                            <Image
                                src={instagram}
                                alt='Instagram Icon'
                                width={48}
                                height={48}
                                className='hover:border hover:border-white hover:rounded-full hover:p-1'
                            />
                            <Image
                                src={linkedin}
                                alt='Linkedin Icon'
                                width={48}
                                height={48}
                                className='hover:border hover:border-white hover:rounded-full hover:p-1'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-[50px]'>
                    <p className='text-[18px] text-center'>Alver Power Systems Ltd &copy; 2022. All rights reserved.</p>
                    <p className='text-[18px] text-center hover:underline'>Privacy</p>
                    <p className='text-[18px] text-center hover:underline'>Terms of Use</p>
                </div>
            </div>
            {/* Header for small screens */}
            <div className='lg:hidden md:hidden flex flex-col w-full items-center justify-between bg-[#252865] h-[60px]'>
               <Image
                   src={logo}
                   alt='Alver Logo'
                   width={24}
                   height={24}
                />
                <p className='text-[14px] text-white'>Alver Power Systems Ltd &copy; 2022. All rights reserved.</p>
            </div>
        </footer>
    )
}
