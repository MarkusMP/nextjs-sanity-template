import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {media} from 'sanity-plugin-media'

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
    unsplashImageAsset(),
    media(),
  ],
})
