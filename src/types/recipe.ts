export type Recipe = {
  _id: string
  title: string
  slug?: { current: string }
  description: string
  image?: { asset: { url: string } }
  category?: {
    _id: string
    title: string
    icon?: string
  }
  date?: string
  rating: number
  reviews: number
  cookTime: string
  prepTime?: string
  servings: number
  difficulty: string
  chef: string
  ingredients?: string[]
  instructions?: string[]
  nutrition?: {
    calories: number
    protein: string
    carbs: string
    fat: string
    fiber: string
  }
  tips?: string[]
}
