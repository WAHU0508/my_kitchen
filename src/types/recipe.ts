// types/recipe.ts
export type Recipe = {
  title: string
  description: string
  image?: string
  category: string
  difficulty: string
  rating: number
  reviews: number
  cookTime: string
  prepTime: string
  servings: number
  chef: string
  nutrition: {
    calories: string
    protein: string
    carbs: string
    fat: string
    fiber: string
  }
  ingredients: string[]
  instructions: string[]
  tips: string[]
}
