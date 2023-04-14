import {createClient} from 'next-sanity'

import {sanityConfig} from './config'

export const getClient = (preview) =>
  preview
    ? createClient({
        projectId: sanityConfig.projectId,
        dataset: sanityConfig.dataset,
        useCdn: false,
        apiVersion: sanityConfig.apiVersion,
        token:
          process.env.SANITY_API_READ_TOKEN ||
          process.env.SANITY_API_WRITE_TOKEN,
      })
    : createClient({
        projectId: sanityConfig.projectId,
        dataset: sanityConfig.dataset,
        apiVersion: sanityConfig.apiVersion,
      })

export function overlayDrafts(docs) {
  const documents = docs || []
  const overlayed = documents.reduce((map, doc) => {
    if (!doc._id) {
      throw new Error('Ensure that `_id` is included in query projection')
    }

    const isDraft = doc._id.startsWith('drafts.')
    const id = isDraft ? doc._id.slice(7) : doc._id
    return isDraft || !map.has(id) ? map.set(id, doc) : map
  }, new Map())

  return Array.from(overlayed.values())
}
