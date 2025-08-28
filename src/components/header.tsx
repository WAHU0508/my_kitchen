import React from "react"
import Link from "next/link"
import { Utensils } from "lucide-react"

export default function Header() {
  return (
     <header className="w-full flex items-center justify-center border-b border-black bg-[#fffbeb]">
        <div className="w-full flex items-center justify-center container mx-auto px-2 md:px-4 py-2">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-[30px]">
              <div className="bg-[#ea580c] text-white p-4 rounded-lg">
                <Utensils className="h-[30px] w-[30px] stroke-[#ffffff]"/>
              </div>
          </div>
          </div>
        </div>
      </header>
  )
}
