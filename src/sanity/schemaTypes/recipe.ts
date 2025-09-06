import { defineType, defineField } from "sanity"

export const recipe = defineType({
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5),
    }),
    defineField({
      name: "reviews",
      title: "Reviews Count",
      type: "number",
    }),
    defineField({
      name: "cookTime",
      title: "Cook Time",
      type: "string",
    }),
    defineField({
      name: "prepTime",
      title: "Prep Time",
      type: "string",
    }),
    defineField({
      name: "servings",
      title: "Servings",
      type: "number",
    }),
    defineField({
      name: "difficulty",
      title: "Difficulty",
      type: "string",
      options: {
        list: ["Easy", "Medium", "Hard"],
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "chef",
      title: "Chef",
      type: "string",
    }),
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
      name: "nutrition",
      title: "Nutrition Facts",
      type: "object",
      fields: [
        { name: "calories", title: "Calories", type: "number" },
        { name: "protein", title: "Protein", type: "string" },
        { name: "carbs", title: "Carbs", type: "string" },
        { name: "fat", title: "Fat", type: "string" },
        { name: "fiber", title: "Fiber", type: "string" },
      ],
    }),
    defineField({
      name: "tips",
      title: "Tips",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
})
