import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Header from "@//components/header"
import Footer from "@//components/footer"

// Local review data
const reviewsData = {
  // ... keep your review objects here
}

// Generate static params for all reviews
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(reviewsData).map((slug) => ({ slug }))
}

// ✅ Explicit prop typing (no PageProps constraint)
interface ReviewPageProps {
  params: {
    slug: string
  }
}

export default function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = params
  const review = reviewsData[slug as keyof typeof reviewsData]

  if (!review) {
    notFound()
  }

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      {/* Header */}
      <div className="w-full relative">
        <div className="w-full fixed top-0 left-0 z-20">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="w-full bg-gradient-to-br from-[#cc7800]/10 to-[#cc7800]/5 pt-[60px]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
              <Link href="/" className="hover:text-[#cc7800] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/big_appliances" className="hover:text-[#cc7800] transition-colors">
                Big Appliances
              </Link>
              <span>/</span>
              <span className="text-gray-900">{review.title}</span>
            </nav>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-[#cc7800] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>{review.category}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{review.title}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image */}
          <div className="aspect-[16/9] relative overflow-hidden rounded-2xl shadow-2xl mb-12">
            <Image
              src={review.image || "/placeholder.svg"}
              alt={review.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-xl text-gray-700 mb-12">{review.content.introduction}</div>

            {review.content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div>
                <h3 className="text-lg font-bold text-green-600">Pros</h3>
                <ul className="list-disc pl-5">
                  {review.content.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-600">Cons</h3>
                <ul className="list-disc pl-5">
                  {review.content.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#cc7800]/10 p-8 rounded-xl border border-[#cc7800]/20 my-12">
              <h3 className="text-2xl font-bold">Final Verdict</h3>
              <p>{review.content.verdict}</p>
            </div>
          </article>

          <div className="flex justify-between items-center pt-12 border-t border-gray-200">
            <Link
              href="/big_appliances"
              className="flex items-center gap-2 text-[#cc7800] hover:text-[#b36b00] font-medium"
            >
              ← Back to All Reviews
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
