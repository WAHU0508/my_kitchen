import React from "react";
import Image from 'next/image';
import electricalsImg from './assets/electricals.png'
import switchboardImg from './assets/switchboard.png'
import solarpanelImg from './assets/solarpanel.png'
import avrImg from './assets/AVR.png'

export default function HomePage() {
  return (
    <section className='w-full flex items-center justify-center'>
      <div className='border border-black lg:p-4 md:p-2 p-1 lg:w-[1300px] md:w-full w-full flex flex-col'>
        {/*Image section*/}
        <div className='hidden lg:flex lg:flex-row gap-4 md:flex md:flex-row items-center'>
          <Image 
            src={solarpanelImg}
            alt='Solar Panels Image'
            width={250}
            height={250}
          />
          <Image 
            src={electricalsImg}
            alt='Electricals Image'
            width={250}
            height={250}
          />
          <Image 
            src={switchboardImg}
            alt='Switchboard Image'
            width={250}
            height={250}
          />
          <Image 
            src={avrImg}
            alt='AVR Image'
            width={250}
            height={250}
          />
        </div>
        
      </div>
    </section>
  );
}
