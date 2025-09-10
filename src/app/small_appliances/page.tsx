"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@//components/header"
import Footer from "@//components/footer"
import { client } from "@//sanity/lib/client"

//type definition
type Appliance = {
  _id: string
  title: string
  slug?: { current: string }
  description: string
  image?: { asset: { url: string } }
  category?: {
      title: string
    },
  date: string
  rating: number
}

export default function SmallAppliancesPage() {
  const [smallAppliances, setSmallAppliances] = useState<Appliance[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("newest")
  const [categories, setCategories] = useState<{ title: string; icon?: string }[]>([])
   useEffect(() => {
    const fetchCategories = async () => {
      const cats = await client.fetch(
        `*[_type == "smallApplianceCategory"]{
          title,
          icon
        }`
      )
      setCategories([{ title: "All Categories", icon: "📋" }, ...cats])
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "smallAppliance"]{
          _id,
          title,
          slug,
          description,
          category->{
            title
          },
          date,
          rating,
          image {
            asset->{
              url
            }
          }
        } | order(date desc)`
      )
      setSmallAppliances(data)
    }

    fetchData()
  }, [])

   // Apply filters
  const filteredAppliances = smallAppliances
  .filter((appliance) => {
    if (selectedCategory === "All Categories") return true

    const applianceCategory = appliance.category?.title?.toLowerCase().trim()
    const selected = selectedCategory.toLowerCase().trim()

    return applianceCategory === selected
  })
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
      {/* Header */}
      <div className="w-full relative">
        <div className="w-full fixed top-0 left-0 z-20">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="w-full bg-gradient-to-br from-[#cc7800]/10 to-[#cc7800]/5 pt-[60px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Small <span className="text-[#cc7800]">Appliances</span> Reviews
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Enhance your culinary experience with the right small appliances.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter + Sorting */}
      <div className="w-full bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Filter & Browse Reviews</h2>

            <div className="flex items-center gap-4">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#cc7800]"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="rating">Highest Rated</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.title)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.title
                    ? "bg-[#cc7800] text-white border-[#cc7800] shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:border-[#cc7800] hover:text-[#cc7800]"
                }`}
              >
                <span className="text-sm">{category.icon}</span>
                <span className="font-medium text-sm">{category.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Review Cards */}
      <div className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredAppliances.map((appliance) => (
              <article
                key={appliance._id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100"
              >
                <div className="aspect-[16/10] relative">
                  <Image
                    src={appliance.image?.asset?.url || "/placeholder.svg"}
                    alt={appliance.title}
                    width={480}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#cc7800] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {appliance.category?.title}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#cc7800] transition-colors">
                    {appliance.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{appliance.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(appliance.date).toDateString()}
                    </span>
                    <Link
                      href={`/small_appliances/${appliance.slug?.current || appliance._id}`}
                      className="text-[#cc7800] font-medium hover:text-[#b36b00] flex items-center gap-1"
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

      {/* Footer */}
      <Footer />
    </div>
  )
}
