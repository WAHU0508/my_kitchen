// homepage

import React from 'react'
import Image from 'next/image'
import Header from '@//components/header'
import strip1 from '@//assets/strip1.png'
import MissionSection from '@//components/homepage/missionsection'
import ProductsSection from '@//components/homepage/products_section'
import backgroundImg from '@//assets/background1.png'
import downloadImg from '@//assets/download (1).png'

export default function HomePage() {
    return (
        <div className='w-full flex flex-col items-center justify-center bg-black'>
            <div className='w-full relative'>
                <div className='w-full fixed top-0 left-0 z-20'>
                    <Header/>
                </div>
                <video
                    src='/Myvideo.mp4'
                    autoPlay
                    loop
                    muted
                    className="w-full lg:min-h-screen"
                />
                {/* <div className='absolute top-10 md:top-20 lg:top-40 lg:left-1/2 lg:transform lg:-translate-x-1/2 text-center'>
                    <p className='text-[24px] md:text-[50px] lg:text-[64px] text-white font-bold'>Powering Innovation, Ensuring Reliability</p>
                    <p className='text-[16px] md:text-[20px] lg:text-[24px] text-white font-normal'>Experience the power of alver power</p>
                </div> */}
                <div className='hidden md:block w-full absolute top-30 md:top-70 lg:top-130'>
                    <Image
                        src={strip1}
                        alt='Strip1'
                        className='w-full h-auto object-cover'
                    />
                </div>
            </div>

            {/* Mission section */}
            <div className='w-full mt-[10px] md:mt-[50px] lg:mt-[130px]'>
                <MissionSection/>
            </div>

            {/* Our Expertise */}
            <div className='w-full bg-white h-auto text-black flex items-center justify-center lg:pt-[70px]'>
                <div className=' w-[95%] md:w-[95%] lg:w-[80%] border-l-2 border-black h-auto flex flex-row'>
                    <div className='mt-[50px] border-l-2 border-black h-[100px] md:h-[100px] lg:h-[100px]'></div>
                    <div className='w-full flex flex-col md:flex-row lg:flex-row'>
                        <div className='flex flex-col ml-[30px] md:ml-[30px] w-[200px] md:w-[300px] lg:ml-[50px] lg:w-[300px]'>
                            <p className='text-[12px] md:text-[14px] lg:text-[14px]'>Our Expertise</p>
                            <p className='text-[18px] md:text-[20px] lg:text-[24px] mt-[30px] md:mt-[30px] lg:mt-[50px]'>
                                Delivering Excellence Across Diverse Services
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <ProductsSection />

            {/* Why Us */}
            <div className='w-full mt-[20px] h-auto pl-[50px] pt-[50px] pb-[50px] text-white'
                style={{
                    backgroundImage: `url(${backgroundImg.src})`
            }}>
                <div className='bg-black w-[95%] md:w-[50%] lg:w-[40%] pl-[20px] md:pl-[50px] rounded-[20px]'>
                    <div className='border-l-2 border-white flex flex-row'>
                        <div className='border border-white mt-[50px] h-[100px]'></div>
                        <div className='flex flex-col gap-[50px] px-[10px] md:px-[50px] lg:px-[100px] py-[50px]'>
                            <p className='text-[14px]'>Why Choose Alver Power</p>
                            <p className='text-[24px]'>Innovative Solutions For A Sustainable Future</p>
                            <p className='text-[16px]'>At Alver Power Systems, we adopt advanced manufacturing techniques and sustainable practices to create reliable and efficient power solutions. 
                                Our commitment to excellence and environmental responsibility sets us apart in the industry.
                            </p>
                            <button className='bg-black text-white flex flex-row mb-[20px] md:mb-0'>
                                <p className='border border-white px-4 py-1 rounded-tl-[10px] rounded-bl-[10px]'>read more</p>
                                <p className='border border-l-0 border-white px-4 py-1 rounded-tr-[10px] rounded-br-[10px]'>A</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alver In Numbers */}
            <div className='flex flex-col-reverse md:flex-row w-full h-auto bg-white'>
                <div className='w-full md:w-[50%]'>
                    <Image
                    src={downloadImg}
                    alt='Alver In Numbers'
                    className='w-full h-auto'
                />
                </div>
                <div className='w-full flex flex-col items-center justify-center text-black'>
                    <p className='text-[24px]'>Alver power in Numbers</p>
                    <div className='grid grid-cols-2'>
                       <div className='flex flex-col'>
                        <p className='text-[40px] mt-4 mb-4'>200+</p>
                        <div className='border-b-2 border-black w-[40px]'></div>
                        <div className='border-b-2 border-black w-[100px]'></div>
                        <p className='text-[14px] mt-4 mb-4'>PROJECTS DELIVERED</p>
                       </div>
                       <div className='flex flex-col'>
                        <p className='text-[40px] mt-4 mb-4'>5+</p>
                        <div className='border-b-2 border-black w-[40px]'></div>
                        <div className='border-b-2 border-black w-[100px]'></div>
                        <p className='text-[14px] mt-4 mb-4'>YEARS OF EXPERIENCE</p>
                       </div>
                       <div className='flex flex-col'>
                        <p className='text-[40px] mt-4 mb-4'>100+</p>
                        <div className='border-b-2 border-black w-[40px]'></div>
                        <div className='border-b-2 border-black w-[100px]'></div>
                        <p className='text-[14px] mt-4 mb-4'>SATISFIED CLIENTS</p>
                       </div>
                       <div className='flex flex-col'>
                        <p className='text-[40px] mt-4 mb-4'>20+</p>
                        <div className='border-b-2 border-black w-[40px]'></div>
                        <div className='border-b-2 border-black w-[100px]'></div>
                        <p className='text-[14px] mt-4 mb-4'>AWARDS AND RECOGNITIONS</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}