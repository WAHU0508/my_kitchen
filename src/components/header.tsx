import React from "react"
import Link from "next/link"
import { Utensils } from "lucide-react"

export default function Header() {
  return (
     <header className="w-full flex items-center justify-center border-b border-black bg-[#fffbeb]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[30px]">
              <div className="bg-[#ea580c] text-white p-4 rounded-lg">
                <Utensils className="h-[30px] w-[30px] stroke-[#ffffff]"/>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#4b5563]">Kitchen Chronicles</h1>
                <p className="text-[#374151] text-sm">Your guide to better cooking</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/big-appliances" className="text-[#4b5563] hover:text-[#ea580c] transition-colors">
                Big Appliances
              </Link>
              <Link href="/small-appliances" className="text-[#4b5563] hover:text-[#ea580c] transition-colors">
                Small Appliances
              </Link>
              <Link href="/recipes" className="text-[#4b5563] hover:text-[#ea580c] transition-colors">
                Recipes
              </Link>
              <button>
                Subscribe
              </button>
            </nav>
          </div>
        </div>
      </header>
  )
}
