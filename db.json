import { notFound } from "next/navigation"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

async function getReviewsData() {
  const res = await fetch("http://localhost:3001/reviews", {
    // Makes sure fetch works in SSG/SSR
    cache: "no-store"
  })

  if (!res.ok) throw new Error("Failed to fetch reviews")

  return res.json()
}

export async function generateStaticParams() {
  const reviews = await getReviewsData()
  return reviews.map((review: any) => ({ slug: review.slug }))
}

export default async function ReviewPage({ params }: { params: { slug: string } }) {
  const reviews = await getReviewsData()
  const review = reviews.find((r: any) => r.slug === params.slug)

  if (!review) {
    notFound()
  }

  const content = review.content

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold">{review.title}</h1>
        <p className="text-gray-600">{review.description}</p>
        <Image
          src={review.image || "/placeholder.svg"}
          alt={review.title}
          width={800}
          height={450}
          className="rounded-lg my-8"
        />

        {/* Introduction */}
        <p className="mb-6">{content.introduction}</p>

        {/* Sections */}
        {content.sections.map((section: any, idx: number) => (
          <div key={idx} className="mb-6">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="text-gray-700">{section.content}</p>
          </div>
        ))}

        {/* Pros / Cons */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-green-600">Pros</h3>
            <ul className="list-disc pl-5">
              {content.pros.map((p: string, idx: number) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-red-600">Cons</h3>
            <ul className="list-disc pl-5">
              {content.cons.map((c: string, idx: number) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verdict */}
        <div className="mt-8 p-4 border-l-4 border-[#cc7800] bg-[#cc7800]/10">
          <h3 className="text-xl font-bold">Final Verdict</h3>
          <p>{content.verdict}</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
