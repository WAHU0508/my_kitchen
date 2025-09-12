import type { Image } from "sanity"

export type GuideContent = {
  introduction: string
  steps: string[]
  tips: string[]
  warnings: string[]
}

export type Guide = {
  _id: string
  slug: string
  title: string
  description: string
  image?: Image
  date: string
  content: GuideContent
}
