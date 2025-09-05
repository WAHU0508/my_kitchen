import React from "react";
import ArticleCard from "./articles_card";
import Link from "next/link"
import hand_mixer_img from "@//assets/hand_mixer.png";
import chicken_img from "@//assets/chicken.png";
import kitchen_tools_img from "@//assets/kitchen_tools.png";

export const articlesData = [
  {
    id: 1,
    title: "Best Stand Mixers Under $200: KitchenAid vs Cuisinart",
    description:
      "We tested 5 popular stand mixers to find the best value for home bakers. Here’s our detailed comparison...",
    category: "Review",
    categoryColor: "bg-[#cc7800]",
    date: "Dec 15, 2024",
    image: hand_mixer_img,
    alt: "Stand Mixer Review",
    slug: "/articles/stand-mixers-under-200",
  },
  {
    id: 2,
    title: "Perfect Air Fryer Chicken Wings: Crispy Every Time",
    description:
      "Learn the secret to achieving restaurant-quality crispy wings using your air fryer with this foolproof recipe...",
    category: "Recipe",
    categoryColor: "bg-green-600",
    date: "Dec 12, 2024",
    image: chicken_img,
    alt: "Air Fryer Chicken Wings",
    slug: "/articles/air-fryer-chicken-wings",
  },
  {
    id: 3,
    title: "Essential Kitchen Tools Every Home Cook Needs",
    description:
      "From basic knives to specialty gadgets, discover the must-have tools that will transform your cooking...",
    category: "Guide",
    categoryColor: "bg-blue-600",
    date: "Dec 10, 2024",
    image: kitchen_tools_img,
    alt: "Essential Kitchen Tools",
    slug: "/articles/kitchen-tools-guide",
  },
];


export default function ArticlesSection() {
  return (
    <div className="w-full py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">Featured Articles</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Latest reviews and recipes to inspire your culinary journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articlesData.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/articles"
            className="bg-[#cc7800] hover:bg-[#b36b00] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg inline-block"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
