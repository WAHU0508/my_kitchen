import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Header from "@//components/header"
import Footer from "@//components/footer"

const reviewsData = {
  "best-coffee-makers-under-200-drip-vs-pour-over-comparison": {
    id: 1,
    title: "Best Coffee Makers Under $200: Drip vs Pour Over Comparison",
    description:
      "We tested 12 popular coffee makers to find the perfect morning brew. Compare features, brewing methods, and flavor profiles.",
    image: "/modern-coffee-maker-brewing-fresh-coffee.png",
    category: "Coffee Makers",
    date: "Dec 18, 2024",
    rating: 4.8,
    author: "James Parker",
    readTime: "12 min read",
    content: {
      introduction:
        "Finding the perfect coffee maker under $200 is all about balancing convenience, brewing method, and flavor. We tested 12 drip and pour-over machines to discover which offer the best results without breaking the bank.",
      sections: [
        {
          title: "Testing Methodology",
          content:
            "We evaluated brewing time, ease of use, flavor extraction, build quality, and cleaning convenience. Each model was tested for consistency over 30 days.",
        },
        {
          title: "Breville Precision Brewer - Best Overall",
          content:
            "This drip coffee maker stood out with precise temperature control, customizable brew modes, and consistent flavor extraction that rivals high-end machines.",
        },
        {
          title: "Chemex Pour-Over - Best Value",
          content:
            "For coffee purists, the Chemex delivers exceptional clarity and smoothness at a fraction of the cost. It requires manual effort but rewards with superior taste.",
        },
      ],
      pros: [
        "Excellent brewing consistency",
        "Wide variety of options under $200",
        "Easy cleaning and maintenance",
        "Strong flavor profiles across drip and pour-over",
      ],
      cons: [
        "Some drip models take longer to brew",
        "Pour-over requires more effort",
        "Glass carafes can be fragile",
      ],
      verdict:
        "If convenience is your priority, the Breville Precision Brewer delivers café-quality coffee automatically. For budget-conscious enthusiasts, the Chemex is unbeatable in flavor and simplicity.",
    },
  },
  "top-5-blenders-for-smoothies-power-meets-performance": {
    id: 2,
    title: "Top 5 Blenders for Smoothies: Power Meets Performance",
    description:
      "Discover which blenders create the smoothest textures and handle tough ingredients. From ice crushing to nut butters.",
    image: "/high-speed-blender-making-green-smoothie.png",
    category: "Blenders",
    date: "Dec 16, 2024",
    rating: 4.9,
    author: "Laura Green",
    readTime: "15 min read",
    content: {
      introduction:
        "From silky smoothies to nut butters, blenders need both power and durability. We tested the top 5 blenders to see which deliver flawless results with the toughest ingredients.",
      sections: [
        {
          title: "What Makes a Great Blender",
          content:
            "We looked at motor power, blade design, durability, and ease of cleaning. The best blenders crush ice smoothly, blend fibrous greens, and last for years.",
        },
        {
          title: "Vitamix E310 - Best Overall",
          content:
            "The Vitamix is the gold standard, offering a 2 HP motor, variable speeds, and unrivaled consistency. It handled everything from kale smoothies to nut butters effortlessly.",
        },
        {
          title: "Ninja Professional 1000 - Best Value",
          content:
            "At a fraction of the price, this blender still delivers strong performance with a 1000-watt motor. While not as durable as Vitamix, it excels in smoothies and ice crushing.",
        },
      ],
      pros: [
        "Powerful motors for tough ingredients",
        "Smooth, consistent textures",
        "Durable build quality",
        "Easy cleaning with dishwasher-safe parts",
      ],
      cons: [
        "Premium models can be pricey",
        "Large jars take up counter space",
        "High-speed blending can be noisy",
      ],
      verdict:
        "For ultimate performance, the Vitamix E310 is unmatched. If you’re looking for great smoothies without the premium price, the Ninja Professional 1000 is an excellent alternative.",
    },
  },
  "air-fryer-buying-guide-crispy-results-without-the-oil": {
    id: 3,
    title: "Air Fryer Buying Guide: Crispy Results Without the Oil",
    description:
      "Find the perfect air fryer for healthier cooking. We review capacity, temperature control, and cooking performance.",
    image: "/compact-air-fryer-with-golden-fries.png",
    category: "Air Fryers",
    date: "Dec 14, 2024",
    rating: 4.7,
    author: "Samantha Lee",
    readTime: "10 min read",
    content: {
      introduction:
        "Air fryers are a game-changer for healthier meals with crispy textures. We tested multiple models to see which ones deliver the best balance of size, performance, and value.",
      sections: [
        {
          title: "Key Features to Consider",
          content:
            "We focused on basket size, temperature range, preset cooking modes, and ease of cleaning. Compact models were compared with larger family-sized units.",
        },
        {
          title: "Philips Premium Airfryer XXL - Best Overall",
          content:
            "This model offers rapid air technology for even cooking and a large capacity perfect for families. Its consistent performance makes it stand out.",
        },
        {
          title: "Cosori Pro LE - Best Value",
          content:
            "Affordable yet powerful, the Cosori delivers crispy fries, chicken, and veggies with intuitive controls and compact design.",
        },
      ],
      pros: [
        "Crispy results with little to no oil",
        "Energy efficient and fast cooking",
        "Multiple sizes available",
        "Healthier alternative to deep frying",
      ],
      cons: [
        "Smaller models may not suit families",
        "Some units can be noisy",
        "Teflon baskets may wear over time",
      ],
      verdict:
        "The Philips Premium Airfryer XXL is the best choice for families, while the Cosori Pro LE is ideal for smaller households seeking value and performance.",
    },
  },
  "stand-mixer-vs-hand-mixer-which-baking-tool-wins": {
    id: 4,
    title: "Stand Mixer vs Hand Mixer: Which Baking Tool Wins?",
    description:
      "Compare the pros and cons of different mixing methods to find what works best for your baking adventures.",
    image: "/professional-stand-mixer-with-dough.png",
    category: "Mixers",
    date: "Dec 12, 2024",
    rating: 4.6,
    author: "Rachel Adams",
    readTime: "8 min read",
    content: {
      introduction:
        "Mixers are essential tools for bakers, but choosing between a hand mixer and stand mixer depends on your baking style and kitchen needs. We compared both to help you decide.",
      sections: [
        {
          title: "Stand Mixer Advantages",
          content:
            "Stand mixers provide powerful motors, large bowl capacity, and hands-free mixing—ideal for bread, dough, and frequent bakers.",
        },
        {
          title: "Hand Mixer Benefits",
          content:
            "Hand mixers are lightweight, affordable, and perfect for quick tasks like whipping cream or mixing batter.",
        },
        {
          title: "Performance Comparison",
          content:
            "Stand mixers dominate heavy-duty tasks, while hand mixers excel in flexibility and storage convenience.",
        },
      ],
      pros: [
        "Stand mixer: Great for heavy doughs",
        "Hand mixer: Compact and affordable",
        "Both: Wide range of attachments available",
        "Versatile for all types of baking tasks",
      ],
      cons: [
        "Stand mixer: Expensive and bulky",
        "Hand mixer: Limited power for dense doughs",
        "Both: Require accessories for advanced tasks",
      ],
      verdict:
        "Choose a stand mixer if you bake often and need power and capacity. Opt for a hand mixer if you want affordability, portability, and simplicity.",
    },
  },
  "best-toasters-for-perfect-bread-2-slice-vs-4-slice-showdown": {
    id: 5,
    title: "Best Toasters for Perfect Bread: 2-Slice vs 4-Slice Showdown",
    description:
      "Explore the features that make great toast, from even browning to bagel settings and smart controls.",
    image: "/stainless-steel-toaster-with-golden-toast.png",
    category: "Toasters",
    date: "Dec 10, 2024",
    rating: 4.8,
    author: "Daniel Brooks",
    readTime: "9 min read",
    content: {
      introduction:
        "Toasters may seem simple, but the best models combine even heating, versatility, and reliability. We compared 2-slice and 4-slice models to find the best for everyday use.",
      sections: [
        {
          title: "Features That Matter",
          content:
            "We reviewed browning consistency, speed, slot width, and extra settings like bagel and reheat functions.",
        },
        {
          title: "Breville Smart Toaster - Best Overall",
          content:
            "This model offers precise browning, lift-and-look functionality, and four slots for family convenience.",
        },
        {
          title: "Cuisinart CPT-160 - Best Value",
          content:
            "A reliable 2-slice toaster with consistent results, wide slots, and simple controls at an affordable price.",
        },
      ],
      pros: [
        "Even browning across slices",
        "Multiple slot options for families",
        "Durable stainless steel designs",
        "Smart functions for added convenience",
      ],
      cons: [
        "Premium models can be pricey",
        "4-slice models take more counter space",
        "Heating elements may wear over time",
      ],
      verdict:
        "The Breville Smart Toaster is the best for families or those who want advanced features. For budget buyers, the Cuisinart CPT-160 delivers solid performance at a lower cost.",
    },
  },
  "food-processor-guide-chopping-slicing-and-shredding-made-easy": {
    id: 6,
    title: "Food Processor Guide: Chopping, Slicing, and Shredding Made Easy",
    description:
      "Master meal prep with these top-rated food processors. Features multiple blades, large capacity, and easy cleanup.",
    image: "/food-processor-with-chopped-vegetables.png",
    category: "Food Processors",
    date: "Dec 8, 2024",
    rating: 4.9,
    author: "Olivia Martinez",
    readTime: "13 min read",
    content: {
      introduction:
        "Food processors simplify meal prep with chopping, slicing, shredding, and pureeing. We reviewed the top models to see which offer the best balance of power, versatility, and ease of cleaning.",
      sections: [
        {
          title: "Essential Features",
          content:
            "We assessed motor power, blade quality, bowl size, and safety features. The best models handled everything from dough to vegetables with ease.",
        },
        {
          title: "Cuisinart DFP-14BCNY - Best Overall",
          content:
            "A powerful 720-watt motor and 14-cup capacity make this model ideal for large families and serious home cooks.",
        },
        {
          title: "Hamilton Beach 10-Cup - Best Value",
          content:
            "Compact and affordable, this processor still offers reliable chopping and slicing with dishwasher-safe parts.",
        },
      ],
      pros: [
        "Cuts prep time significantly",
        "Handles multiple kitchen tasks",
        "Large-capacity options available",
        "Dishwasher-safe parts for easy cleaning",
      ],
      cons: [
        "Premium models can be bulky",
        "Sharp blades require careful handling",
        "May take up counter space",
      ],
      verdict:
        "The Cuisinart DFP-14BCNY is the best for versatility and performance, while the Hamilton Beach 10-Cup is perfect for smaller kitchens on a budget.",
    },
  },
}

type ReviewPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(reviewsData).map((slug) => ({
    slug,  // ✅ Fixed: top level parameter
  }));
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params;  // ✅ Await the params promise
  const review = reviewsData[slug as keyof typeof reviewsData];

  if (!review) {
    notFound();
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

            <div className="bg-[#cc7800]/10 p-8 rounded-xl border border-[#cc7800]/20 my-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#cc7800]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Final Verdict
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">{review.content.verdict}</p>
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
