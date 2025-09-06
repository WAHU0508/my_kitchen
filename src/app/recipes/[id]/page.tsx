"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Users, ChefHat, ArrowLeft, Heart, Share2, Printer as Print, CheckCircle } from "lucide-react"
import Header from "@//components/header"
import Footer from "@//components/footer"

// Extended recipe data with full details
const recipeDetails = {
  1: {
    id: 1,
    title: "Creamy Garlic Parmesan Pasta",
    description: "Rich and indulgent pasta dish with a velvety garlic parmesan sauce that's ready in just 20 minutes.",
    image: "/creamy-garlic-parmesan-pasta-in-skillet.png",
    rating: 4.8,
    reviews: 127,
    cookTime: "20 min",
    prepTime: "10 min",
    servings: 4,
    difficulty: "Easy",
    category: "Main Courses",
    chef: "Maria Rodriguez",
    ingredients: [
      "1 lb fettuccine pasta",
      "4 cloves garlic, minced",
      "1 cup heavy cream",
      "1 cup freshly grated Parmesan cheese",
      "4 tbsp butter",
      "2 tbsp olive oil",
      "1/2 cup white wine (optional)",
      "Salt and black pepper to taste",
      "Fresh parsley for garnish",
      "Red pepper flakes (optional)",
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook fettuccine according to package directions until al dente.",
      "While pasta cooks, heat olive oil and 2 tbsp butter in a large skillet over medium heat.",
      "Add minced garlic and sauté for 1-2 minutes until fragrant, being careful not to burn.",
      "If using wine, add it now and let it reduce by half, about 2-3 minutes.",
      "Pour in heavy cream and bring to a gentle simmer. Let it reduce slightly, about 3-4 minutes.",
      "Remove from heat and gradually whisk in Parmesan cheese until smooth and creamy.",
      "Add remaining butter and whisk until melted. Season with salt and pepper.",
      "Drain pasta, reserving 1/2 cup pasta water. Add pasta to the sauce.",
      "Toss everything together, adding pasta water if needed to achieve desired consistency.",
      "Serve immediately, garnished with fresh parsley and additional Parmesan cheese.",
    ],
    nutrition: {
      calories: 520,
      protein: "18g",
      carbs: "58g",
      fat: "24g",
      fiber: "3g",
    },
    tips: [
      "Use freshly grated Parmesan for the best flavor and texture",
      "Don't let the garlic burn or it will become bitter",
      "Reserve pasta water - the starch helps bind the sauce",
      "Serve immediately while hot for the best creamy texture",
    ],
  },
  2: {
    id: 2,
    title: "Chocolate Lava Cake",
    description: "Decadent individual chocolate cakes with a molten center that flows like lava when cut open.",
    image: "/chocolate-lava-cake-with-molten-center.png",
    rating: 4.9,
    reviews: 89,
    cookTime: "25 min",
    prepTime: "15 min",
    servings: 2,
    difficulty: "Medium",
    category: "Desserts",
    chef: "Chef Antoine",
    ingredients: [
      "4 oz dark chocolate (70% cocoa), chopped",
      "4 tbsp unsalted butter",
      "2 large eggs",
      "2 tbsp granulated sugar",
      "Pinch of salt",
      "2 tbsp all-purpose flour",
      "Butter for ramekins",
      "Cocoa powder for dusting",
      "Vanilla ice cream for serving",
      "Fresh berries for garnish",
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Butter two 6-oz ramekins and dust with cocoa powder.",
      "Melt chocolate and butter in a double boiler or microwave, stirring until smooth.",
      "In a bowl, whisk eggs and sugar until thick and pale, about 2-3 minutes.",
      "Stir in the melted chocolate mixture and salt until combined.",
      "Fold in flour until just incorporated - don't overmix.",
      "Divide batter between prepared ramekins.",
      "Bake for 12-14 minutes until edges are firm but centers still jiggle slightly.",
      "Let cool for 1 minute, then run a knife around edges to loosen.",
      "Invert onto serving plates and let sit for 10 seconds before lifting ramekins.",
      "Serve immediately with vanilla ice cream and fresh berries.",
    ],
    nutrition: {
      calories: 380,
      protein: "8g",
      carbs: "32g",
      fat: "26g",
      fiber: "4g",
    },
    tips: [
      "Use high-quality dark chocolate for the best flavor",
      "Don't overbake - the center should still be jiggly",
      "Serve immediately for the best molten effect",
      "Can be made ahead and refrigerated, then baked when ready to serve",
    ],
  },
  3: {
    id: 3,
    title: "Mediterranean Quinoa Bowl",
    description: "Fresh and healthy bowl packed with quinoa, roasted vegetables, feta cheese, and tahini dressing.",
    image: "/mediterranean-quinoa-bowl-with-vegetables.png",
    rating: 4.7,
    reviews: 156,
    cookTime: "30 min",
    prepTime: "15 min",
    servings: 2,
    difficulty: "Easy",
    category: "Salads",
    chef: "Elena Kostas",
    ingredients: [
      "1 cup quinoa, rinsed",
      "1 medium zucchini, diced",
      "1 red bell pepper, diced",
      "1 small red onion, sliced",
      "1 cup cherry tomatoes, halved",
      "1/2 cup kalamata olives",
      "4 oz feta cheese, crumbled",
      "1/4 cup fresh parsley, chopped",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "For tahini dressing: 3 tbsp tahini, 2 tbsp lemon juice, 1 clove garlic minced, 2-3 tbsp water",
    ],
    instructions: [
      "Cook quinoa according to package directions. Let cool slightly.",
      "Preheat oven to 425°F (220°C).",
      "Toss zucchini, bell pepper, and red onion with olive oil, salt, and pepper.",
      "Roast vegetables for 20-25 minutes until tender and lightly caramelized.",
      "Meanwhile, make tahini dressing by whisking all ingredients until smooth.",
      "Add water gradually to reach desired consistency.",
      "In serving bowls, layer quinoa, roasted vegetables, and cherry tomatoes.",
      "Top with olives, feta cheese, and fresh parsley.",
      "Drizzle with tahini dressing and serve immediately.",
      "Can be served warm or at room temperature.",
    ],
    nutrition: {
      calories: 420,
      protein: "16g",
      carbs: "48g",
      fat: "20g",
      fiber: "8g",
    },
    tips: [
      "Rinse quinoa thoroughly to remove bitterness",
      "Don't overcook the vegetables - they should retain some texture",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add protein like grilled chicken or chickpeas for a heartier meal",
    ],
  },
  4: {
    id: 4,
    title: "Spicy Korean Fried Chicken",
    description: "Crispy double-fried chicken wings tossed in a sweet and spicy Korean-style glaze.",
    image: "/spicy-korean-fried-chicken-wings.png",
    rating: 4.6,
    reviews: 203,
    cookTime: "45 min",
    prepTime: "20 min",
    servings: 4,
    difficulty: "Medium",
    category: "Main Courses",
    chef: "Kim Min-jun",
    ingredients: [
      "2 lbs chicken wings, split",
      "1 cup all-purpose flour",
      "1/2 cup cornstarch",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1 cup cold water",
      "Oil for frying",
      "For glaze: 1/4 cup gochujang, 3 tbsp soy sauce, 2 tbsp honey, 2 tbsp rice vinegar, 3 cloves garlic minced, 1 tbsp ginger minced",
      "Green onions and sesame seeds for garnish",
    ],
    instructions: [
      "Pat chicken wings dry and season with salt and pepper.",
      "Mix flour, cornstarch, salt, and pepper. Gradually whisk in cold water until smooth.",
      "Heat oil to 325°F (165°C) in a large pot or deep fryer.",
      "Dip wings in batter and fry for 10 minutes. Remove and drain on paper towels.",
      "Increase oil temperature to 375°F (190°C).",
      "Fry wings again for 5-7 minutes until golden and crispy.",
      "Meanwhile, combine all glaze ingredients in a large bowl.",
      "Immediately toss hot wings in the glaze until well coated.",
      "Garnish with sliced green onions and sesame seeds.",
      "Serve immediately while hot and crispy.",
    ],
    nutrition: {
      calories: 480,
      protein: "28g",
      carbs: "24g",
      fat: "32g",
      fiber: "1g",
    },
    tips: [
      "Double frying is key for maximum crispiness",
      "Don't overcrowd the fryer - work in batches",
      "Adjust gochujang amount to control spice level",
      "Serve immediately to maintain crispiness",
    ],
  },
  5: {
    id: 5,
    title: "Classic French Onion Soup",
    description: "Traditional French soup with caramelized onions, rich beef broth, and melted Gruyère cheese.",
    image: "/classic-french-onion-soup-with-cheese.png",
    rating: 4.8,
    reviews: 94,
    cookTime: "1 hr",
    prepTime: "15 min",
    servings: 4,
    difficulty: "Medium",
    category: "Soups",
    chef: "Pierre Dubois",
    ingredients: [
      "6 large yellow onions, thinly sliced",
      "4 tbsp butter",
      "2 tbsp olive oil",
      "1 tsp salt",
      "1/2 tsp sugar",
      "1/2 cup dry white wine",
      "6 cups beef broth",
      "2 bay leaves",
      "4 sprigs fresh thyme",
      "4 thick slices French bread",
      "2 cups grated Gruyère cheese",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Heat butter and oil in a large pot over medium heat.",
      "Add onions, salt, and sugar. Cook, stirring occasionally, for 45-60 minutes until deep golden brown.",
      "Add wine and scrape up any browned bits from the bottom of the pot.",
      "Add beef broth, bay leaves, and thyme. Bring to a boil, then simmer for 20 minutes.",
      "Season with salt and pepper. Remove bay leaves and thyme stems.",
      "Preheat broiler. Toast bread slices until golden on both sides.",
      "Ladle soup into oven-safe bowls. Top each with a slice of toasted bread.",
      "Sprinkle generously with Gruyère cheese.",
      "Broil for 2-3 minutes until cheese is bubbly and golden.",
      "Serve immediately while cheese is still melted.",
    ],
    nutrition: {
      calories: 380,
      protein: "20g",
      carbs: "28g",
      fat: "22g",
      fiber: "4g",
    },
    tips: [
      "Patience is key - properly caramelized onions take time",
      "Use a mix of sweet and yellow onions for depth",
      "Good quality beef broth makes a huge difference",
      "Don't skip the broiling step for the perfect cheese top",
    ],
  },
  6: {
    id: 6,
    title: "Avocado Toast Supreme",
    description: "Elevated avocado toast with poached egg, cherry tomatoes, and everything bagel seasoning.",
    image: "/avocado-toast-with-poached-egg.png",
    rating: 4.5,
    reviews: 78,
    cookTime: "15 min",
    prepTime: "10 min",
    servings: 2,
    difficulty: "Easy",
    category: "Breakfast",
    chef: "Sarah Chen",
    ingredients: [
      "2 slices thick sourdough bread",
      "2 ripe avocados",
      "2 large eggs",
      "1 cup cherry tomatoes, halved",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "1 tsp everything bagel seasoning",
      "1/4 cup microgreens",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "1 tbsp white vinegar for poaching",
    ],
    instructions: [
      "Toast sourdough bread until golden and crispy.",
      "Bring a pot of water to a gentle simmer. Add white vinegar.",
      "Crack each egg into a small bowl, then gently slide into simmering water.",
      "Poach eggs for 3-4 minutes for runny yolks, or longer for firmer yolks.",
      "Meanwhile, mash avocados with lemon juice, salt, and pepper.",
      "Toss cherry tomatoes with olive oil, salt, and pepper.",
      "Spread mashed avocado generously on toasted bread.",
      "Top with cherry tomatoes and microgreens.",
      "Carefully place poached egg on top of each toast.",
      "Sprinkle with everything bagel seasoning and red pepper flakes if desired.",
    ],
    nutrition: {
      calories: 420,
      protein: "16g",
      carbs: "32g",
      fat: "28g",
      fiber: "12g",
    },
    tips: [
      "Use ripe but firm avocados for the best texture",
      "Fresh eggs work best for poaching",
      "Don't skip the lemon juice - it prevents browning",
      "Serve immediately for the best experience",
    ],
  },
}

