'use client'
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import coverImg from '../assets/portfolio.jpg';
import Header from '../components/header';
import Footer from '../components/footer';
import ProjectCard1 from '../components/project_card1'
import ProjectCard2 from '../components/project_card2'
import ProjectCard3 from '../components/project_card3'

export default function ProjectsPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className='relative w-full lg:w-full flex flex-col items-center justify-center'>
        {/* Background Image with header and quote overlay */}
        <div className="relative w-full h-[300px] lg:w-full xl:w-full 2xl:w-full lg:h-[550px] md:h-[550px]">
          <Image
            src={coverImg}
            alt="Cover Image"
            fill
            className="object-cover"
            priority
          />
          {/* Header inside image container (or move outside if needed) */}
          <div className="absolute top-4 left-0 w-full lg:z-20">
            <Header />
          </div>
      
          {/* Quote overlay */}
          <div className="absolute bottom-5 lg:bottom-50 md:bottom-50 left-1/2 transform -translate-x-1/2 z-10 text-center">
            <p className="text-black font-semibold text-[32px] lg:text-[50px] md:text-[50px] w-[80vw] max-w-[800px] mx-auto">
              OUR projects
            </p>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-y-hidden flex items-center justify-center">
          <motion.div
            className="w-fit flex flex-col items-center justify-center gap-4 
                       lg:grid lg:grid-cols-3 lg:gap-6 
                       px-4 py-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <ProjectCard1 />
            <ProjectCard2 />
            <ProjectCard3 />
          </motion.div>
        </div>
        <div className='w-full bg-[#252865] mt-[20px]'>
              <Footer />
        </div>
      </section>
  )
}
