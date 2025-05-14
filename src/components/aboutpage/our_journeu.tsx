import React from 'react'

function OurJourney() {
  return (
    <div className='w-[95%] md:w-[90%] lg:w-[80%] flex items-center justify-center flex-col'>

        {/* year one */}
        <div className='w-full md:items-start'>
            <div className='border-b border-black md:p-4 flex flex-col'>
                <p className='text-[#C45308] lg:text-[24px] py-4 border border-black'>2017</p>
            </div>
        </div>

        {/* Separator */}
        <div></div>

        {/* year two */}
        <div className='w-full md:items-end'>
            <div className='border-b border-black md:p-4 flex flex-col'>
                <p className='text-[#C45308] lg:text-[24px] py-4 border border-black'>2017</p>
            </div>
        </div>

    </div>
  )
}

export default OurJourney