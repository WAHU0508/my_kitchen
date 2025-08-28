import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@//assets/logo.png";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50">
      <div
        className="
          hidden md:flex 
          w-full flex-row items-center justify-between px-4
          lg:px-8 h-[60px]
          bg-[#e46f2b]/50
          backdrop-blur-md
          transition-all duration-500 ease-in-out
        "
      >
        <Link href="/" className='flex flex-row gap-4'>
          <Image src={logo} alt="KitchenTik" width={50} height={45} />
          <div className='flex flex-col text-white'>
            <p className='text-[20px]'>KitchenTik</p>
            <p className='text-[15px]'>Your kitchen, your sanctuary.</p>
          </div>
        </Link>
        
        <nav className='flex flex-row items-center justify-center space-x-6 text-white md:text-[14px]'>
          <p className='hover:text-[#e46f2b]'>Big Appliances</p>
          <p className='hover:text-[#e46f2b]'>Small Appliances</p>
          <p className='hover:text-[#e46f2b]'>Recipes</p>
        </nav>

        <button className="bg-blue-600 hover:bg-blue-700 text-white md:text-[14px] rounded-[10px] px-4 py-2">
          Subscribe
        </button>
  
        <div>
        </div>
      </div>
    </header>
  );
}
