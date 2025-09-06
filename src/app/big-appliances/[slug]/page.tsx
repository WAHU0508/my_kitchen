import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Header from "@//components/header"
import Footer from "@//components/footer"
import { client } from "@//sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

type ReviewPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "bigAppliance"]{ "slug": slug.current }`
  )
  return slugs.map((s: any) => ({ slug: s.slug }))
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params

  const review = await client.fetch(
    `*[_type == "bigAppliance" && slug.current == $slug][0]{
      _id,
      title,
      description,
      image,
      category,
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
              src={
                review.image
                  ? urlFor(review.image).width(800).height(450).url()
                  : "/placeholder.svg"
              }
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
            {review.content?.sections?.map(
              (section: any, index: number) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              )
            )}

            {/* Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Pros
                </h3>
                <ul className="space-y-2">
                  {review.content?.pros?.map(
                    (pro: string, index: number) => (
                      <li
                        key={index}
                        className="text-green-700 flex items-start gap-2"
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {pro}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Cons
                </h3>
                <ul className="space-y-2">
                  {review.content?.cons?.map(
                    (con: string, index: number) => (
                      <li
                        key={index}
                        className="text-red-700 flex items-start gap-2"
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {con}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="bg-[#cc7800]/10 p-8 rounded-xl border border-[#cc7800]/20 my-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-[#cc7800]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
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
