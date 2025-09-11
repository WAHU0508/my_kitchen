import React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@//assets/logo.png"
import { Instagram, Facebook } from "lucide-react"

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
     <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609825 4 46 13.390175 46 25 C 46 36.609825 36.609825 46 25 46 C 22.876355 46 20.82771 45.682142 18.896484 45.097656 C 19.75673 43.659418 20.867347 41.60359 21.308594 39.90625 C 21.570728 38.899887 22.648438 34.794922 22.648438 34.794922 C 23.348841 36.132057 25.395277 37.263672 27.574219 37.263672 C 34.058123 37.263672 38.732422 31.300682 38.732422 23.890625 C 38.732422 16.78653 32.935409 11.472656 25.476562 11.472656 C 16.196831 11.472656 11.271484 17.700825 11.271484 24.482422 C 11.271484 27.636307 12.94892 31.562193 15.634766 32.8125 C 16.041611 33.001865 16.260073 32.919834 16.353516 32.525391 C 16.425459 32.226044 16.788267 30.766792 16.951172 30.087891 C 17.003269 29.871239 16.978043 29.68405 16.802734 29.470703 C 15.913793 28.392399 15.201172 26.4118 15.201172 24.564453 C 15.201172 19.822048 18.791452 15.232422 24.908203 15.232422 C 30.18976 15.232422 33.888672 18.832872 33.888672 23.980469 C 33.888672 29.796219 30.95207 33.826172 27.130859 33.826172 C 25.020554 33.826172 23.440361 32.080359 23.947266 29.939453 C 24.555054 27.38426 25.728516 24.626944 25.728516 22.78125 C 25.728516 21.130713 24.842754 19.753906 23.007812 19.753906 C 20.850369 19.753906 19.117188 21.984457 19.117188 24.974609 C 19.117187 26.877359 19.761719 28.166016 19.761719 28.166016 C 19.761719 28.166016 17.630543 37.176514 17.240234 38.853516 C 16.849091 40.52931 16.953851 42.786365 17.115234 44.466797 C 9.421139 41.352465 4 33.819328 4 25 C 4 13.390175 13.390175 4 25 4 z"></path>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
     <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
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
                <PinterestIcon className="w-6 h-6" />
              </Link>
              <Link href="https://www.x.com" target="_blank" className="text-[#3a3a3a] hover:text-[#cc7800] transition-colors">
                <XIcon className="w-6 h-6" />
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
