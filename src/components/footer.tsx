import React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@//assets/logo.png"
import { Instagram, Facebook, X } from "lucide-react"

const PinterestIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Paste actual Pinterest SVG path here */}
    <path d="M..." />
  </svg>
);
export default function Footer() {
  return (
    <footer className="mt-6 w-full bg-[#fff8ea]">
      {/* Main Footer Content */}
      <div className="px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
          {/* Column 1: Logo + Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-row items-center gap-3 mb-4">
              <div className="text-[#3a3a3a] p-1 rounded">
                <Image src={logo} alt="KitchenTik Logo" width={50} height={50} />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-[#3a3a3a] text-lg">KitchenTik</p>
                <p className="text-[#3a3a3a] text-sm text-pretty">All Things Kitchen</p>
              </div>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h4 className="font-semibold text-[#3a3a3a] mb-4 text-base">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/big-appliances" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                  Big Appliances
                </Link>
              </li>
              <li>
                <Link href="/small-appliances" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                  Small Appliances
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                  Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular */}
          <div>
            <h4 className="font-semibold text-[#3a3a3a] mb-4 text-base">Popular</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                  Stand Mixers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                  Air Fryers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                  Pasta Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: KitchenTik Info */}
          <div>
            <h4 className="font-semibold text-[#3a3a3a] mb-4 text-base">KitchenTik</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 5: Social Media */}
          <div>
            <h4 className="font-semibold text-[#3a3a3a] mb-4 text-base">Follow Us</h4>
            <div className="flex flex-row gap-4">
              <Link href="https://www.instagram.com" target="_blank" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="https://www.facebook.com" target="_blank" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="https://www.pinterest.com" target="_blank" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                <PinterestIcon />
              </Link>
              <Link href="https://www.x.com" target="_blank" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                <X size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3a3a3a]/10 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#3a3a3a] text-sm text-center md:text-left">
            &copy; 2024 Kitchen Chronicles. All rights reserved. Made with ❤️ for food lovers everywhere.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800] underline transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#3a3a3a] hover:text-[#cc7800] underline transition-colors">
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
