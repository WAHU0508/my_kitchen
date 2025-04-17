'use client'
import React from 'react'
import { motion } from 'framer-motion';
import ProjectCard1 from '@//components/project_card1'
import ProjectCard2 from '@//components/project_card2'
import ProjectCard3 from '@//components/project_card3'
import ProjectCard4 from '@//components/project_card4'
import ProjectCard5 from '@//components/project_card5'
import ProjectCard6 from '@//components/project_card6'

export default function ProjectsPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full overflow-x-auto lg:overflow-y-hidden flex flex-col items-center justify-center">
        <p className='w-full flex items-center justify-center text-black text-[24px] lg:text-[32px]'>Our Projects</p>
          <motion.div
            className="w-fit flex flex-col items-center justify-center gap-4 
                       lg:grid lg:grid-cols-3 lg:gap-6 md:grid md:grid-cols-2
                       px-4 py-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <ProjectCard1 />
            <ProjectCard2 />
            <ProjectCard3 />
            <ProjectCard4 />
            <ProjectCard6 />
            <ProjectCard5 />
          </motion.div>
        </div>
        
      </section>
  )
}
