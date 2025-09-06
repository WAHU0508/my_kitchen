export type Recipe = {
  id: number
  title: string
  description: string
  image: string
  rating: number
  reviews: number
  cookTime: string
  prepTime: string
  servings: number
  difficulty: string
  category: string
  chef: string
  ingredients: string[]
  instructions: string[]
  nutrition: {
    calories: string
    protein: string
    carbs: string
    fat: string
    fiber: string
  }
  tips: string[]
}
