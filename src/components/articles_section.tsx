import React from 'react'

export default function ArticlesSection() {
  return (
    {/* Featured Articles Section */}
      <div className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">Featured Articles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Latest reviews and recipes to inspire your culinary journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Featured Article 1 */}
            <article className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[16/10] bg-gradient-to-br from-[#cc7800]/10 to-[#cc7800]/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#cc7800] text-white px-3 py-1 rounded-full text-xs font-medium">Review</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#cc7800] transition-colors duration-200 text-balance">
                  Best Stand Mixers Under $200: KitchenAid vs Cuisinart
                </h3>
                <p className="text-gray-600 mb-4 text-pretty">
                  We tested 5 popular stand mixers to find the best value for home bakers. Here's our detailed
                  comparison...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dec 15, 2024</span>
                  <button className="text-[#cc7800] font-medium hover:text-[#b36b00] transition-colors duration-200 flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>

            {/* Featured Article 2 */}
            <article className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[16/10] bg-gradient-to-br from-green-500/10 to-green-600/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">Recipe</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#cc7800] transition-colors duration-200 text-balance">
                  Perfect Air Fryer Chicken Wings: Crispy Every Time
                </h3>
                <p className="text-gray-600 mb-4 text-pretty">
                  Learn the secret to achieving restaurant-quality crispy wings using your air fryer with this foolproof
                  recipe...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dec 12, 2024</span>
                  <button className="text-[#cc7800] font-medium hover:text-[#b36b00] transition-colors duration-200 flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>

            {/* Featured Article 3 */}
            <article className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[16/10] bg-gradient-to-br from-blue-500/10 to-blue-600/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">Guide</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#cc7800] transition-colors duration-200 text-balance">
                  Essential Kitchen Tools Every Home Cook Needs
                </h3>
                <p className="text-gray-600 mb-4 text-pretty">
                  From basic knives to specialty gadgets, discover the must-have tools that will transform your
                  cooking...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dec 10, 2024</span>
                  <button className="text-[#cc7800] font-medium hover:text-[#b36b00] transition-colors duration-200 flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#cc7800] hover:bg-[#b36b00] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg">
              View All Articles
            </button>
          </div>
        </div>
  )
}
