'use client'
import React from 'react'
import Image from 'next/image'
import electricals from '@//assets/img03.jpg'
import { useRouter } from 'next/navigation';

export default function SolarSolutions() {
    const router = useRouter();
  
    return (
        <section className="w-full flex flex-col items-center justify-center">
            <div className='relative w-full lg:w-[1440px] flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto'>
                {/* Background Image with header and quote overlay */}
                <div className="relative w-full h-[300px] lg:w-[1440px] lg:h-[550px] md:h-[550px]">
                    <Image
                        src={electricals}
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
                            Electrical Installation
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full px-6 py-12 bg-white text-gray-900 flex justify-center">
                    <div className="max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FF0105]">
                            Powering Spaces, Connecting Systems
                        </h2>
                        <p className="text-lg md:text-xl mb-6 text-gray-700">
                            At <span className="font-semibold">Alver Power Systems</span>, we provide comprehensive electrical installation and structured cabling solutions that are reliable, efficient, and scalable. Whether you’re powering a new commercial building, upgrading industrial systems, or designing a data-ready office environment, we deliver end-to-end expertise.
                        </p>

                        <p className="text-lg md:text-xl mb-6 text-gray-700">
                            Our team of certified electricians and network engineers ensures your systems are compliant, future-proof, and ready for mission-critical operations. We don’t just wire buildings—we energize your infrastructure for performance and longevity.
                        </p>

                        <ul className="text-left text-gray-700 space-y-3 max-w-2xl mx-auto">
                            <li>✓ Full-scope electrical installations (LV & MV)</li>
                            <li>✓ Structured cabling: CAT6, CAT6A, CAT7, Fiber</li>
                            <li>✓ Panel boards, DBs, lighting, power sockets & automation</li>
                            <li>✓ Network racks, patch panels, and labeling</li>
                            <li>✓ Surge protection, earthing & lightning systems</li>
                        </ul>

                        <div className="mt-10">
                            <h3 className="text-2xl font-semibold mb-2">Why Choose Us?</h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>✓ Licensed professionals with years of experience</li>
                                <li>✓ Clean, efficient installations that meet international standards</li>
                                <li>✓ Thorough testing & commissioning for all systems</li>
                                <li>✓ Scalable network cabling for today & tomorrow</li>
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
