import {SanityDocument, Slug} from 'sanity'

import homeType from '../../schemas/documents/home'
import notFoundType from '../../schemas/documents/notFound'
import pageType from '../../schemas/documents/page'
import {previewSecret} from '../env'

type PreviewDocument = SanityDocument & {
  market?: string
  slug?: Slug
}

export function getPreviewUrl(document: PreviewDocument): string {
  const baseUrl = window.location.origin
  const url = new URL('/api/preview', baseUrl)

  if (previewSecret) {
    url.searchParams.set('secret', previewSecret)
  }

  url.searchParams.set('type', document._type)

  try {
    switch (document._type) {
      case pageType.name:
        url.searchParams.set('slug', document.slug.current!)
        break
      case homeType.name:
        url.searchParams.set('slug', '')
        break
      case notFoundType.name:
        url.searchParams.set('slug', '404')
        break
      default:
        return ``
    }

    return url.toString()
  } catch {
    return ``
  }
}
