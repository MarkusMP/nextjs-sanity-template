export interface PageProps {
  title: string
  slug?: string
  content?: any[]
}

export type PageQueryParams = {
  slug: string
}
