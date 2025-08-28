import React from "react"
// import Link from "next/link"
import { Utensils } from "lucide-react"

export default function Header() {
  return (
     <header className="w-full flex items-center justify-center">
       <div className='w-full flex-items-center justify-center bg-[#e46f2b]/95 border-b border-black px-2'>
         <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍳</span>
         </div>
       </div>
     </header>
  )
}
