import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  date: string;
  image: StaticImageData;
  alt: string;
  slug: string;
};

export default function ArticleCard({
  title,
  description,
  category,
  categoryColor,
  date,
  image,
  alt,
  slug,
}: ArticleCardProps) {
  return (
    <article className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="aspect-[16/10] relative overflow-hidden">
        <Image
          src={image}
          alt={alt}
          width={480}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className={`${categoryColor} text-white px-3 py-1 rounded-full text-xs font-medium`}>
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#cc7800] transition-colors duration-200 text-balance">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-pretty">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{date}</span>
          <Link
            href={slug}
            className="text-[#cc7800] font-medium hover:text-[#b36b00] transition-colors duration-200 flex items-center gap-1"
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
