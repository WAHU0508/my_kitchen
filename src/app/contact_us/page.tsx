'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import location from '../assets/image 25.png'
import phone from '../assets/Icon.png'
import mail from '../assets/image 26.png'
import Header from '../components/header';
import Footer from '../components/footer';
import map from '../assets/image 27.png'
import contactus from '../assets/contactus.jpg'
// import { motion } from 'framer-motion';

export default function ContactUsPage() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<string>('');

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
            const res = await fetch('/api/message', {
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
  const handleClick = () => {
    window.open('https://maps.app.goo.gl/EnXGKAmnnb6kVJ5E7', '_blank');
  };
  
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className='relative w-full lg:w-[1440px] flex flex-col items-center justify-center'>
        {/* Background Image with header and quote overlay */}
        <div className="relative w-full h-[300px] lg:w-[1440px] lg:h-[550px] md:h-[550px]">
          <Image
            src={contactus}
            alt="Cover Image"
            fill
            className="object-cover"
            priority
          />
      
          {/* Header inside image container (or move outside if needed) */}
          <div className="fixed top-4 left-0 w-full lg:z-20">
            <Header />
          </div>

        </div>
        <div className='flex flex-row gap-6'>
            <div className="w-[10px] h-auto bg-[#FF0105]"></div>
            <div className="w-full text-black text-[14px] font-light">
              We&apos;re here to help with all your electrical and energy solution. Visit us at our location or simply call us or send an email. 
              For any questions, feel free to contact us 
            </div>
        </div>
        <div className='w-full flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4 md:gap-4 lg:gap-6'>
          <div className='flex flex-col items-center'>
            <Image
              src={location}
              alt='Location Icon'
              width={48}
              height={48}
            />
            <p className='md:w-[200px] lg:w-[250px] lg:text-[16px] mt-[20px] text-black text-center'>Garden estate along Garden Estate Road Nairobi, Kenya</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src={phone}
              alt='Phone Icon'
              width={48}
              height={48}
            />
            <div className='mt-[20px] flex flex-col'>
              <p className='lg:w-[250px] lg:text-[16px] text-black text-center'>(+254) 116 004 001</p>
              <p className='lg:w-[250px] lg:text-[16px] text-black text-center'>(+254) 116 004 002</p>
              <p className='lg:w-[250px] lg:text-[16px] text-black text-center'>(+254) 116 004 003</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src={mail}
              alt='Mail Icon'
              width={48}
              height={48}
            />
            <p className='lg:w-[250px] lg:text-[16px] mt-[20px] text-black text-center'>info@alverpower.com</p>
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <Image
            src={map}
            width={815}
            height={500}
            onClick={handleClick}
            alt='Map Location'
            className='w-[200px] h-[130px] md:w-[500px] md:h-[200px] lg:w-[500px] lg:h-[200px]'
          />
        </div>
        <div className="mt-4 w-full flex flex-col items-center justify-center">
            <p className='text-[#FF0105] text-[12px] md:text-[20px] lg:text-[18px]'>Send us a message</p>
            <p className='text-black text-[12px] md:text-[20px] lg:text-[18px]'>Required fields are marked <span className='text-[#FF0105]'>*</span></p>
            <form onSubmit={handleSubmit} className="space-y-1 max-w-md mx-auto text-[black]">
                <p className='text-black text-[12px] md:text-[20px] lg:text-[18px]'>Your Name <span className='text-[#FF0105]'>*</span></p>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full p-2 border border-[#D9D9D9] rounded text-black" />
                <p className='text-black text-[12px] md:text-[20px] lg:text-[18px]'>Your Email <span className='text-[#FF0105]'>*</span></p>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border border-[#D9D9D9] rounded text-black" />
                <p className='text-black text-[12px] md:text-[20px] lg:text-[18px]'>Tel No. <span className='text-[#FF0105]'>*</span></p>
                <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full p-2 border border-[#D9D9D9] rounded text-black" />
                <p className='text-black text-[12px] md:text-[20px] lg:text-[18px]'>Your Message <span className='text-[#FF0105]'>*</span></p>
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
        <div className='w-full bg-[#252865] mt-[20px]'>
          <Footer />
        </div>
        </div>
      </section>
  )
}
