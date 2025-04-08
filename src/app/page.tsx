'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import electricalsImg from './assets/electricals.png'
import switchboardImg from './assets/switchboard.png'
// import switchboardImg2 from './assets/switchBoard(2).jpeg'
import solarpanelImg from './assets/solarpanel.png'
import avrImg from './assets/AVR.png'
import Carousel from './components/image_carousel'
import externalLink from './svgs/external_link.svg'
import ProductCard1 from './components/products_card1'
import ProductCard2 from './components/products_card2'
import ProductCard3 from './components/products_card3'
import ProjectCard1 from './components/project_card1'
import ProjectCard2 from './components/project_card2'
import ProjectCard3 from './components/project_card3'
import Carousel2 from './components/carousel'
import Header from './components/header'

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
    <section className='w-full flex items-center justify-center overflow-x-hidden'> 
      <div className='relative hidden md:block w-full lg:w-[1440px] flex flex-col items-center justify-center'>
        <div className="relative w-full lg:w-[1440px] h-[550px]">
          <Carousel />
          <div className="absolute top-4 left-0 w-full lg:z-20">
            <Header />
          </div>
        </div>
      </div>
  
    </section>
  );
}
