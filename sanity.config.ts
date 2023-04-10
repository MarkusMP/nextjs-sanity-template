import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

const BASE_PATH = '/studio'

export default defineConfig({
  basePath: `${BASE_PATH}`,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  plugins: [deskTool(), visionTool({defaultApiVersion: '2023-04-11'})],
})
