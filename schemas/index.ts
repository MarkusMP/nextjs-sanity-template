import {SchemaTypeDefinition} from 'sanity'

import home from './documents/home'
import notFound from './documents/notFound'
import page from './documents/page'
import sectionBuilder from './objects/sectionBuilder'
import seo from './objects/seo'
import hero from './sections/hero'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [page, seo, sectionBuilder, home, notFound, hero],
}
