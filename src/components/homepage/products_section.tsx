import React from 'react'
import Image from 'next/image'
import sivacon from '@//assets/sivacon(2).jpg'
import laser from '@//assets/laser (2).jpg'
import solar from '@//assets/solar (1).jpeg'
import arrow from '@//svgs/arrow.svg'

function ProductsSection() {
  return (
    <div className='w-full bg-white h-auto text-black flex flex-col items-center justify-center pt-[20px]'>
        {/* SwitchBoard */}
        <div className='w-full h-auto md:h-[350px] lg:h-[400px] flex flex-col md:flex-row items-center justify-center md:justify-between md:pl-[5%] lg:pl-[10%]'>
            <div className='w-[95%] md:w-[50%] h-auto'>
                <div className='text-black w-full md:w-[90%] lg:w-[70%] flex flex-col items-start gap-[20px] md:gap-[20px] lg:gap-[50px]'>
                    <p className='text-[24px] md:text-[32px] lg:text-[40px]'>Switchboard Manufacturing</p>
                    <p className='text-[12px] md:text-[16px] lg:text-[16px]'>From custom-designed switch boards to panel assemblies, 
                        we offer high-quality manufacturing solutions tailored to meet your specific requirements.
                    </p>
                    <button className='bg-white text-black flex flex-row mb-[20px] md:mb-0'>
                        <p className='border border-black px-4 py-1 rounded-tl-[10px] rounded-bl-[10px]'>read more</p>
                        <div className='border border-l-0 border-black px-4 py-1 rounded-tr-[10px] flex items-center justify-center rounded-br-[10px]'>
                            <Image
                                src={arrow}
                                alt='arrow'
                                width={16}
                                height={16}
                            />
                        </div>
                    </button>
                </div>
            </div>
            <div className='w-full md:w-[50%] lg:w-[50%] h-full'>
                <Image
                    src={sivacon}
                    alt='Sivacon Image'
                    className='w-full h-full'
                />
            </div>
        </div>
        {/* CNC MACHINING */}
        <div className='w-full h-auto md:h-[350px] lg:h-[400px] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between md:pl-[5%] lg:pl-[10%]'>
            <div className='w-full h-full md:w-[50%] lg:w-[50%]'>
                <Image
                    src={laser}
                    alt='Sivacon Image'
                    className='w-full h-full'
                />
            </div>
            <div className='w-[95%] md:w-[50%] h-auto'>
                <div className='text-black w-full md:w-[90%] lg:w-[70%] flex flex-col items-start gap-[20px] md:gap-[20px] md:pl-[20px] lg:pl-[30px] lg:gap-[50px]'>
                    <p className='text-[24px] md:text-[32px] lg:text-[40px]'>CNC MACHINING</p>
                    <p className='text-[12px] md:text-[16px] lg:text-[16px]'>​Our CNC machining services combine cutting-edge technology with 
                        expert craftsmanship to deliver high-precision components tailored to your exact specifications. 
                        From prototypes to full-scale production, we guarantee speed, accuracy, and unmatched quality.
                    </p>
                    <button className='bg-white text-black flex flex-row mb-[20px] md:mb-0'>
                        <p className='border border-black px-4 py-1 rounded-tl-[10px] rounded-bl-[10px]'>read more</p>
                        <div className='border border-l-0 border-black px-4 py-1 rounded-tr-[10px] flex items-center justify-center rounded-br-[10px]'>
                            <Image
                                src={arrow}
                                alt='arrow'
                                width={16}
                                height={16}
                            />
                        </div>
                    </button>
                </div>
            </div>
            
        </div>
        {/* Solar Solutions */}
        <div className='w-full h-auto md:h-[350px] lg:h-[400px] flex flex-col md:flex-row items-center justify-center md:justify-between md:pl-[5%] lg:pl-[10%]'>
            <div className='w-[95%] md:w-[50%] h-auto'>
                <div className='text-black w-full md:w-[90%] lg:w-[70%] flex flex-col items-start gap-[20px] md:gap-[20px] lg:gap-[50px]'>
                    <p className='text-[24px] md:text-[32px] lg:text-[40px]'>Solar Solutions</p>
                    <p className='text-[12px] md:text-[16px] lg:text-[16px]'>Harness the power of solar energy with our comprehensive solutions, including design, 
                        installation, and maintenance of solar systems for residential, commercial, and industrial applications.
                    </p>
                    <button className='bg-white text-black flex flex-row mb-[20px] md:mb-0'>
                        <p className='border border-black px-4 py-1 rounded-tl-[10px] rounded-bl-[10px]'>read more</p>
                        <div className='border border-l-0 border-black px-4 py-1 rounded-tr-[10px] flex items-center justify-center rounded-br-[10px]'>
                            <Image
                                src={arrow}
                                alt='arrow'
                                width={16}
                                height={16}
                            />
                        </div>
                    </button>
                </div>
            </div>
            <div className='w-full md:w-[50%] lg:w-[50%] h-full'>
                <Image
                    src={solar}
                    alt='Sivacon Image'
                    className='w-full h-full'
                />
            </div>
        </div>
    </div>
  )
}

export default ProductsSection;