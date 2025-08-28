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
          bg-[#e46f2b]/40
          backdrop-blur-md
          transition-all duration-500 ease-in-out
        "
      >
        {/* Logo + any other header content will remain crisp */}
        <Link href="/">
          <Image src={logo} alt="KitchenTik" width={50} height={45} />
        </Link>

        {/* Example nav links */}
        <nav className="flex gap-6 text-white font-medium">
          <Link href="/about">About</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
