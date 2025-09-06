"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@//components/header"
import Footer from "@//components/footer"
import { client } from "@//sanity/lib/client"  // ✅ Sanity client

type Recipe = {
  id: string
  title: string
  slug?: { current: string }
  description: string
  image?: { asset: { url: string } }
  category: string
  date: string
  rating: number
  cookTime: string
  prepTime: string
  servings: number
  difficulty: string
}

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("newest")
  const [searchTerm, setSearchTerm] = useState("")

  // ✅ Fetch recipes from Sanity
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "recipe"]{
          id,
          title,
          slug,
          description,
          category,
          date,
          rating,
          cookTime,
          prepTime,
          servings,
          difficulty,
          image {
            asset->{
              url
            }
          }
        } | order(date desc)`
      )
      setRecipes(data)
    }

    fetchData()
  }, [])

  // Categories (static, you can update counts dynamically later if needed)
  const categories = [
    { name: "All Categories", icon: "📋" },
    { name: "Breakfast", icon: "🥞" },
    { name: "Lunch", icon: "🍲" },
    { name: "Dinner", icon: "🍛" },
    { name: "Dessert", icon: "🍰" },
    { name: "Snacks", icon: "🍪" },
    { name: "Drinks", icon: "🍹" },
  ]

  // ✅ Apply search, filter, and sorting
  const filteredRecipes = recipes
    .filter(
      (recipe) =>
        (selectedCategory === "All Categories" ||
          recipe.category === selectedCategory) &&
        (recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
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
      <div className="w-full fixed top-0 left-0 z-20">
        <Header />
      </div>

      {/* Hero */}
      <div className="w-full bg-gradient-to-br from-[#cc7800]/10 to-[#cc7800]/5 pt-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Delicious <span className="text-[#cc7800]">Recipes</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of tasty recipes, from quick breakfasts to elegant dinners.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="w-full bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            {/* Search */}
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full lg:w-1/3 pl-4 pr-4 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#cc7800] focus:outline-none"
            />

            {/* Sort */}
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

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 mb-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-[#cc7800] text-white border-[#cc7800] shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:border-[#cc7800] hover:text-[#cc7800]"
                }`}
              >
                <span className="text-sm">{category.icon}</span>
                <span className="font-medium text-sm">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recipe Cards */}
      <div className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredRecipes.map((recipe) => (
              <article
                key={recipe.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={recipe.image?.asset?.url || "/placeholder.svg"}
                    alt={recipe.title}
                    width={480}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#cc7800] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {recipe.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      ⭐ <span className="text-xs font-medium text-gray-700">{recipe.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#cc7800] transition-colors duration-200">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{recipe.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{recipe.cookTime} mins</span>
                    <Link
                      href={`/recipes/${recipe.slug?.current || recipe.id}`}
                      className="text-[#cc7800] font-medium hover:text-[#b36b00] transition-colors duration-200 flex items-center gap-1"
                    >
                      View Recipe →
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
