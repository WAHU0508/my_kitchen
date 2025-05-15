import React from 'react'

function NewsLetter() {
  return (
    <div className='w-[95%] md:w-[90%] lg:w-[80%] flex items-center justify-center flex-col bg-black h-auto'>
        {/* text section */}
        <div className='text-white border-l-2 border-white h-auto w-full ml-[10px] flex flex-row gap-4'>
            <div className='border-l-2 border-white mt-[20px] h-[30px]'></div>
            <div className='flex flex-col gap-6'>
                <p className='text-[16px]'>News</p>
                <p className='text-[20px]'>Alver Power in the Press</p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter;