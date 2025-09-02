"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Users, ChefHat, Search, Filter } from "lucide-react"
import Header from "@//components/header"
import Footer from "@//components/footer"

const recipeCategories = [
  { name: "Appetizers", count: 24, icon: "🥗", color: "bg-orange-100 hover:bg-orange-200" },
  { name: "Main Courses", count: 45, icon: "🍖", color: "bg-orange-200 hover:bg-orange-300" },
  { name: "Desserts", count: 32, icon: "🍰", color: "bg-amber-100 hover:bg-amber-200" },
  { name: "Breakfast", count: 18, icon: "🥞", color: "bg-yellow-100 hover:bg-yellow-200" },
  { name: "Soups", count: 15, icon: "🍲", color: "bg-orange-50 hover:bg-orange-100" },
  { name: "Salads", count: 21, icon: "🥙", color: "bg-amber-50 hover:bg-amber-100" },
  { name: "Beverages", count: 12, icon: "🥤", color: "bg-yellow-50 hover:bg-yellow-100" },
  { name: "Snacks", count: 28, icon: "🍿", color: "bg-orange-100 hover:bg-orange-200" },
]

const featuredRecipes = [
  {
    id: 1,
    title: "Creamy Garlic Parmesan Pasta",
    description: "Rich and indulgent pasta dish with a velvety garlic parmesan sauce that's ready in just 20 minutes.",
    image: "/creamy-garlic-parmesan-pasta-in-skillet.png",
    rating: 4.8,
    reviews: 127,
    cookTime: "20 min",
    servings: 4,
    difficulty: "Easy",
    category: "Main Courses",
    chef: "Maria Rodriguez",
  },
  {
    id: 2,
    title: "Chocolate Lava Cake",
    description: "Decadent individual chocolate cakes with a molten center that flows like lava when cut open.",
    image: "/chocolate-lava-cake-with-molten-center.png",
    rating: 4.9,
    reviews: 89,
    cookTime: "25 min",
    servings: 2,
    difficulty: "Medium",
    category: "Desserts",
    chef: "Chef Antoine",
  },
  {
    id: 3,
    title: "Mediterranean Quinoa Bowl",
    description: "Fresh and healthy bowl packed with quinoa, roasted vegetables, feta cheese, and tahini dressing.",
    image: "/mediterranean-quinoa-bowl-with-vegetables.png",
    rating: 4.7,
    reviews: 156,
    cookTime: "30 min",
    servings: 2,
    difficulty: "Easy",
    category: "Salads",
    chef: "Elena Kostas",
  },
  {
    id: 4,
    title: "Spicy Korean Fried Chicken",
    description: "Crispy double-fried chicken wings tossed in a sweet and spicy Korean-style glaze.",
    image: "/spicy-korean-fried-chicken-wings.png",
    rating: 4.6,
    reviews: 203,
    cookTime: "45 min",
    servings: 4,
    difficulty: "Medium",
    category: "Main Courses",
    chef: "Kim Min-jun",
  },
  {
    id: 5,
    title: "Classic French Onion Soup",
    description: "Traditional French soup with caramelized onions, rich beef broth, and melted Gruyère cheese.",
    image: "/classic-french-onion-soup-with-cheese.png",
    rating: 4.8,
    reviews: 94,
    cookTime: "1 hr",
    servings: 4,
    difficulty: "Medium",
    category: "Soups",
    chef: "Pierre Dubois",
  },
  {
    id: 6,
    title: "Avocado Toast Supreme",
    description: "Elevated avocado toast with poached egg, cherry tomatoes, and everything bagel seasoning.",
    image: "/avocado-toast-with-poached-egg.png",
    rating: 4.5,
    reviews: 78,
    cookTime: "15 min",
    servings: 2,
    difficulty: "Easy",
    category: "Breakfast",
    chef: "Sarah Chen",
  },
]

export default function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("popular")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRecipes = featuredRecipes.filter((recipe) => {
    const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "time":
        return Number.parseInt(a.cookTime) - Number.parseInt(b.cookTime)
      case "title":
        return a.title.localeCompare(b.title)
      default:
        return b.reviews - a.reviews
    }
  })

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="/colorful-ingredients-spread-on-marble-counter.png"
          alt="Colorful cooking ingredients"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#cc7800]-600/80 via-amber-600/60 to-yellow-600/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Discover Your Next <span className="text-[#cc7800]-200">Favorite Recipe</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 text-pretty">
              From quick weeknight dinners to show-stopping desserts, explore our collection of chef-tested recipes that
              bring joy to every meal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ffffff] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border-0 shadow-lg focus:ring-2 focus:ring-[#cc7800] text-[#ffffff]"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Recipe Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`p-4 rounded-xl transition-all duration-300 text-center ${
                selectedCategory === "All"
                  ? "bg-[#cc7800] text-white shadow-lg scale-105"
                  : "bg-white hover:bg-[#cc7800] text-black shadow-md hover:shadow-lg"
              }`}
            >
              <div className="text-2xl mb-2">🍽️</div>
              <div className="font-semibold text-sm">All</div>
              <div className="text-xs opacity-70">{featuredRecipes.length}</div>
            </button>
            {recipeCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-4 rounded-xl transition-all duration-300 text-center ${
                  selectedCategory === category.name
                    ? "bg-[#cc7800] text-white shadow-lg scale-105"
                    : `${category.color} text-black shadow-md hover:shadow-lg`
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="font-semibold text-sm">{category.name}</div>
                <div className="text-xs opacity-70">{category.count}</div>
              </button>
            ))}
          </div>

          {/* Filter and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-2 text-[#ffffff]">
              <Filter className="w-4 h-4" />
              <span>Showing {sortedRecipes.length} recipes</span>
              {selectedCategory !== "All" && (
                <span className="bg-[#cc7800] text-[#cc7800] px-2 py-1 rounded-full text-sm">{selectedCategory}</span>
              )}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-border bg-[#ffffff] text-[#ffffff] focus:ring-2 focus:ring-[#cc7800]-500/50"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="time">Quickest</option>
              <option value="title">Alphabetical</option>
            </select>
          </div>

          {/* Recipe Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-[#ffffff] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
          
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#cc7800] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#cc7800] font-medium">{recipe.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{recipe.rating}</span>
                      <span className="text-xs text-[#000000]">({recipe.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#000000] group-hover:text-[#cc7800] transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-[#000000] text-sm mb-4 line-clamp-2">{recipe.description}</p>
                  <div className="flex items-center justify-between text-sm text-[#000000] mb-4">
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
                    <span className="text-sm text-[#000000]">by {recipe.chef}</span>
                    <Link
                      href={`/recipes/${recipe.id}`}
                      className="bg-[#cc7800]/80 hover:bg-[#cc7800] text-[#000000] px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      View Recipe
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
