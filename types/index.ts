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

export interface HeaderProps {
  image: Image
  menuItems: MenuItem[]
}

interface MenuItem {
  _key: string
  _type: string
  children: null | Link
  link: Link
}

export type Link = {
  text?: string
  url?: string
  reference?: {
    slug?: string
    title?: string
  }
}
