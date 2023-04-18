import type {NextApiRequest, NextApiResponse} from 'next'

import {previewSecret} from '../../sanity/env'
import {previewBySlugQuery} from '../../sanity/queries'
import {getClient} from '../../sanity/sanity.server'

function redirectToPreview(res: NextApiResponse, Location: string, data = {}) {
  res.setPreviewData(data)
  res.writeHead(307, {Location})
  return res.end()
}

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.preview && previewSecret && req.query.secret !== previewSecret) {
    return res.status(401).json({message: 'Invalid secret'})
  }

  if (!req.query.slug) {
    return redirectToPreview(res, '/')
  }

  if (req.query.slug === '404') {
    return redirectToPreview(res, `/404`)
  }

  const pageSlug = await getClient(true).fetch(previewBySlugQuery, {
    slug: req.query.slug,
  })

  if (!pageSlug) {
    return res.status(401).json({message: 'Invalid slug'})
  }

  switch (req.query.type) {
    case 'page':
      return redirectToPreview(res, `/${pageSlug}`)
    case 'home':
      return redirectToPreview(res, `/`)
    case 'notFound':
      return redirectToPreview(res, `/404`)
    default:
      return redirectToPreview(res, `/${pageSlug}`)
  }
}
