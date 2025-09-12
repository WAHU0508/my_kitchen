import { defineField, defineType } from "sanity"

export default defineType({
  name: "guide",
  title: "Guide",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({
      name: "content",
      title: "Content",
      type: "object",
      fields: [
        defineField({ name: "introduction", title: "Introduction", type: "text" }),
        defineField({ name: "steps", title: "Steps", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "tips", title: "Helpful Tips", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "warnings", title: "Warnings", type: "array", of: [{ type: "string" }] }),
      ],
    }),
  ],
})
