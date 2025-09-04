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
  id: number
  slug: string
  title: string
  description: string
  image?: string
  content: ReviewContent
}
