import React from 'react'

export default function CategoriesSection () {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Big Appliances */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#e46f2b]/10 to-[#e46f2b]/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#e46f2b] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Big Appliances</h3>
                <p className="text-gray-600 mb-4">
                  Refrigerators, ovens, dishwashers and more major kitchen appliances
                </p>
                <button className="text-[#e46f2b] font-medium hover:text-[#d4621f] transition-colors duration-200 flex items-center gap-2">
                  Shop Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
      </div>
  )
}
