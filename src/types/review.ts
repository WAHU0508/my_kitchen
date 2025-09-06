export type ReviewSection = {
  title: string
  content: string
}

export type ReviewContent = {
  introduction: string
  sections: ReviewSection[]
  pros: string[]
  cons: string[]
  verdict: string
}

export type Review = {
  _id: string
  slug: string
  title: string
  description: string
  image?: any // keep it loose since Sanity image type is object
  category: string
  date: string
  rating: number
  author: string
  readTime: string
  content: ReviewContent
}
