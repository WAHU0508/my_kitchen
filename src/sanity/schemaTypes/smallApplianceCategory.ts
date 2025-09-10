
// schemas/smallApplianceCategory.ts
import { defineType, defineField } from "sanity"

export default defineType({
  name: "smallApplianceCategory",
  title: "Small Appliance Category",
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
