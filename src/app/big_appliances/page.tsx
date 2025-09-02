"use client"
import { useState } from "react"
import Image from "next/image"
import Header from "@//components/header"
import Footer from "@//components/footer"

export default function BigAppliancesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("newest")

  const bigAppliances = [
    {
      id: 1,
      title: "Best Refrigerators Under $1500: Samsung vs LG Comparison",
      description:
        "We tested 8 popular refrigerators to find the best value for families. Compare features, energy efficiency, and storage capacity.",
      image: "/modern-stainless-steel-refrigerator-in-kitchen.png",
      category: "Refrigerators",
      date: "Dec 18, 2024",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Top 5 Gas Ranges for Home Chefs: Professional Performance",
      description:
        "Discover which gas ranges deliver restaurant-quality cooking at home. From BTU power to oven capacity, we cover it all.",
      image: "/professional-gas-range-with-multiple-burners.png",
      category: "Ranges & Ovens",
      date: "Dec 16, 2024",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Dishwasher Buying Guide: Quiet, Efficient, and Reliable",
      description:
        "Find the perfect dishwasher for your kitchen. We review noise levels, cleaning performance, and energy efficiency.",
      image: "/modern-built-in-dishwasher-with-open-door.png",
      category: "Dishwashers",
      date: "Dec 14, 2024",
      rating: 4.7,
    },
    {
      id: 4,
      title: "French Door vs Side-by-Side: Which Refrigerator Style Wins?",
      description:
        "Compare the pros and cons of different refrigerator configurations to find what works best for your family.",
      image: "/french-door-refrigerator-with-water-dispenser.png",
      category: "Refrigerators",
      date: "Dec 12, 2024",
      rating: 4.6,
    },
    {
      id: 5,
      title: "Induction vs Gas Cooktops: The Ultimate Cooking Showdown",
      description:
        "Explore the benefits and drawbacks of induction and gas cooking to make the right choice for your kitchen.",
      image: "/induction-cooktop-with-pans-cooking.png",
      category: "Cooktops",
      date: "Dec 10, 2024",
      rating: 4.8,
    },
    {
      id: 6,
      title: "Best Built-in Ovens for Baking Enthusiasts",
      description:
        "Perfect your baking with these top-rated built-in ovens. Features even heating, precise temperature control, and more.",
      image: "/built-in-wall-oven-with-baked-goods.png",
      category: "Ranges & Ovens",
      date: "Dec 8, 2024",
      rating: 4.9,
    },
  ]

  const categories = [
    { name: "All Categories", count: 87, icon: "📋" },
    { name: "Refrigerators", count: 24, icon: "❄️" },
    { name: "Ranges & Ovens", count: 18, icon: "🔥" },
    { name: "Dishwashers", count: 15, icon: "🧽" },
    { name: "Cooktops", count: 12, icon: "🍳" },
    { name: "Microwaves", count: 10, icon: "⚡" },
    { name: "Wine Coolers", count: 8, icon: "🍷" },
  ]

  const filteredAppliances = bigAppliances
    .filter((appliance) => selectedCategory === "All Categories" || appliance.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "rating":
          return b.rating - a.rating
        case "title":
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      {/* Header Section */}
      <div className="w-full relative">
        <div className="w-full fixed top-0 left-0 z-20">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="w-full bg-gradient-to-br from-[#cc7800]/10 to-[#cc7800]/5 pt-[60px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Big <span className="text-[#cc7800]">Appliances</span> Reviews
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-pretty">
                Transform your kitchen with the right appliances. Our in-depth reviews help you choose refrigerators,
                ranges, dishwashers, and more that fit your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-[#cc7800] hover:bg-[#b36b00] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg">
                  Browse All Reviews
                </button>
                <button className="border border-[#cc7800] hover:bg-[#cc7800] text-[#cc7800] hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
                  Buying Guides
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Filter & Browse Reviews</h2>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc7800] focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="rating">Highest Rated</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-[#cc7800] text-white border-[#cc7800] shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:border-[#cc7800] hover:text-[#cc7800]"
                }`}
              >
                <span className="text-sm">{category.icon}</span>
                <span className="font-medium text-sm">{category.name}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === category.name
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-600 group-hover:bg-[#cc7800]/10 group-hover:text-[#cc7800]"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Active Filter Display */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold">{filteredAppliances.length}</span> reviews
              {selectedCategory !== "All Categories" && (
                <span>
                  {" "}
                  in <span className="font-semibold text-[#cc7800]">{selectedCategory}</span>
                </span>
              )}
            </p>

            {selectedCategory !== "All Categories" && (
              <button
                onClick={() => setSelectedCategory("All Categories")}
                className="text-sm text-[#cc7800] hover:text-[#b36b00] font-medium flex items-center gap-1"
              >
                Clear Filter
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
              {selectedCategory === "All Categories" ? "Latest Big Appliance Reviews" : `${selectedCategory} Reviews`}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Expert reviews and comparisons to help you make informed decisions for your kitchen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredAppliances.map((appliance) => (
              <article
                key={appliance.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={appliance.image || "/placeholder.svg"}
                    alt={appliance.title}
                    width={480}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#cc7800] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {appliance.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      <span className="text-xs font-medium text-gray-700">{appliance.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#cc7800] transition-colors duration-200 text-balance">
                    {appliance.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-pretty">{appliance.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{appliance.date}</span>
                    <button className="text-[#cc7800] font-medium hover:text-[#b36b00] transition-colors duration-200 flex items-center gap-1">
                      Read Review
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#cc7800] hover:bg-[#b36b00] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg">
              View All Big Appliance Reviews
            </button>
          </div>
        </div>
      </div>


      {/* Footer Section */}
      <div className="w-full flex flex-col items-center justify-center">
        <Footer />
      </div>
    </div>
  )
}
