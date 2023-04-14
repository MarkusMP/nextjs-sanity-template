export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const title = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_TITLE'
)
export const previewSecret = assertValue(
  process.env.NEXT_PUBLIC_PREVIEW_SECRET,
  'Missing environment variable: NEXT_PUBLIC_PREVIEW_SECRET'
)

export const readToken = process.env.SANITY_API_READ_TOKEN

export const writeToken = process.env.SANITY_API_READ_TOKEN

export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET

function assertValue<T>(value: T | undefined, errorMessage: string): T {
  if (value === undefined) {
    throw new Error(errorMessage)
  }

  return value
}
