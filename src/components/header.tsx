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
          w-full flex-row items-center justify-between px-6
          lg:px-12 h-[60px]
          bg-[#e46f2b]/50
          backdrop-blur-md
          transition-all duration-500 ease-in-out
        "
      >
        {/* Logo */}
        <Link href="/" className="flex flex-row">
          <Image src={logo} alt="KitchenTik" width={50} height={45} />
        </Link>

        <nav className="flex flex-row items-center space-x-8 lg:space-x-12 text-white md:text-[16px]">
          <p className="hover:text-[#e46f2b] cursor-pointer transition-colors duration-200">Big Appliances</p>
          <p className="hover:text-[#e46f2b] cursor-pointer transition-colors duration-200">Small Appliances</p>
          <p className="hover:text-[#e46f2b] cursor-pointer transition-colors duration-200">Recipes</p>
        </nav>

        <button className="bg-blue-600 hover:bg-blue-700 text-white md:text-[14px] rounded-[10px] px-6 py-2 transition-colors duration-200">
          Subscribe
        </button>
      </div>
    </header>
  )
}
