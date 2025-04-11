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
                        src='/sivacon.jpg'
                        alt="Cover Image"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute bottom-20 lg:bottom-50 md:bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
                        <p className="text-white font-semibold text-[32px] lg:text-[50px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
                            Switchboard Manufacturing
                        </p>
                    </div>
                </div>

                {/* Main section */}
                {/* Content Section */}
                <div className="w-full px-6 py-12 bg-white text-gray-900 flex justify-center">
                    <div className="max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FF0105]">
                            Engineered for Reliability, Built to Perform
                        </h2>
                        <p className="text-lg md:text-xl mb-6 text-gray-700">
                            At <span className="font-semibold">Alver Power Systems</span>, we specialize in the design and manufacturing of high-quality, customized switchboards that meet the toughest performance standards.
                        </p>

                        <p className="text-lg md:text-xl mb-6 text-gray-700">
                            Whether it&apos;s for commercial, industrial, or utility applications, our switchboards are engineered for durability, safety, and optimal energy distribution. With precision workmanship and top-grade components, we deliver solutions that keep your power systems running smoothly and securely.
                        </p>

                        <ul className="text-left text-gray-700 space-y-3 max-w-2xl mx-auto">
                            <li>✓ Custom-built LV & MV Switchboards</li>
                            <li>✓ SIVACON technology integration</li>
                            <li>✓ Type-tested panels for safety & performance</li>
                            <li>✓ Modular and scalable designs</li>
                            <li>✓ On-site installation & commissioning</li>
                        </ul>

                        <div className="mt-10">
                            <h3 className="text-2xl font-semibold mb-2">Why Choose Alver Power Systems?</h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>✓ Decades of engineering experience</li>
                                <li>✓ ISO-standard manufacturing practices</li>
                                <li>✓ End-to-end project support</li>
                                <li>✓ Competitive lead times and pricing</li>
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