interface RecipePageProps {
  params: {
    id: string
  }
}

export default function RecipePage({ params }: RecipePageProps) {
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([])
  const [checkedInstructions, setCheckedInstructions] = useState<number[]>([])
  const [isFavorited, setIsFavorited] = useState(false)

  const recipe = recipeDetails[Number(params.id) as keyof typeof recipeDetails]

  if (!recipe) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Recipe Not Found</h1>
          <p className="text-gray-600 mb-8">The recipe you're looking for doesn't exist.</p>
          <Link
            href="/recipes"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            Back to Recipes
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const toggleIngredient = (index: number) => {
    setCheckedIngredients((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const toggleInstruction = (index: number) => {
    setCheckedInstructions((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Recipe Header */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/recipes"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Recipes
            </Link>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {recipe.category}
              </span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                {recipe.difficulty}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">{recipe.title}</h1>
            <p className="text-lg text-white/90 mb-6 text-pretty max-w-2xl">{recipe.description}</p>
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{recipe.rating}</span>
                <span className="text-sm">({recipe.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5" />
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-5 h-5" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Content */}
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
                  {recipe.ingredients.map((ingredient, index) => (
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
                {recipe.instructions.map((instruction, index) => (
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Chef's Tips</h2>
              <div className="bg-orange-50 rounded-xl p-6">
                <ul className="space-y-3">
                  {recipe.tips.map((tip, index) => (
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

      <Footer />
    </div>
  )
}
