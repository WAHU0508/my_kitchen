import { client } from "@//sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"
import Image from "next/image"
import Link from "next/link"
import Header from "@//components/header"
import Footer from "@//components/footer"

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return source ? builder.image(source).url() : "/placeholder.svg"
}

type Appliance = {
  _id: string
  title: string
  description?: string
  image?: any
  slug: string
  category?: {
    title: string
  }
}

type Category = {
  title: string
  icon?: string
}

export default async function SmallAppliancesPage() {
  // ✅ fetch appliances
  const smallAppliances: Appliance[] = await client.fetch(
    `*[_type == "smallAppliance"]{
      _id,
      title,
      description,
      image,
      "slug": slug.current,
      category->{
        title
      }
    }`
  )

  // ✅ fetch categories
  const categories: Category[] = await client.fetch(
    `*[_type == "applianceCategory"]{ title, icon }`
  )

  // Add "All Categories" option at start
  const allCategories = [{ title: "All Categories", icon: "📋" }, ...categories]

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <Header />

      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Small Appliances
        </h1>

        {/* Categories filter (client-side) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {allCategories.map((cat) => (
            <span
              key={cat.title}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
            >
              {cat.icon} {cat.title}
            </span>
          ))}
        </div>

        {/* Appliances grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {smallAppliances.map((appliance) => (
            <div
              key={appliance._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={urlFor(appliance.image)}
                alt={appliance.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-[#cc7800] mb-2">
                  {appliance.category?.title}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {appliance.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {appliance.description}
                </p>
                <Link
                  href={`/small_appliances/${appliance.slug}`}
                  className="text-[#cc7800] font-medium hover:text-[#b36b00] flex items-center gap-1"
                >
                  Read Review →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
