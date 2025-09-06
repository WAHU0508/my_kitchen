import { StructureResolver } from "sanity/structure"

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Big Appliances")
        .child(S.documentTypeList("bigAppliance").title("Big Appliances")),

      S.listItem()
        .title("Small Appliances")
        .child(S.documentTypeList("smallAppliance").title("Small Appliances")),

      S.listItem()
        .title("Recipes")
        .child(S.documentTypeList("recipe").title("Recipes")),

      // 👇 Include any default document types that aren’t explicitly handled above
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["bigAppliance", "smallAppliance", "recipe"].includes(
            listItem.getId() || ""
          )
      ),
    ])
