import { defineField, defineType } from "sanity"

export default defineType({
  name: "smallAppliance",
  title: "Small Appliance",
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
  ],
})

