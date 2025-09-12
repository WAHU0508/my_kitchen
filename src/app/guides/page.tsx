"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@//components/header"
import Footer from "@//components/footer"
import { client } from "@//sanity/lib/client"

type Guide = {
  _id: string
  title: string
  slug?: { current: string }
  description: string
  image?: { asset: { url: string } }
  date: string
  rating: number
}

export default function BigguidesPage() {
  const [sortBy, setSortBy] = useState("newest")
  const [bigguides, setBigguides] = useState<Guide[]>([])

  // Fetch guides from Sanity
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "guides"]{
          _id,
          title,
          slug,
          description,
          date,
          image {
            asset->{
              url
            }
          }
        } | order(date desc)`
      )
      setBigguides(data)
    }

    fetchData()
  }, [])

  // Apply filters
  const filteredguides = bigguides
  .sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime()
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
                Big <span className="text-[#cc7800]">guides</span> Reviews
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-pretty">
                Transform your kitchen with the right guides. Our in-depth reviews help you choose refrigerators,
                ranges, dishwashers, and more that fit your needs and budget.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
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
                className="text-black border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#cc7800] focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="rating">Highest Rated</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredguides.map((guide) => (
              <article
                key={guide._id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={guide.image?.asset?.url || "/placeholder.svg"}
                    alt={guide.title}
                    width={480}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      ⭐ <span className="text-xs font-medium text-gray-700">{guide.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#cc7800] transition-colors duration-200 text-balance">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-pretty">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.date}</span>
                    <Link
                      href={`/big-guides/${guide.slug?.current || guide._id}`}
                      className="text-[#cc7800] font-medium hover:text-[#b36b00] transition-colors duration-200 flex items-center gap-1"
                    >
                      Read Review →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
