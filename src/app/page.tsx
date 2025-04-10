'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'
// import electricalsImg from './assets/electricals.png'
// import switchboardImg from './assets/switchboard.png'
// import switchboardImg2 from './assets/switchBoard(2).jpeg'
// import solarpanelImg from './assets/solarpanel.png'
// import avrImg from './assets/AVR.png'
import Carousel from './components/image_carousel'
import externalLink from './svgs/external_link.svg'
import ProductCard1 from './components/products_card1'
import ProductCard2 from './components/products_card2'
import ProductCard3 from './components/products_card3'
import ProjectCard1 from './components/project_card1'
import ProjectCard2 from './components/project_card2'
import ProjectCard3 from './components/project_card3'
import Carousel2 from './components/carousel'
import Item1 from './components/item1.tsx'
import Item2 from './components/item2.tsx'
import Item3 from './components/item3.tsx'
import Item4 from './components/item4.tsx'
import Header from './components/header'
import Footer from './components/footer'

export default function HomePage() {
    const router = useRouter();

    const about_us = () => {
        router.push('/about_us');
    }
    const products_and_services = () => {
        router.push('/products_and_services');
    }
    // State to control modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<string>('');
    // Function to open modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setStatus('');
    };
    interface FormData {
        name: string;
        email: string;
        phone: string;
        message: string;
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await res.json();
            setStatus(data.success ? 'Message sent!' : 'Failed to send message.');
            // Clear status message after 3 seconds
            setTimeout(() => {
                setStatus(''); // Reset the status after 3 seconds
            }, 5000);
        } catch {
            setStatus('Something went wrong.');
        }
    };

    return (
        <section className=' w-full flex flex-col items-center justify-center overflow-x-hidden'>
            <div className='relative hidden md:block w-full lg:w-[1440px] flex flex-col items-center justify-center overflow-y-hidden'>
                <div className="relative w-full lg:w-[1440px] h-[550px]">
                    <Carousel2 />
                    <div className="fixed top-0 left-0 w-full lg:z-20">
                        <Header />
                    </div>
                    <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
                      <p className="text-white font-semibold text-[32px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
                        Powering Innovation, Ensuring Reliability
                      </p>
                    </div>
                </div>
            </div>

            {/* main section */}
            <div className='lg:p-4 md:p-2 p-1 lg:w-[1300px] md:w-full w-full flex flex-col overflow-y-hidden'>
                {/*Small Screen*/}
                <div className='relative w-full lg:hidden md:hidden flex flex-col items-center justify-center'>
                    <Carousel2 />
                    <div className="absolute top-2 left-0 w-full lg:z-20">
                        <Header />
                    </div>
                    <div className="absolute bottom-10 md:bottom-50 lg:bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
                      <p className="text-white font-semibold text-[20px]">
                        Powering Innovation, Ensuring Reliability
                      </p>
                    </div>
                </div>

                {/* heading1 */}
                <motion.div className='flex flex-row gap-4 lg:gap-[50px] md:gap-[50px]'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                >
                    <div className='w-[10px] h-[50px] bg-[#252865]'></div>
                    <p className='w-full lg:w-[1186px] text-left text-center text-[#000000] font-light text-[12px] lg:text-[18px] md:text-[18px]'>
                        Alver Power Systems Ltd is your trusted partner for innovative electrical and renewable energy solutions across Kenya and East Africa.
                        We specialize in high-quality electrical installations, solar energy solutions and custom switchboard manufacturing. We also offer end to end services that include engineering, procurement, construction (EPC) and maintenance.
                    </p>
                </motion.div>
                
                {/* Two buttons */}
                <motion.div className='w-full flex flex-row items-center justify-center lg:gap-[200px] md:gap-[150px] gap-[50px] mt-[20px]'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                >
                    {/*Button 1*/}
                    <div className="relative w-[145px] h-[30px] lg:w-[220px] lg:h-[46px] md:w-[220px] md:h-[46px]">
                        {/* Rectangle 9 - blurred background box */}
                        {/*<div className="absolute w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>*/}
                        {/* Rectangle 8 - foreground box */}
                        <button className="absolute text-black hover:bg-[#252865] hover:text-white active:bg-[#252865] active:text-white w-[145px] h-[30px] lg:w-[220px] lg:h-[46px] md:w-[220px] md:h-[46px] text-[10px] lg:text-[16px] md:text-[16px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center justify-center lg:items-center lg:justify-center md:items-center md:justify-center gap-2 lg:gap-2 md:gap-2"
                            onClick={products_and_services}
                        >
                            Explore our products
                            <Image
                                src={externalLink}
                                alt='Explore'
                                width={16}
                                height={16}
                                className='w-[10px] h-[10px] lg:w-[16px] lg:h-[16px] md:w-[16px] md:h-[16px]'
                            />
                        </button>
                    </div>

                    {/*Button 2*/}
                    <div className="relative w-[145px] h-[30px] lg:w-[220px] lg:h-[46px] md:w-[220px] md:h-[46px]">
                        {/* Rectangle 9 - blurred background box */}
                        {/*<div className="absolute w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>*/}
                        {/* Rectangle 8 - foreground box */}
                        <button className="absolute text-black hover:bg-[#252865] hover:text-white active:bg-[#252865] active:text-white w-[145px] h-[30px] lg:w-[220px] lg:h-[46px] md:w-[220px] md:h-[46px] text-[10px] lg:text-[16px] md:text-[16px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center justify-center lg:items-center lg:justify-center md:items-center md:justify-center gap-2 lg:gap-2 md:gap-2"
                            onClick={openModal}
                        >
                            Get a Quote
                            <Image
                                src={externalLink}
                                alt='Get Quote'
                                width={16}
                                height={16}
                                className='w-[10px] h-[10px] lg:w-[16px] lg:h-[16px] md:w-[16px] md:h-[16px]'
                            />
                        </button>
                    </div>
                </motion.div>

                {/*Get Quote Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                            {/* Modal Header with close button */}
                            <div className="flex justify-between items-center">
                                <h2 className="text-black text-xl font-bold">Get A Quote</h2>
                                <button
                                    className="text-xl text-gray-600 hover:text-gray-800"
                                    onClick={closeModal}
                                >
                                    &times; {/* "X" to close */}
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="mt-4">
                                <form onSubmit={handleSubmit} className="space-y-1 max-w-md mx-auto text-[black]">
                                    <p className='text-black text-[12px] md:text-[20px] lg:text-[18px]'>Your Name <span className='text-[#FF0105]'>*</span></p>
                                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full p-2 border border-[#D9D9D9] rounded text-black" />
                                    <p className='text-black text-[12px] md:text-[20px] lg:text-[18px]'>Your Email <span className='text-[#FF0105]'>*</span></p>
                                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border border-[#D9D9D9] rounded text-black" />
                                    <p className='text-black text-[12px] md:text-[20px] lg:text-[18px]'>Tel No. <span className='text-[#FF0105]'>*</span></p>
                                    <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full p-2 border border-[#D9D9D9] rounded text-black" />
                                    <p className='text-black text-[12px] md:text-[20px] lg:text-[18px]'>Your Quote <span className='text-[#FF0105]'>*</span></p>
                                    <textarea name="message" placeholder="Quote / Message" onChange={handleChange} required className="w-full p-2 border rounded border-[#D9D9D9] text-black"></textarea>
                                    <button type="submit" className="bg-[#F4A261] text-black px-4 py-1 rounded">Send</button>
                                    {status && (
                                        <p className={`mt-2 text-center text-xl 
                                              ${status === 'Sending...' ? 'text-black' : ''} 
                                              ${status === 'Message sent!' ? 'text-green-500' : ''} 
                                              ${status === 'Failed to send message.' ? 'text-red-500' : ''}`}>
                                            {status}
                                        </p>
                                    )}
                                </form>
                            </div>

                            {/* Modal Footer */}
                            {/*<div className="mt-4 flex justify-end">
                               <button
                                 className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                 onClick={closeModal}
                               >
                                 Close
                               </button>
                             </div>*/}
                        </div>
                    </div>
                )}

                {/*Get To Know Us*/}
                <div className='flex flex-row mt-[20px] gap-4 md:gap-[50px] lg:gap-[50px] w-full justify-end'>
                    <motion.div className='w-full h-full flex flex-col justify-end'
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                    >
                        <div className="w-full flex justify-center text-black font-inter font-normal text-[14px] lg:text-[20px] md:text-[20px]">
                            Get to know us
                        </div>
                        <div className=" w-full flex flex-row mb-[15px] justify-center gap-[10px] text-[16px] lg:text-[24px] md:text-[24px]">
                          <p className='text-[#FF0105]'>Who</p>
                          <p className='text-[#252865]'>We are</p>
                        </div>
                        <p className='w-full lg:w-[1186px] mx-auto text-[#000000] font-light text-[12px] text-justify lg:text-[18px] md:text-[18px]'>Alver power systems is a manufacturing company that  specializes in electrical installations solar energy solutions and switchboard manufacturing.
                          Our mission is to build lasting, mutually beneficial relationships with each of our esteemed clients by continually exceeding their expectations and earning their confidence.
                          Our mission is to be the most skilled and reputable commercial electrical contractor service provider in east Africa 
                        </p>
                        <div className='w-full flex items-center justify-center mt-[20px]'>
                          <div className="relative w-[145px] h-[30px] lg:w-[220px] lg:h-[46px] md:w-[220px] md:h-[46px]">
                            {/* Rectangle 9 - blurred background box */}
                            {/*<div className="absolute w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>*/}
                            {/* Rectangle 8 - foreground box */}
                            <button className="absolute text-black hover:bg-[#252865] hover:text-white active:bg-[#252865] active:text-white w-[145px] h-[30px] lg:w-[220px] lg:h-[46px] md:w-[220px] md:h-[46px] text-[10px] lg:text-[16px] md:text-[16px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center justify-center lg:items-center lg:justify-center md:items-center md:justify-center gap-2 lg:gap-2 md:gap-2"
                                    onClick={about_us}
                              >
                              Learn More
                              <Image
                                src={externalLink}
                                alt='Get Quote'
                                width={18}
                                height={18}
                                className='w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] md:w-[18px] md:h-[18px]'
                              />
                            </button>
                          </div>
                        </div>
                    </motion.div>
                    {/* column */}
                    <motion.div className='w-[10px] h-auto bg-[#252865]'
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                    ></motion.div>
                </div>

                {/*Product Cards*/}
                <div className='flex flex-col mt-[40px]'>
                    <motion.div className='w-full flex flex-row items-center lg:items-center lg:justify-center md:items-center md:justify-center'
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                    >
                        {/* <div className="w-[25px] h-0 top-[745px] left-[625px] bg-[#D9D9D9] border-b-[5px] border-[#252865]"></div> */}
                        <div className="text-black font-inter font-normal text-[14px] lg:text-[16px] md:text-[16px]">
                            What we do
                        </div>
                    </motion.div>
                    <motion.div className=" w-full flex flex-row lg:items-center lg:justify-center md:items-center md:justify-center gap-[10px] text-[16px] lg:text-[20px] md:text-[20px]"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                    >
                        <p className='text-[#FF0105]'>Our</p>
                        <p className='text-[#252865]'>Products and Services</p>
                    </motion.div>

                    <div className="w-full overflow-x-auto lg:overflow-x-hidden lg:overflow-y-hidden">
                        <motion.div className="flex flex-row items-center justify-center  min-w-max"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                        >
                            <Item1 />
                            <Item2 />
                            <Item3 />
                            <Item4 /> 
                        </motion.div>
                    </div>


                    <motion.div className='w-full flex items-center justify-center mt-[20px]'
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                    >
                        <div className="relative w-[145px] h-[30px] lg:w-[220px] lg:h-[46px] md:w-[290px] md:h-[46px]">
                            {/* Rectangle 9 - blurred background box */}
                            {/*<div className="absolute w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>*/}
                            {/* Rectangle 8 - foreground box */}
                            <button className="absolute text-black hover:bg-[#252865] hover:text-white active:bg-[#252865] active:text-white w-[145px] h-[30px] lg:w-[220px] lg:h-[46px] md:w-[290px] md:h-[46px] text-[10px] lg:text-[16px] md:text-[16px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center justify-center lg:items-center lg:justify-center md:items-center md:justify-center gap-2 lg:gap-2 md:gap-2"
                                onClick={products_and_services}
                            >
                                Explore our products
                                <Image
                                    src={externalLink}
                                    alt='Explore'
                                    width={18}
                                    height={18}
                                    className='w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] md:w-[18px] md:h-[18px]'
                                />
                            </button>
                        </div>
                    </motion.div>
                    
                    
                    
                </div>

                {/* why us */}
                <div className='flex flex-row mt-[20px] gap-4 md:gap-[50px] lg:gap-[50px] w-full justify-end'>
                    {/* column */}
                    <motion.div className='w-[10px] h-auto bg-[#252865]'
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                    ></motion.div>
                    <motion.div className='w-full h-full flex flex-col justify-end'
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                    >
                        <div className="w-full flex justify-center text-black font-inter font-normal text-[14px] lg:text-[20px] md:text-[20px]">
                            Why Us?
                        </div>
                        <div className=" w-full flex flex-row mb-[15px] justify-center gap-[10px] text-[16px] lg:text-[24px] md:text-[24px]">
                          <p className='text-[#FF0105]'>Why</p>
                          <p className='text-[#252865]'>Alver Power Systems Ltd.</p>
                        </div>
                        <div className='w-full flex flex-col items-center justify-center'>
                            <ul className='list-disc list-inside md:w-[700px] lg:w-[1004px] text-[12px] font-light md:text-[16px] lg:text-[16px] text-black text-left'>
                                <li>High quality manufacturing - Durable and efficient products</li>
                                <li>Sustainability Focused - Commited to eco-friendly energy solutions</li>
                                <li>Customer Satisfaction - Creating a better and long-term relation with our clients while ensuring excellent service.</li>
                                <li>Expert Team -  Our team comprises of the following:
                                    <ul className="ml-[50px] md:ml-[150px] lg:ml-[150px] list-inside">
                                        <li>
                                            <span className="mr-2">✓</span>
                                            Highly qualified Electrical Engineers.</li>
                                        <li>
                                            <span className="mr-2">✓</span>
                                            Vastly experienced draftsmen.</li>
                                        <li>
                                            <span className="mr-2">✓</span>
                                            Highly dedicated sales personnel.</li>
                                        <li>
                                            <span className="mr-2">✓</span>
                                            Highly skilled technical staff.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    
                </div>

                {/*Projects Done*/}
                <div className='flex flex-col mt-[40px]'>
                    <motion.div className='w-full flex flex-row items-center items-center justify-center'
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                    >
                        {/* <div className="w-[25px] h-0 top-[745px] left-[625px] bg-[#D9D9D9] border-b-[5px] border-[#252865]"></div> */}
                        <div className="text-black font-inter font-normal text-[14px] lg:text-[20px] md:text-[20px]">
                            Portfolio
                        </div>
                    </motion.div>
                    <motion.div className=" w-full flex flex-row items-center justify-center  gap-[10px] text-[16px] lg:text-[24px] md:text-[24px]"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                    >
                        <p className='text-[#FF0105]'>Our</p>
                        <p className='text-[#252865]'>Projects</p>
                    </motion.div>
                    <div className="w-full overflow-x-auto lg:overflow-x-hidden lg:overflow-y-hidden">
                    <motion.div className="flex lg:grid gap-4 items-center justify-start lg:grid-cols-3 min-w-max"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                    >
                        <ProjectCard1 />
                        <ProjectCard2 />
                        <ProjectCard3 />
                    </motion.div>
                </div>

                <div className='w-full flex items-center justify-center mt-[20px]'>
                    <motion.div className="relative w-[123px] h-[30px] lg:w-[220px] lg:h-[46px] md:w-[220px] md:h-[46px]"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.2 }} // this ensures it's triggered every time the section comes into view
                    >
                        {/* Rectangle 9 - blurred background box */}
                        {/*<div className="absolute w-[123px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>*/}
                        {/* Rectangle 8 - foreground box */}
                        <button className="absolute text-black hover:bg-[#252865] hover:text-white active:bg-[#252865] active:text-white w-[123px] h-[30px] lg:w-[220px] lg:h-[46px] md:w-[220px] md:h-[46px] text-[10px] lg:text-[16px] md:text-[16px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center justify-center lg:items-center lg:justify-center md:items-center md:justify-center gap-2 lg:gap-2 md:gap-2">
                            See More
                            <Image
                                src={externalLink}
                                alt='Get Quote'
                                width={16}
                                height={16}
                                className='w-[10px] h-[10px] lg:w-[16px] lg:h-[16px] md:w-[16px] md:h-[16px]'
                            />
                        </button>
                    </motion.div>
                </div>
                </div>
            </div>
            <div className='mt-[20px] w-full bg-[#F8F8F8]'>
              <Footer />
            </div>
        </section>
    );
}
