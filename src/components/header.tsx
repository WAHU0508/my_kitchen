"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@//assets/logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <header className="w-full sticky top-0 z-50">
      <div
        className="
          hidden md:flex 
          w-full flex-row items-center justify-between px-6
          lg:px-12 h-[60px]
          bg-[#cc7800]/40
          backdrop-blur-md
          transition-all duration-500 ease-in-out
        "
      >
        {/* Logo */}
        <Link href="/" className="flex flex-row">
          <Image src={logo} alt="KitchenTik" width={50} height={45} />
        </Link>

        <nav className="flex flex-row items-center space-x-8 lg:space-x-12 text-white md:text-[16px]">
          <p className="hover:text-[#cc7800] cursor-pointer transition-colors duration-200">Big Appliances</p>
          <p className="hover:text-[#cc7800] cursor-pointer transition-colors duration-200">Small Appliances</p>
          <p className="hover:text-[#cc7800] cursor-pointer transition-colors duration-200">Recipes</p>
        </nav>

        <button className="bg-blue-600 hover:bg-blue-700 text-white md:text-[14px] rounded-[10px] px-6 py-2 transition-colors duration-200">
          Subscribe
        </button>
      </div>
      
      {/* Small screens */}
      <div className="md:hidden w-full bg-[#cc7800]/40 backdrop-blur-md transition-all duration-500 ease-in-out">
        <div className="flex items-center justify-between px-4 h-[60px]">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="KitchenTik" width={40} height={36} />
          </Link>

          <div className="flex items-center space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg px-3 py-1.5 transition-colors duration-200">
              Subscribe
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="bg-[#cc7800]/40 border-t border-white/20">
            <nav className="flex flex-col py-4 px-4 space-y-4">
              <Link
                href="/big-appliances"
                className="text-white hover:text-orange-200 transition-colors duration-200 py-2"
              >
                Big Appliances
              </Link>
              <Link
                href="/small-appliances"
                className="text-white hover:text-orange-200 transition-colors duration-200 py-2"
              >
                Small Appliances
              </Link>
              <Link href="/recipes" className="text-white hover:text-orange-200 transition-colors duration-200 py-2">
                Recipes
              </Link>
            </nav>
          </div>
        )}
      </div>

    </header>
  )
}
