import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Header from "@//components/header"
import Footer from "@//components/footer"
import { client } from "@//sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"
import type { Image as SanityImage } from "sanity"
import { Guide } from "@//types/guide" 

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImage | undefined) {
  return source ? builder.image(source).url() : "/placeholder.svg"
}

type GuidePageProps = {
  params: Promise<{ slug: string }>
}

type SlugResult = {
  slug: string
}

export async function generateStaticParams() {
  const slugs: SlugResult[] = await client.fetch(
    `*[_type == "guide"]{ "slug": slug.current }`
  )
  return slugs.map((s) => ({ slug: s.slug }))
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params

  const guide: Guide | null = await client.fetch(
    `*[_type == "guide" && slug.current == $slug][0]{
      _id,
      "slug": slug.current,
      title,
      description,
      image,
      date,
      content
    }`,
    { slug }
  )

  if (!guide) {
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
                href="/guides"
                className="hover:text-[#cc7800] transition-colors"
              >
                Guides
              </Link>
              <span>/</span>
              <span className="text-gray-900">{guide.title}</span>
            </nav>

            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-balance">
                {guide.title}
              </h1>

              <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
                <span>{guide.date}</span>
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
              src={urlFor(guide.image)}
              alt={guide.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <article className="tipse tipse-lg max-w-none">
            {/* Introduction */}
            <div className="text-xl text-gray-700 leading-relaxed mb-12 p-6 bg-gray-50 rounded-xl border-l-4 border-[#cc7800]">
              {guide.content?.introduction}
            </div>
          
            {/* Steps Section */}
            {guide.content?.steps && guide.content.steps.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Steps</h2>
                <ol className="space-y-6 list-decimal list-inside">
                  {guide.content.steps.map((step, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed pl-2">
                      <span className="font-bold text-[#cc7800]">
                        Step {index + 1}:
                      </span>{" "}
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          
            {/* Helpful Tips & Warnings */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  Helpful Tips
                </h3>
                <ul className="space-y-2">
                  {guide.content?.tips?.map((pro, index) => (
                    <li key={index} className="text-green-700 flex items-start gap-2">
                      ✔ {pro}
                    </li>
                  ))}
                </ul>
              </div>
          
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  Warnings
                </h3>
                <ul className="space-y-2">
                  {guide.content?.warnings?.map((con, index) => (
                    <li key={index} className="text-red-700 flex items-start gap-2">
                      ✖ {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div className="flex justify-between items-center pt-12 border-t border-gray-200">
            <Link
              href="/guides"
              className="flex items-center gap-2 text-[#cc7800] hover:text-[#b36b00] font-medium"
            >
              ← Back to All Guides
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
