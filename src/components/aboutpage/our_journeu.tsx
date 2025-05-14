import React from 'react'

function OurJourney() {
  return (
    <div className='w-[95%] md:w-[90%] lg:w-[80%] flex items-center justify-center flex-col'>

        {/* year one */}
        <div className='w-full flex items-center justify-center md:items-start md:justify-start'>
            <div className='border border-black p-4 w-[90%] md:p-4 flex flex-col md:w-[40%] rounded-[20px]'>
                <p className='text-[#C45308] text-[20px] md:text-[24px] p-4 max-w-max border-b border-black'>2017</p>
            </div>
        </div>

        {/* Separator */}
        <div className='w-full flex flex-row items-center gap-2'>
            <div className='text-black text-[30px] md:text-[48px]'>&lt;</div>
            <div className='w-full border-b border-black flex flex-row items-center justify-between px-[30px] md:px-[50px]'>
                <div className='w-[50px] border border-black'></div>
                <div className='w-[50px] border border-black'></div>
            </div>
            <div className='text-black text-[30px] md:text-[48px]'>&gt;</div>
        </div>

        {/* year two */}
        <div className='w-full flex items-center justify-center md:items-end md:justify-end'>
            <div className='border border-black p-4 w-[90%] md:p-4 flex flex-col md:w-[40%] rounded-[20px]'>
                <p className='text-[#C45308] text-[20px] md:text-[24px] p-4 max-w-max border-b  border-black'>2022</p>
            </div>
        </div>

    </div>
  )
}

export default OurJourney