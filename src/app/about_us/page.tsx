import Footer from '@//components/footer'
import Header from '@//components/header'
import React from 'react'

function Aboutpage() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Header/>
      <div className='w-full flex items-center justify-center text-black'>Main section</div>
      <Footer/>
    </div>
  )
}

export default Aboutpage