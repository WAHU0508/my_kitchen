import React from "react";

export default function Subscribers() {
  return (
    <div className='bg-[#cc7800] md:px-24 md:py-12 flex flex-col items-center justify-center rounded-lg'>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Never Miss a Recipe</h2>
      <p className="white text-lg mb-8 max-w-2xl mx-auto text-pretty leading-relaxed text-center">
              Join our community of food lovers and get weekly recipes, cooking tips, and kitchen inspiration delivered
              straight to your inbox.
      </p>
      <div className="flex flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-black border-0 flex-1"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg px-3 py-1.5 transition-colors duration-200">
              Subscribe
            </button>
      </div>
    </div>
  )
}
