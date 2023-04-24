import createImageUrlBuilder from '@sanity/image-url'
import {definePreview} from 'next-sanity/preview'

import {dataset, projectId} from './env'

export const imageBuilder = createImageUrlBuilder({projectId, dataset})

export const urlForImage = (source) =>
  imageBuilder.image(source).auto('format').fit('max')

export const usePreview = definePreview({projectId, dataset})
