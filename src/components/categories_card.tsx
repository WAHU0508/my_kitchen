import React, { ReactNode } from "react";
import Link from "next/link'

type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  link: string;
};
export default function Card({ icon, title, description, buttonText, link }: CardProps) {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="aspect-[3/2] bg-gradient-to-br from-[#cc7800]/5 to-[#cc7800]/10 flex items-center justify-center p-4">
        <div className="w-12 h-12 bg-[#cc7800] rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <Link href={link} className="text-[#cc7800] font-medium hover:text-[#b36b00] transition-colors duration-200 flex items-center gap-1 text-sm">
          {buttonText}
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
