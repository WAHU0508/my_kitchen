import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Header from "@//components/header"
import Footer from "@//components/footer"
import { client } from "@//sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"
import type { Image as SanityImage } from "sanity"
import { Review } from "@//types/review" 

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImage | undefined) {
  return source ? builder.image(source).url() : "/placeholder.svg"
}

type ReviewPageProps = {
  params: Promise<{ slug: string }>
}

type SlugResult = {
  slug: string
}

export async function generateStaticParams() {
  const slugs: SlugResult[] = await client.fetch(
    `*[_type == "bigAppliance"]{ "slug": slug.current }`
  )
  return slugs.map((s) => ({ slug: s.slug }))
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params

  const review: Review | null = await client.fetch(
    `*[_type == "bigAppliance" && slug.current == $slug][0]{
      _id,
      "slug": slug.current,
      title,
      description,
      image,
      category->{
        title
      },
      date,
      rating,
      author,
      readTime,
      content
    }`,
    { slug }
  )

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
              <Link
                href="/big-appliances"
                className="hover:text-[#cc7800] transition-colors"
              >
                Big Appliances
              </Link>
              <span>/</span>
              <span className="text-gray-900">{review.title}</span>
            </nav>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-[#cc7800] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>{review.category}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-balance">
                {review.title}
              </h1>

              <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#cc7800] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {review.author
                      ?.split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </div>
                  <span>By {review.author}</span>
                </div>
                <span>•</span>
                <span>{review.date}</span>
                <span>•</span>
                <span>{review.readTime}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <span className="font-medium">{review.rating}</span>
                </div>
              </div>
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
              src={urlFor(review.image)}
              alt={review.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="text-xl text-gray-700 leading-relaxed mb-12 p-6 bg-gray-50 rounded-xl border-l-4 border-[#cc7800]">
              {review.content?.introduction}
            </div>

            {/* Content Sections */}
            {review.content?.sections?.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  Pros
                </h3>
                <ul className="space-y-2">
                  {review.content?.pros?.map((pro, index) => (
                    <li
                      key={index}
                      className="text-green-700 flex items-start gap-2"
                    >
                      ✔ {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  Cons
                </h3>
                <ul className="space-y-2">
                  {review.content?.cons?.map((con, index) => (
                    <li
                      key={index}
                      className="text-red-700 flex items-start gap-2"
                    >
                      ✖ {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#cc7800]/10 p-8 rounded-xl border border-[#cc7800]/20 my-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Final Verdict
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {review.content?.verdict}
              </p>
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
