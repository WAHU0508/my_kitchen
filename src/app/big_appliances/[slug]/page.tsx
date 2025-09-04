import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Header from "@//components/header"
import Footer from "@//components/footer"

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
  "dishwasher-buying-guide-quiet-efficient-and-reliable": {
    id: 3,
    title: "Dishwasher Buying Guide: Quiet, Efficient, and Reliable",
    description:
      "Find the perfect dishwasher for your kitchen. We review noise levels, cleaning performance, and energy efficiency.",
    image: "/modern-built-in-dishwasher-with-open-door.png",
    category: "Dishwashers",
    date: "Dec 14, 2024",
    rating: 4.7,
    author: "Emily Rodriguez",
    readTime: "10 min read",
    content: {
      introduction:
        "Choosing the right dishwasher involves balancing performance, efficiency, and noise levels. Our comprehensive guide reviews the top models to help you find the perfect fit for your kitchen and lifestyle.",
      sections: [
        {
          title: "Key Features to Consider",
          content:
            "Modern dishwashers offer various wash cycles, adjustable racks, and energy-efficient options. We evaluated models based on cleaning performance, noise levels, and water efficiency.",
        },
        {
          title: "Bosch 300 Series - Best Overall",
          content:
            "This dishwasher excels in quiet operation at just 44 dB, while delivering exceptional cleaning performance. The flexible rack system accommodates various dish sizes and shapes.",
        },
        {
          title: "Whirlpool WDT730PAHZ - Best Value",
          content:
            "Offering solid performance at an affordable price, this model features a soil sensor and multiple wash cycles. The stainless steel tub ensures durability and better drying.",
        },
      ],
      pros: [
        "Whisper-quiet operation under 45 dB",
        "Excellent cleaning performance on all dish types",
        "Energy Star certified for efficiency",
        "Flexible loading options with adjustable racks",
      ],
      cons: [
        "Premium models can be expensive",
        "Some cycles take longer for thorough cleaning",
        "Installation may require professional help",
      ],
      verdict:
        "The Bosch 300 Series stands out for its quiet operation and reliable performance, making it ideal for open-concept kitchens. For budget-conscious buyers, the Whirlpool WDT730PAHZ offers excellent value without sacrificing essential features.",
    },
  },
  "french-door-vs-side-by-side-which-refrigerator-style-wins": {
    id: 4,
    title: "French Door vs Side-by-Side: Which Refrigerator Style Wins?",
    description:
      "Compare the pros and cons of different refrigerator configurations to find what works best for your family.",
    image: "/french-door-refrigerator-with-water-dispenser.png",
    category: "Refrigerators",
    date: "Dec 12, 2024",
    rating: 4.6,
    author: "David Kim",
    readTime: "8 min read",
    content: {
      introduction:
        "Refrigerator configuration significantly impacts daily kitchen workflow. We compare French door and side-by-side models to help you choose the style that best fits your needs and space.",
      sections: [
        {
          title: "French Door Advantages",
          content:
            "French door refrigerators offer wide shelves perfect for large platters and party trays. The bottom freezer drawer provides easy access to fresh foods at eye level.",
        },
        {
          title: "Side-by-Side Benefits",
          content:
            "Side-by-side models excel in narrow kitchens where door swing space is limited. They offer convenient access to both fresh and frozen foods without bending.",
        },
        {
          title: "Storage Capacity Comparison",
          content:
            "French door models typically offer more usable fresh food space, while side-by-side units provide better freezer organization with multiple shelves and bins.",
        },
      ],
      pros: [
        "French door: Wide shelves for large items",
        "Side-by-side: Narrow door swing requirement",
        "Both styles available in various sizes",
        "Energy efficient options in both categories",
      ],
      cons: [
        "French door: Requires more clearance space",
        "Side-by-side: Narrower shelves limit large items",
        "Premium features increase cost significantly",
      ],
      verdict:
        "Choose French door for maximum fresh food storage and wide shelf space. Opt for side-by-side if you have limited door clearance or prefer easy freezer access without bending.",
    },
  },
  "induction-vs-gas-cooktops-the-ultimate-cooking-showdown": {
    id: 5,
    title: "Induction vs Gas Cooktops: The Ultimate Cooking Showdown",
    description:
      "Explore the benefits and drawbacks of induction and gas cooking to make the right choice for your kitchen.",
    image: "/induction-cooktop-with-pans-cooking.png",
    category: "Cooktops",
    date: "Dec 10, 2024",
    rating: 4.8,
    author: "Chef Maria Santos",
    readTime: "11 min read",
    content: {
      introduction:
        "The choice between induction and gas cooktops affects cooking performance, energy efficiency, and kitchen safety. Our detailed comparison helps you understand which technology suits your cooking style.",
      sections: [
        {
          title: "Cooking Performance",
          content:
            "Induction offers precise temperature control and rapid heating, while gas provides visual flame control and works with all cookware types. Both excel in different cooking techniques.",
        },
        {
          title: "Energy Efficiency",
          content:
            "Induction cooktops transfer 85-90% of energy directly to cookware, making them highly efficient. Gas cooktops lose more heat to the surrounding air but offer lower operating costs in many regions.",
        },
        {
          title: "Safety and Maintenance",
          content:
            "Induction surfaces stay cooler and offer automatic shut-off features. Gas cooktops require proper ventilation and regular cleaning of burner components.",
        },
      ],
      pros: [
        "Induction: Precise control and energy efficiency",
        "Gas: Universal cookware compatibility",
        "Both: Professional cooking capabilities",
        "Induction: Enhanced safety features",
      ],
      cons: [
        "Induction: Requires compatible cookware",
        "Gas: Higher heat loss and safety concerns",
        "Both: Professional installation recommended",
      ],
      verdict:
        "Choose induction for precision cooking, energy efficiency, and safety. Select gas if you prefer visual flame control and have existing compatible cookware.",
    },
  },
  "best-built-in-ovens-for-baking-enthusiasts": {
    id: 6,
    title: "Best Built-in Ovens for Baking Enthusiasts",
    description:
      "Perfect your baking with these top-rated built-in ovens. Features even heating, precise temperature control, and more.",
    image: "/built-in-wall-oven-with-baked-goods.png",
    category: "Ranges & Ovens",
    date: "Dec 8, 2024",
    rating: 4.9,
    author: "Baker Jennifer Lee",
    readTime: "13 min read",
    content: {
      introduction:
        "Serious baking requires precise temperature control and even heat distribution. We've tested the top built-in ovens to find models that deliver professional-quality results for home bakers.",
      sections: [
        {
          title: "Essential Baking Features",
          content:
            "The best baking ovens offer true convection, precise temperature control, and multiple rack positions. Steam injection and proofing modes enhance versatility for bread baking.",
        },
        {
          title: "Miele H6780BP - Best Overall",
          content:
            "This premium oven features MoisturePlus technology and precise temperature control within 5°F. The large capacity accommodates multiple baking sheets simultaneously.",
        },
        {
          title: "Bosch HBL8451UC - Best Value",
          content:
            "Offering excellent baking performance at a competitive price, this oven includes true European convection and a temperature probe for perfect results.",
        },
      ],
      pros: [
        "Precise temperature control for consistent results",
        "True convection for even heat distribution",
        "Multiple rack positions for batch baking",
        "Steam and proofing modes for bread making",
      ],
      cons: [
        "Premium models require significant investment",
        "Installation requires electrical and cabinet modifications",
        "Learning curve for advanced features",
      ],
      verdict:
        "The Miele H6780BP delivers unmatched baking precision and versatility for serious enthusiasts. The Bosch HBL8451UC provides excellent performance and features at a more accessible price point.",
    },
  },
}

// ✅ Use your own prop typing (don’t extend PageProps)
type ReviewPageProps = {
  params: {
    slug: string
  }
}

// ✅ Next.js expects this to return an array of objects with `slug`
export async function generateStaticParams() {
  return Object.keys(reviewsData).map((slug) => ({ slug }))
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
