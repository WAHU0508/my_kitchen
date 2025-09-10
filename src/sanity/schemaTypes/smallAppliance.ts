import { defineField, defineType } from "sanity";

export default defineType({
  name: "smallAppliance",
  title: "Small Appliance",
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
    defineField({name: "category", title: "Category", type: "reference", to: [{ type: "bigApplianceCategory" }],}),
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({ name: "rating", title: "Rating", type: "number" }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "readTime", title: "Read Time", type: "string" }),

    // Content Section
    defineField({
      name: "content",
      title: "Content",
      type: "object",
      fields: [
        defineField({
          name: "introduction",
          title: "Introduction",
          type: "text",
        }),
        defineField({
          name: "sections",
          title: "Sections",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Section Title",
                  type: "string",
                }),
                defineField({
                  name: "content",
                  title: "Section Content",
                  type: "text",
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "pros",
          title: "Pros",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "cons",
          title: "Cons",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "verdict",
          title: "Verdict",
          type: "text",
        }),
      ],
    }),
  ],
});
