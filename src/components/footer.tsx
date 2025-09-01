import React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@//assets/logo.png"

export default function Footer() {
  return (
    <div className='mt-6 w-full flex flex-col items-center justify-center bg-[#fff8ea] px-2 md:px-8 py-4'>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
        {/* Column 1: Logo + Description */}
        <div>
          <div className="flex flex-row items-center gap-2 mb-4">
            <div className="text-[#3a3a3a] p-1 rounded">
              <Image
                src={logo}
                alt="KitchenTik Logo"
                width={50}
                height={50}
              />
            </div>
           <div className="flex flex-col">
            <p className="font-bold text-[#3a3a3a]">KitchenTik</p>
            <p className="text-[#3a3a3a] text-sm text-pretty">
              All Things Kitchen
            </p>
          </div>
          </div>
        </div>

        {/* Column 2: Categories */}
        <div>
          <h4 className="font-semibold text-[#3a3a3a] mb-4">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/big-appliances" className="text-[#3a3a3a] hover:text-[#cc7800]">
                Big Appliances
              </Link>
            </li>
            <li>
              <Link href="/small-appliances" className="text-[#3a3a3a] hover:text-[#cc7800]">
                Small Appliances
              </Link>
            </li>
            <li>
              <Link href="/recipes" className="text-[#3a3a3a] hover:text-[#cc7800]">
                Recipes
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Popular */}
        <div>
          <h4 className="font-semibold text-[#3a3a3a] mb-4">Popular</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800]">
                Stand Mixers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800]">
                Air Fryers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800]">
                Pasta Recipes
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: KitchenTik Info */}
        <div>
          <h4 className="font-semibold text-[#3a3a3a] mb-4">KitchenTik</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800]">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800]">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='mt-6 w-full flex flex-col md:flex-row items-center justify-between bg-[#fff8ea] px-2 md:px-8 py-4 space-y-2 md:space-y-0'>
        <p className="text-[#3a3a3a] text-[8px] md:text-sm">
          &copy; 2024 Kitchen Chronicles. All rights reserved. Made with ❤️ for food lovers everywhere.
        </p>
          <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800] text-underline">
            Privacy Policy
          </Link>
          <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800] text-underline">
            Terms and conditions
          </Link>
      </div>
    </div>
  )
}
