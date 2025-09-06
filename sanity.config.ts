'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `/app/sanity/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from '@//sanity/env'
import { schemaTypes } from '@//sanity/schemaTypes'   // ✅ use schemaTypes, not schema
import { structure } from '@//sanity/structure'

export default defineConfig({
  basePath: '/sanity',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema: {
    types: schemaTypes,   // ✅ wrap your schemas properly
  },
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
