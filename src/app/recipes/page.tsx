"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Users, ChefHat, Search, Filter } from "lucide-react"
import Header from "@//components/header"
import Footer from "@//components/footer"
import { client } from "@//sanity/lib/client"
import { Recipe } from "@//types/recipe"
// type Recipe = {
//   _id: string
//   title: string
//   slug?: { current: string }
//   description: string
//   image?: { asset: { url: string } }
//   category?: {
//     title: string
//   }
//   date: string
//   rating: number
//   reviews: number
//   cookTime: string
//   servings: number
//   difficulty: string
//   chef: string
// }

export default function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [sortBy, setSortBy] = useState("newest")
  const [searchTerm, setSearchTerm] = useState("")
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [categories, setCategories] = useState<{ title: string; icon?: string }[]>([])

  // ✅ Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      const cats = await client.fetch(
        `*[_type == "recipeCategory"]{
          title,
          icon
        }`
      )
      setCategories([{ title: "All Categories", icon: "📋" }, ...cats])
    }
    fetchCategories()
  }, [])

  // ✅ Fetch recipes
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "recipe"]{
          _id,
          title,
          slug,
          description,
          date,
          rating,
          reviews,
          cookTime,
          servings,
          difficulty,
          chef,
          "category": category->title,
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

  // ✅ Apply filters + sorting
  const filteredRecipes = recipes
    .filter((recipe) => {
      if (selectedCategory === "All Categories") return true
      
      // Check if category exists and has a title
      if (!recipe.category || !recipe.category.title) {
        return false
      }
      
      const recipeCategory = recipe.category.title.toLowerCase().trim()
      const selected = selectedCategory.toLowerCase().trim()
      
      return recipeCategory === selected
    })
    .filter((recipe) => {
      if (!searchTerm) return true
      return (
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="/colorful-ingredients-spread-on-marble-counter.png"
          alt="Colorful cooking ingredients"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#cc7800]/80 via-amber-600/60 to-yellow-600/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Discover Your Next <span className="text-amber-200">Favorite Recipe</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 text-pretty">
              From quick weeknight dinners to show-stopping desserts, explore our collection of chef-tested recipes that
              bring joy to every meal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border-0 shadow-lg focus:ring-2 focus:ring-[#cc7800] text-gray-900"
                />
              </div>
              <button className="bg-white text-[#cc7800] hover:bg-[#cc7800] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2">
                <ChefHat className="w-5 h-5" />
                Browse All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Recipe Categories</h2>
          
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.title)}
                className={`p-4 rounded-xl transition-all duration-300 text-center ${
                  selectedCategory === category.title
                    ? "bg-[#cc7800] text-white shadow-lg scale-105"
                    : "bg-white hover:bg-amber-100 text-gray-900 shadow-md hover:shadow-lg"
                }`}
              >
                <div className="text-2xl mb-2">{category.icon || "🍽️"}</div>
                <div className="font-semibold text-sm">{category.title}</div>
              </button>
            ))}
          </div>

          {/* Filter and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-4 h-4" />
              <span>Showing {filteredRecipes.length} recipes</span>
              {selectedCategory !== "All Categories" && (
                <span className="bg-[#cc7800] text-white px-2 py-1 rounded-full text-sm">{selectedCategory}</span>
              )}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#cc7800]"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="rating">Highest Rated</option>
              <option value="title">Alphabetical</option>
            </select>
          </div>

          {/* Recipe Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={recipe.image?.asset?.url || "/placeholder.svg"}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#cc7800] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {recipe.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium text-gray-700">{recipe.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#cc7800] font-medium">
                      {recipe.category?.title || "Uncategorized"}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">{recipe.rating}</span>
                      <span className="text-xs text-gray-500">({recipe.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#cc7800] transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.cookTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">👨‍🍳 {recipe.chef}</span>
                    <Link
                      href={`/recipes/${recipe.slug?.current || recipe._id}`}
                      className="text-[#cc7800] font-medium hover:text-amber-700 transition-colors duration-200 flex items-center gap-1"
                    >
                      View Recipe →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
