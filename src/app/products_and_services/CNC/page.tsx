'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function SolarSolutions() {
    const router = useRouter();
  
    return (
        <section className="w-full flex flex-col items-center justify-center">
            <div className='relative w-full lg:w-[1440px] flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto'>
                {/* Background Image with header and quote overlay */}
                <div className="relative w-full h-[300px] lg:w-[1440px] lg:h-[550px] md:h-[550px]">
                    <Image
                        src='/img04.jpg'
                        alt="Cover Image"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute top-2 left-2">
                      <button
                        onClick={() => router.back()}
                        className="text-[14px] text-black px-3 py-1 rounded-md shadow hover:bg-white transition"
                      >
                        ←
                      </button>
                    </div>
                    <div className="absolute bottom-20 lg:bottom-50 md:bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
                        <p className="text-white font-semibold text-[32px] lg:text-[50px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
                            CNC
                        </p>
                    </div>
                </div>

                {/* Main section */}
                <div className="w-full px-6 py-12 bg-white text-gray-900 flex justify-center">
                    <div className="max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FF0105]">
                            Turning Ideas into Precision-Cut Reality
                        </h2>
                        <p className="text-lg md:text-xl mb-6 text-gray-700">
                            At <span className="font-semibold">Alver Power Systems</span>, our CNC capabilities are the backbone of high-precision engineering.
                            We craft components with unbeatable accuracy, speed, and consistency using state-of-the-art CNC machining technology.
                        </p>

                        <p className="text-lg md:text-xl mb-6 text-gray-700">
                            Whether it’s rapid prototyping, custom fabrication, or large-scale production, our CNC team delivers superior quality with every cut. With tight tolerances and premium materials, we bring your most complex designs to life.
                        </p>

                        <ul className="text-left text-gray-700 space-y-3 max-w-2xl mx-auto">
                            <li>✓ High-speed, multi-axis CNC machining</li>
                            <li>✓ Exceptional precision and repeatability</li>
                            <li>✓ Metal and plastic prototyping & production</li>
                            <li>✓ Customized, scalable manufacturing solutions</li>
                            <li>✓ Strict quality control and ISO-compliant workflows</li>
                        </ul>

                        <div className="mt-10">
                            <h3 className="text-2xl font-semibold mb-2">Why Partner With Us?</h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>✓ Cutting-edge CNC machines and CAD/CAM integration</li>
                                <li>✓ Experienced machinists and design engineers</li>
                                <li>✓ Fast turnaround times</li>
                                <li>✓ Uncompromising quality assurance</li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <button 
                                onClick={() => router.push('/contact_us')}
                                className="mt-6 px-6 py-3 bg-[#FF0105] hover:bg-[#e40004] text-white rounded-lg text-lg font-semibold transition">
                                Contact Us Today
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
