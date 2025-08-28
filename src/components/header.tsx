import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import logo from '@//assets/logo.png';


export default function Header() {

  return (
    <header className='w-full relative flex flex-col items-center justify-center transition-all duration-500 ease-in-out'>
      <div
        className="
          hidden md:flex 
          w-full flex-row items-center justify-between 
          lg:px-8 h-[60px] 
          sticky top-0 z-50 
          bg-[#e46f2b]/95 
          backdrop-blur-md   /* blur background */
          supports-[backdrop-filter]:bg-[#e46f2b]/95  /* ensure blur works */
          transition-all duration-500 ease-in-out
        "
      >
        <Link href='/'>
          <Image src={logo} alt="KitchenTik" width={50} height={45} />
        </Link>

      </div>
    </header>
  );
}
