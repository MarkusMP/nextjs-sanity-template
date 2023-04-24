import groq from 'groq'

const pageFields = groq`
  title,
  "slug": slug.current,
  seo {
    noIndex,
    titleSEO,
    descriptionSEO,
    image
  },
  content[]{
    ...,
  }
`

export const headerQuery = groq`
*[_type == "header"]|order(_updatedAt desc)[0]{
    image,
    menuItems[(defined(link.text) && defined(link.url)) || defined(link.reference)] {
       ...,
      _key,
      "link": link{
        url,
        text,
        reference->{
          title,
          "slug": slug.current
        }
      },
      children
  }
}
`

export const previewBySlugQuery = groq`
*[_type in ["page", "article"] && slug.current == $slug][0].slug.current
`
export const homeQuery = groq`
*[_type == "home"]|order(_updatedAt desc)[0]{
  ${pageFields}
}`
export const notFoundQuery = groq`
*[_type == "notFound"]|order(_updatedAt desc)[0]{
  ${pageFields}
}`

export const pageQuery = groq`
*[_type == "page" && slug.current == $slug] | order(_updatedAt desc) [0] {
  ${pageFields}
}`

export const pageSlugsQuery = groq`
*[_type == "page" && defined(slug.current)].slug.current
`
