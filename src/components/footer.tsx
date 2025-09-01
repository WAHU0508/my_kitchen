import React from "react"
import Image from "next/image"
import logo from "@//assets/logo.png"

export default function Footer() {
  return (
    <div className='mt-6 w-full flex flex-col items-center justify-center bg-[#fff8ea] px-2 md:px-8 py-4'>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary text-primary-foreground p-1 rounded">
                  <Image
                    src={logo}
                    alt="KitchenTik Logo"
                    width={30}
                    height={30}
                  />
                </div>
                <span className="font-bold text-foreground">KitchenTik</span>
              </div>
              <p className="text-muted-foreground text-sm text-pretty">
                All Things Kitchen
              </p>
        </div>
        <div>
              <h4 className="font-semibold text-foreground mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/big-appliances" className="text-[#3a3a3a] hover:text-[#]">
                    Big Appliances
                  </Link>
                </li>
                <li>
                  <Link href="/small-appliances" className="text-[#3a3a3a] hover:text-primary">
                    Small Appliances
                  </Link>
                </li>
                <li>
                  <Link href="/recipes" className="text-[#3a3a3a] hover:text-primary">
                    Recipes
                  </Link>
                </li>
              </ul>
            </div>
      </div>
      <p className="text-[#3a3a3a] text-[8px] md:text-sm">
            &copy; 2024 Kitchen Chronicles. All rights reserved. Made with ❤️ for food lovers everywhere.
      </p>
    </div>
  )
}
