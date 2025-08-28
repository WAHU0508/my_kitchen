import React from "react"
// import Link from "next/link"
import { Utensils } from "lucide-react"

export default function Header() {
  return (
     <header className="w-full flex items-center justify-center">
       <div className='bg-[#e46f2b] border border-black px-2'>
         <div className='bg-[#ea580c] p-4'>
           <Utensils className='stroke-white'/>
         </div>
       </div>
     </header>
  )
}
