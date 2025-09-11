import Image from "next/image"
import Link from "next/link"
import Header from "@//components/header"
import Footer from "@//components/footer"
import { ArrowLeft, Star, Clock, Users } from "lucide-react"
import { notFound } from "next/navigation"
import RecipeClient from "@//components/recipies_component"
import { client } from "@//sanity/lib/client"

type SanityImageWithUrl = {
  asset?: {
    url?: string
  }
}

type Recipe = {
  _id: string
  title: string
  description: string
  image?: SanityImageWithUrl
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

type RecipePageProps = {
  params: Promise<{ slug: string }>
}
type SlugResult = {
  slug: string
}

export async function generateStaticParams() {
  const slugs: SlugResult[] = await client.fetch(
    `*[_type == "recipe"]{ "slug": slug.current }`
  )
  return slugs.map((s) => ({ slug: s.slug }))
}


export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params

  const recipe: Recipe | null = await client.fetch(
  `*[_type=="recipe" && slug.current==$slug][0]{
    _id,
    title,
    description,
    rating,
    reviews,
    cookTime,
    prepTime,
    servings,
    difficulty->title,  // deref to string
    category->title,    // deref to string
    chef->name,         // deref to string
    ingredients,
    instructions,
    nutrition,
    tips,
    image {
      asset->{ url }
    }
  }`,
  { slug }
)

  if (!recipe) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Recipe Header */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src={recipe.image?.asset?.url || "/placeholder.svg"}
          alt={recipe.title}
          fill
          className="object-cover"
        />
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
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
              {recipe.title}
            </h1>
            <p className="text-lg text-white/90 mb-6 text-pretty max-w-2xl">
              {recipe.description}
            </p>
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

      {/* Interactive Client Section */}
      <RecipeClient recipe={recipe} />

      <Footer />
    </div>
  )
}
