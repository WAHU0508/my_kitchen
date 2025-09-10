// ./schemas/recipeCategory.ts

import { defineType } from "sanity"

export default defineType({
  name: "recipeCategory",
  title: "Recipe Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(50),
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Emoji or icon to represent this category (e.g. 🍰, 🥗, 🍖)",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Optional: Short description of this category",
    },
  ],
})
