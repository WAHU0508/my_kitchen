'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function SolarSolutions() {
    const router = useRouter();
    const services = [
        'Off-Grid Solar Solutions',
        'Solar Grid-Tie Systems',
        'Solar Street Lighting',
        'Solar Water Pumping',
        'Solar Water Heating Systems',
        'Mini Grid Systems',
    ];

    return (
        <section className="w-full flex flex-col items-center justify-center">
            <div className='relative w-full lg:w-[1440px] flex flex-col items-center justify-center overflow-y-auto'>
                {/* Background Image with header and quote overlay */}
                <div className="relative w-full h-[300px] lg:w-[1440px] lg:h-[550px] md:h-[550px]">
                    <Image
                        src='/img05.png'
                        alt="Cover Image"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute bottom-5 lg:bottom-50 md:bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
                        <p className="text-white font-semibold text-[32px] lg:text-[50px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
                            Solar Solutions
                        </p>
                    </div>
                </div>

                {/* Main section */}
                <div className="w-full h-auto flex items-center justify-center px-6 py-12 bg-white text-gray-900 overflow-y-auto">
                    <div className="w-full h-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FF0105]">Power Your Future with Our Solar Energy Solutions</h2>
                        <p className="text-lg md:text-xl mb-10 text-gray-700">
                            At <span className="font-semibold">Alver Power Systems</span>, we provide clean, reliable, and customized solar energy solutions that empower homes, businesses, and communities.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
                            {services.map((service, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="text-[#FF0105] text-xl font-bold">{index + 1 < 10 ? `0${index + 1}` : index + 1}.</div>
                                    <div className="text-lg font-medium">{service}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-semibold mb-2">Why Choose Us?</h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>✓ Expert design & installation</li>
                                <li>✓ High-performance solar technology</li>
                                <li>✓ Tailored solutions for your environment</li>
                                <li>✓ Dedicated after-sales support</li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <button 
                                onClick={() => router.push('/products_and_services/solar_solutions')}
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
