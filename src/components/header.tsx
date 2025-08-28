import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@//assets/logo.png";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50">
      <div
        className="
        border border-white
          hidden md:flex 
          w-full flex-row items-center justify-between px-4
          lg:px-8 h-[60px]
          bg-[#e46f2b]/50
          backdrop-blur-md
          transition-all duration-500 ease-in-out
        "
      >
        {/* Icon */}
        <Link href="/" className='flex flex-row gap-4 lg:w-[300px] border border-white'>
          <Image src={logo} alt="KitchenTik" width={50} height={45} />
        </Link>
        {/* Nav bar */}
        <nav className='flex flex-row space-x-8 text-white md:text-[16px] border border-white'>
          <p className='hover:text-[#e46f2b] cursor-pointer'>Big Appliances</p>
          <p className='hover:text-[#e46f2b] cursor-pointer'>Small Appliances</p>
          <p className='hover:text-[#e46f2b] cursor-pointer'>Recipes</p>   
        {/* Subscribe */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white md:text-[14px] rounded-[10px] px-4 py-2">
          Subscribe
        </button>
        </nav>
  
        <div>
        </div>
      </div>
    </header>
  );
}
