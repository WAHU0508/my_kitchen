import Footer from '@//components/footer'
import Header from '@//components/header'
import React from 'react'

function Aboutpage() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Header/>
      <div className='w-full flex items-center justify-center text-black'>
        <h1 className='text-[32px] md:text-[40px]lg:text-[60px] xl:text-[64px]'>About Alver Power</h1>
        <p className='text-[16px] md:text-[20px]lg:text-[20px] xl:text-[24px]'>Alver Power Systems is a leading company specializing in switchboard manufacturing, 
          EPC services, solar solutions, electrical installation, and laser cutting machining.
           We are dedicated to providing high-quality, innovative solutions to meet the evolving needs of our clients.
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default Aboutpage