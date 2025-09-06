import { defineField, defineType } from "sanity"

export default defineType({
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "rating", title: "Rating", type: "number" }),
    defineField({ name: "reviews", title: "Reviews Count", type: "number" }),
    defineField({ name: "prepTime", title: "Prep Time", type: "string" }),
    defineField({ name: "cookTime", title: "Cook Time", type: "string" }),
    defineField({ name: "servings", title: "Servings", type: "string" }),
    defineField({ name: "difficulty", title: "Difficulty", type: "string" }),
    defineField({ name: "chef", title: "Chef", type: "string" }),

    defineField({
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "instructions",
      title: "Instructions",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "tips",
      title: "Tips",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "nutrition",
      title: "Nutrition",
      type: "object",
      fields: [
        { name: "calories", title: "Calories", type: "string" },
        { name: "protein", title: "Protein", type: "string" },
        { name: "carbs", title: "Carbs", type: "string" },
        { name: "fat", title: "Fat", type: "string" },
        { name: "fiber", title: "Fiber", type: "string" },
      ],
    }),
  ],
})

