import React from 'react'

function MissionSection() {
  return (
    <div className='w-full bg-black h-auto text-white flex items-center justify-center lg:pt-[30px]'>
        <div className='w-[80%] border-l-2 border-white h-auto flex lg:flex-row'>
            <div className='mt-[50px] border-l-2 border-white h-auto flex lg:flex-row'></div>
            <div className='flex flex-col lg:mr-[50px]'>
             <p className='lg:text-[24px]'>Mission Statement</p>
             <p className='lg:text-[18px] lg:mt-[50px]'>Mission words</p>
            </div>
        </div>
    </div>
  )
}

export default MissionSection