export interface Image {
  _type: string
  alt?: string
  asset: {
    _ref: string
    _type: string
  }
}

export interface PageProps {
  title: string
  slug?: string
  seo: {
    noIndex?: boolean
    titleSEO?: string
    descriptionSEO?: string
    image?: Image
  }
  content?: any[]
}

export type PageQueryParams = {
  slug: string
}
