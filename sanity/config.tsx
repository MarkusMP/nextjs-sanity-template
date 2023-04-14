import {apiVersion, dataset, projectId} from './env'

export const sanityConfig = {
  apiVersion,
  dataset,
  projectId,
  useCdn:
    typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
}
