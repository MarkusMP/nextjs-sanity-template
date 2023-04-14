import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {apiVersion, dataset, projectId, title} from './sanity/env'
import {structure} from './sanity/structure'
import {defaultDocumentNode} from './sanity/structure/defaultDocumentNode'
import {schema} from './schemas'

export default defineConfig({
  basePath: '/studio',
  dataset,
  projectId,
  schema,
  title,

  plugins: [
    deskTool({
      structure: (S, context) => structure(S, context),
      defaultDocumentNode,
    }),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
