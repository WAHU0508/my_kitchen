import React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@//assets/logo.png"
import { Instagram, Facebook } from "lucide-react"

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg
    className={className} // inherit styles from parent
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M568 320C568 457 457 568 320 568C294.4 568 269.8 564.1 246.6 556.9C256.7 540.4 271.8 513.4 277.4 491.9C280.4 480.3 292.8 432.9 292.8 432.9C300.9 448.3 324.5 461.4 349.6 461.4C424.4 461.4 478.3 392.6 478.3 307.1C478.3 225.2 411.4 163.9 325.4 163.9C218.4 163.9 161.5 235.7 161.5 314C161.5 350.4 180.9 395.7 211.8 410.1C216.5 412.3 219 411.3 220.1 406.8C220.9 403.4 225.1 386.5 227 378.7C227.6 376.2 227.3 374 225.3 371.6C215.2 359.1 207 336.3 207 315C207 260.3 248.4 207.4 319 207.4C379.9 207.4 422.6 248.9 422.6 308.3C422.6 375.4 388.7 421.9 344.6 421.9C320.3 421.9 302 401.8 307.9 377.1C314.9 347.6 328.4 315.8 328.4 294.5C328.4 275.5 318.2 259.6 297 259.6C272.1 259.6 252.1 285.3 252.1 319.8C252.1 341.8 259.5 356.6 259.5 356.6C259.5 356.6 235 460.4 230.5 479.8C225.5 501.2 227.5 531.4 229.6 551C137.4 514.9 72 425.1 72 320C72 183 183 72 320 72C457 72 568 183 568 320z"/>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className} // inherit styles from parent
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/>
  </svg>
);
export default function Footer() {
  return (
    <footer className="mt-6 w-full bg-[#fff8ea]">
      {/* Main Footer Content */}
      <div className="px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full max-w-7xl mx-auto">
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
                <PinterestIcon className="text-inherit" />
              </Link>
              <Link href="https://www.x.com" target="_blank" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                <XIcon className="text-inherit"  />
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
