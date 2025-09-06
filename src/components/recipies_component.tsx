"use client"

import { useState } from "react"
import { Heart, Share2, Printer as Print, CheckCircle, ChefHat } from "lucide-react"
import type { Recipe } from "@/types/recipe"

export default function RecipeClient({ recipe }: { recipe: Recipe }) {
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([])
  const [checkedInstructions, setCheckedInstructions] = useState<number[]>([])
  const [isFavorited, setIsFavorited] = useState(false)

  const toggleIngredient = (index: number) => {
    setCheckedIngredients((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const toggleInstruction = (index: number) => {
    setCheckedInstructions((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isFavorited
                  ? "bg-red-100 text-red-700 hover:bg-red-200"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
              {isFavorited ? "Favorited" : "Add to Favorites"}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
              <Print className="w-4 h-4" />
              Print
            </button>
          </div>

          {/* Ingredients */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingredients</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <button
                      onClick={() => toggleIngredient(index)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        checkedIngredients.includes(index)
                          ? "bg-orange-600 border-orange-600 text-white"
                          : "border-gray-300 hover:border-orange-600"
                      }`}
                    >
                      {checkedIngredients.includes(index) && <CheckCircle className="w-3 h-3" />}
                    </button>
                    <span
                      className={`${
                        checkedIngredients.includes(index) ? "line-through text-gray-500" : "text-gray-900"
                      }`}
                    >
                      {ingredient}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>
            <div className="space-y-6">
              {recipe.instructions.map((instruction: string, index: number) => (
                <div key={index} className="flex gap-4">
                  <button
                    onClick={() => toggleInstruction(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors flex-shrink-0 ${
                      checkedInstructions.includes(index)
                        ? "bg-orange-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-orange-600 hover:text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                  <p
                    className={`text-gray-900 leading-relaxed ${
                      checkedInstructions.includes(index) ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Chef&apos;s Tips</h2>
            <div className="bg-orange-50 rounded-xl p-6">
              <ul className="space-y-3">
                {recipe.tips.map((tip: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChefHat className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 space-y-6">
            {/* Recipe Info */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recipe Info</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Prep Time:</span>
                  <span className="font-medium">{recipe.prepTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cook Time:</span>
                  <span className="font-medium">{recipe.cookTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Servings:</span>
                  <span className="font-medium">{recipe.servings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty:</span>
                  <span className="font-medium">{recipe.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Chef:</span>
                  <span className="font-medium">{recipe.chef}</span>
                </div>
              </div>
            </div>

            {/* Nutrition */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Nutrition (per serving)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Calories:</span>
                  <span className="font-medium">{recipe.nutrition.calories}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Protein:</span>
                  <span className="font-medium">{recipe.nutrition.protein}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Carbs:</span>
                  <span className="font-medium">{recipe.nutrition.carbs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fat:</span>
                  <span className="font-medium">{recipe.nutrition.fat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fiber:</span>
                  <span className="font-medium">{recipe.nutrition.fiber}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
