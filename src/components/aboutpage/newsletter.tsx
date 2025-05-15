import React from 'react'

function NewsLetter() {
  return (
    <div className='w-[95%] md:w-[90%] lg:w-[80%] flex items-center justify-center flex-col h-auto mb-4'>
        {/* text section */}
        <div className='text-white border-l-2 border-white h-auto w-full ml-[10px] flex flex-row gap-4'>
            <div className='border-l-2 border-white mt-[40px] h-[30px]'></div>
            <div className='flex flex-col gap-6'>
                <p className='text-[16px]'>News</p>
                <p className='text-[20px]'>Alver Power in the Press</p>
            </div>
        </div>
        {/* form section */}
        <div className='w-full md:[70%] lg::w-[50%] items-center justify-center'>
            <form className='bg-white text-black px-4 py-4 md:px-2'>
                <p>Join our mailing list</p>
                <p>Email*</p>
                <div className='w-full flex flex-col md:flex-row gap-2'>
                    <input
                        type='text'
                        name='email'
                        className='w-full border-b px-2 border-black'
                    />
                    <button className='border border-black text-black bg-white px-4 py-2 max-w-max'>Subscribe</button>
                </div>
                <div className='w-full flex flex-row mt-2 gap-2'>
                    <input
                        type='checkbox'
                        name='checkbox'
                        className='border-b border-black'
                    />
                    <p>I want to subscribe to your mailing list.</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default NewsLetter;