import React from "react";

export default function Subscribers() {
  return (
    <div className='bg-[#cc7800] px-4 py-6 md:px-24 md:py-12 flex flex-col items-center justify-center rounded-lg text-center'>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Never Miss a Recipe</h2>
      <p className="white text-sm md:text-lg mb-8 max-w-2xl mx-auto text-pretty leading-relaxed text-center">
              Join our community of food lovers and get weekly recipes, cooking tips, and kitchen inspiration delivered
              straight to your inbox.
      </p>
      <div className="flex flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white flex-2 px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#cc7800]/50 focus:outline-none text-gray-900 placeholder-gray-500 text-sm"
            />
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg px-3 py-1.5 transition-colors duration-200">
              Subscribe
            </button>
      </div>
       <p className="text-white/70 text-xs md:text-sm mt-4 text-center">
              No spam, unsubscribe at any time. We respect your privacy.
       </p>
    </div>
  )
}
