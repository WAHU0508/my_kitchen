import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Header from "@//components/header"
import Footer from "@//components/footer"

// Sample detailed review data - in a real app, this would come from a database
const reviewsData = {
  "best-refrigerators-under-1500-samsung-vs-lg-comparison": {
    id: 1,
    title: "Best Refrigerators Under $1500: Samsung vs LG Comparison",
    description:
      "We tested 8 popular refrigerators to find the best value for families. Compare features, energy efficiency, and storage capacity.",
    image: "/modern-stainless-steel-refrigerator-in-kitchen.png",
    category: "Refrigerators",
    date: "Dec 18, 2024",
    rating: 4.8,
    author: "Sarah Johnson",
    readTime: "12 min read",
    content: {
      introduction:
        "Finding the perfect refrigerator under $1500 can be challenging with so many options available. After extensive testing of 8 popular models from Samsung and LG, we've identified the top performers that offer the best value for families.",
      sections: [
        {
          title: "Testing Methodology",
          content:
            "We evaluated each refrigerator based on energy efficiency, storage capacity, temperature consistency, noise levels, and build quality. Our testing period spanned 30 days in real-world conditions.",
        },
        {
          title: "Samsung RF23R6201SR - Best Overall",
          content:
            "This 23 cubic foot French door refrigerator impressed us with its spacious interior, excellent temperature control, and Energy Star certification. The FlexZone drawer provides versatile storage options, while the external water and ice dispenser adds convenience.",
        },
        {
          title: "LG LTCS24223S - Best Value",
          content:
            "LG's top-freezer model offers exceptional value with 24 cubic feet of storage space. While it lacks some premium features, it excels in reliability and energy efficiency, making it perfect for budget-conscious families.",
        },
      ],
      pros: [
        "Excellent energy efficiency across all models",
        "Spacious storage with flexible configurations",
        "Reliable temperature control",
        "Strong build quality and warranties",
      ],
      cons: [
        "Some models can be noisy during defrost cycles",
        "Limited smart features in budget range",
        "Ice makers may require regular maintenance",
      ],
      verdict:
        "For families seeking the best refrigerator under $1500, the Samsung RF23R6201SR offers the perfect balance of features, efficiency, and reliability. However, the LG LTCS24223S provides exceptional value for those prioritizing storage space over premium features.",
    },
  },
  "top-5-gas-ranges-for-home-chefs-professional-performance": {
    id: 2,
    title: "Top 5 Gas Ranges for Home Chefs: Professional Performance",
    description:
      "Discover which gas ranges deliver restaurant-quality cooking at home. From BTU power to oven capacity, we cover it all.",
    image: "/professional-gas-range-with-multiple-burners.png",
    category: "Ranges & Ovens",
    date: "Dec 16, 2024",
    rating: 4.9,
    author: "Michael Chen",
    readTime: "15 min read",
    content: {
      introduction:
        "Professional-grade gas ranges bring restaurant-quality cooking to your home kitchen. We've tested the top 5 models that deliver exceptional performance, durability, and cooking precision for serious home chefs.",
      sections: [
        {
          title: "What Makes a Professional Gas Range",
          content:
            "Professional gas ranges feature high-BTU burners (typically 15,000+ BTU), heavy-duty construction, precise temperature control, and commercial-grade components designed for intensive use.",
        },
        {
          title: "Thor Kitchen HRG3618U - Best Overall",
          content:
            "This 36-inch range delivers 18,000 BTU on the main burner with a spacious 5.2 cubic foot oven. The stainless steel construction and continuous grates provide both durability and professional aesthetics.",
        },
        {
          title: "Cosmo COS-EPGR366 - Best Value",
          content:
            "Offering impressive performance at a competitive price, this range features 18,000 BTU burners and a convection oven. The cast iron grates and stainless steel finish rival more expensive models.",
        },
      ],
      pros: [
        "High-BTU burners for rapid heating",
        "Professional-grade construction",
        "Precise temperature control",
        "Large oven capacity for multiple dishes",
      ],
      cons: [
        "Requires professional installation",
        "Higher gas consumption",
        "Can generate significant heat in kitchen",
      ],
      verdict:
        "The Thor Kitchen HRG3618U stands out as the best overall choice, combining professional performance with reliable construction. For budget-conscious buyers, the Cosmo COS-EPGR366 offers excellent value without compromising on essential features.",
    },
  },
}

// Generate static params for all reviews
export async function generateStaticParams() {
  return Object.keys(reviewsData).map((slug) => ({
    slug: slug,
  }))
}

// Generate slug from title
// function generateSlug(title: string) {
//   return title
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/(^-|-$)/g, "")
// }

type ReviewPageProps = {
  params: {
    slug: string
  }
}

export default function ReviewPage({ params }: ReviewPageProps) {
  const review = reviewsData[params.slug as keyof typeof reviewsData]

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
              <Link href="/big-appliances" className="hover:text-[#cc7800] transition-colors">
                Big Appliances
              </Link>
              <span>/</span>
              <span className="text-gray-900">{review.title}</span>
            </nav>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-[#cc7800] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>{review.category}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-balance">{review.title}</h1>

              <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#cc7800] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {review.author
                      .split(" ")
                      .map((n) => n[0])
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
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
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
              src={review.image || "/placeholder.svg"}
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
              {review.content.introduction}
            </div>

            {/* Content Sections */}
            {review.content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            ))}

            {/* Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Pros
                </h3>
                <ul className="space-y-2">
                  {review.content.pros.map((pro, index) => (
                    <li key={index} className="text-green-700 flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Cons
                </h3>
                <ul className="space-y-2">
                  {review.content.cons.map((con, index) => (
                    <li key={index} className="text-red-700 flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Final Verdict */}
            <div className="bg-[#cc7800]/10 p-8 rounded-xl border border-[#cc7800]/20 my-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#cc7800]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Final Verdict
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">{review.content.verdict}</p>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t border-gray-200">
            <Link
              href="/big-appliances"
              className="flex items-center gap-2 text-[#cc7800] hover:text-[#b36b00] font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Reviews
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-gray-600">Share:</span>
              <button className="text-gray-400 hover:text-[#cc7800] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-[#cc7800] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex flex-col items-center justify-center">
        <Footer />
      </div>
    </div>
  )
}
