import React from "react";

export default function Subscribers() {
  return (
    <div className='bg-[#cc7800] md:px-12 md:py-8 flex flex-col items-center justify-center'>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Never Miss a Recipe</h2>
      <p className="white text-lg mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Join our community of food lovers and get weekly recipes, cooking tips, and kitchen inspiration delivered
              straight to your inbox.
      </p>
      <div className="flex flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-primary-foreground text-foreground border-0 flex-1"
              />
      </div>
    </div>
  )
}
