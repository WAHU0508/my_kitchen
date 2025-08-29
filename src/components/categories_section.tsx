import React from 'react'

export default function CategoriesSection () {
  return (
    <div className="px-2 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* Amazon Appliance Reviews */}
            <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[3/2] bg-gradient-to-br from-[#cc7800]/5 to-[#cc7800]/10 flex items-center justify-center p-4">
                <div className="w-12 h-12 bg-[#cc7800] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Amazon Reviews</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Honest reviews of kitchen appliances from Amazon to help you make the best choice
                </p>
                <button className="text-[#cc7800] font-medium hover:text-[#b36b00] transition-colors duration-200 flex items-center gap-1 text-sm">
                  Read Reviews
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Recipe Collection */}
            <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[3/2] bg-gradient-to-br from-[#cc7800]/5 to-[#cc7800]/10 flex items-center justify-center p-4">
                <div className="w-12 h-12 bg-[#cc7800] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recipe Collection</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Curated recipes and cooking tips to make the most of your kitchen appliances
                </p>
                <button className="text-[#cc7800] font-medium hover:text-[#b36b00] transition-colors duration-200 flex items-center gap-1 text-sm">
                  Browse Recipes
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Kitchen Tips */}
            <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[3/2] bg-gradient-to-br from-[#cc7800]/5 to-[#cc7800]/10 flex items-center justify-center p-4">
                <div className="w-12 h-12 bg-[#cc7800] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kitchen Tips</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Expert advice and practical tips to elevate your cooking experience
                </p>
                <button className="text-[#cc7800] font-medium hover:text-[#b36b00] transition-colors duration-200 flex items-center gap-1 text-sm">
                  Learn More
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
  )
}
