import React from "react"
// import Link from "next/link"
// import { Utensils } from "lucide-react"

export default function Header() {
  return (
     <header className="w-full flex items-center justify-center">
       <div className='w-full flex flex-row items-center justify-between bg-[#e46f2b]/95 border-b border-black p-4 md:p-6'>
        {/* icon */}
         <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍳</span>
               <p className='text-white font-bold text-md md:text-lg lg:text-xl'>Kitchen Tik</p>
         </div>
        
         <div>
         </div>
       </div>
     </header>
  )
}
