import React from 'react'
import { Clock, MapPin } from "lucide-react"

export default function Footer() {
    return (
        <footer className='w-full mb-4 flex items-center justify-center'>
            {/* Header for large and medium screens*/}
            <div className='hidden lg:flex lg:flex-col text-white md:flex md:fex-col items-center px-[60px] lg:w-[1440px] md:w-full lg:h-[215px] md:h-[215px] bg-[#252865]'>
                <div className='flex flex-row justify-between'>
                    <div className='border border-white w-[328px] h-[144px] flex flex-col items-center'>
                        <Clock size={31} className='text-white'/>
                        <p className='text-[18px] text-center'>Monday - Friday</p>
                        <p className='text-[18px] text-center'>8 AM - 1PM (Saturday 8AM - 1PM)</p>
                    </div>
                    <div className='border border-white w-[328px] h-[144px] flex justify-center'>
                        <MapPin size={31} className='text-red'/>
                        <p className='text-[18px] text-center'>Garden estate, along Garden estate rd Nairobi, Kenya</p>
                    </div>
                    <div className='border border-white w-[328px] h-[144px] flex justify-center'>
                        <p className='text-[18px] text-center'>Visit Us on</p>
                    </div>
                </div>
            </div>
            {/* Header for small screens */}
            <div className='lg:hidden sm:hidden flex flex-row w-full items-center gap-2 ml-2'>
                
            </div>
        </footer>
    )
}