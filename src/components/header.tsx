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
          w-full flex-row items-center justify-between 
          lg:px-8 h-[60px]
          bg-[#e46f2b]/50
          backdrop-blur-md
          transition-all duration-500 ease-in-out
        "
      >
        <Link href="/">
          <Image src={logo} alt="KitchenTik" width={50} height={45} />
        </Link>
        
        <nav className='flex flex-row items-center justify-center space-x-6 text-white md:text-[14px]'>
          <p className='hover:text-[#e46f2b]'>Big Appliances</p>
          <p className='hover:text-[#e46f2b]'>Small Appliances</p>
          <p className='hover:text-[#e46f2b]'>Recipes</p>
        </nav>

      </div>
    </header>
  );
}
