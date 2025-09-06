export type Recipe = {
  _id: number
  title: string
  description: string
  imageUrl: string
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
    calories: number
    protein: string
    carbs: string
    fat: string
    fiber: string
  }
  tips: string[]
}
