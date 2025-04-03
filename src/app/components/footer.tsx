import React from 'react'
import Image from 'next/image'
import { Clock, MapPin } from "lucide-react"
import twitter from '../svgs/twitter.svg'
import facebook from '../svgs/facebook.svg'
import instagram from '../svgs/instagram.svg'
import linkedin from '../svgs/linkedin.svg'
    

export default function Footer() {
    return (
        <footer className='w-full mb-4 flex items-center justify-center'>
            {/* Header for large and medium screens*/}
            <div className='hidden lg:flex lg:flex-col text-white md:flex md:fex-col items-center justify-between px-[60px] lg:w-[1440px] md:w-full lg:h-[215px] md:h-[215px] bg-[#252865]'>
                <div className='flex flex-row justify-between gap-6'>
                    <div className='w-[328px] h-[144px] flex flex-col items-center justify-between'>
                        <Clock size={31} className='text-white'/>
                        <p className='text-[18px] text-center'>Monday - Friday</p>
                        <p className='text-[18px] text-center'>8 AM - 1PM (Saturday 8AM - 1PM)</p>
                    </div>
                    <div className='w-[328px] h-[144px] flex flex-col items-center justify-between'>
                        <MapPin size={31} className='text-red'/>
                        <p className='text-[18px] text-center'>Garden estate, along Garden estate rd Nairobi, Kenya</p>
                    </div>
                    <div className='w-[328px] h-[144px] flex flex-col items-center justify-between'>
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
                <div className='flex flex-row items-center justify-between gap-12'>
                    <p className='text-[18px] text-center'>Alver Power Systems Ltd &copy; 2022. All rights reserved.</p>
                    <p className='text-[18px] text-center hover:underline'>Privacy</p>
                    <p className='text-[18px] text-center hover:underline'>Terms</p>
                </div>
            </div>
            {/* Header for small screens */}
            <div className='lg:hidden sm:hidden flex flex-row w-full items-center gap-2 ml-2'>
                
            </div>
        </footer>
    )
}
