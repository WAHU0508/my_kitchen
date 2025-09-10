// schemas/bigApplianceCategory.ts
import { defineType, defineField } from "sanity"

export default defineType({
  name: "bigApplianceCategory",
  title: "Big Appliance Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Category Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string", // Blogger can paste emoji or use text
    }),
  ],
})
