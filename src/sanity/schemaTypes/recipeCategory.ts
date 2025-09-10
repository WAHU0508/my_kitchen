// schemas/bigApplianceCategory.ts
import { defineType, defineField } from "sanity"

export default defineType({
  name: "recipeCategory",
  title: "Recipe Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Category Title",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string", // Blogger can paste emoji or use text
    }),
  ],
})
