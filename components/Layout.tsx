import * as React from 'react'

import {urlForImage} from '@/sanity/sanity'
import {Image, PageQueryParams} from '@/types'

import Alert from './Alert'
import {DebugProvider} from './Debug/DebugProvider'
import Header from './Header'
import Meta from './Meta'

export type LayoutProps = {
  preview: boolean
  queryParams?: PageQueryParams
  slug?: string
  seo?: {
    noIndex?: boolean
    titleSEO?: string
    descriptionSEO?: string
    image?: Image
  }
  header?: any
}

export default function Layout(props) {
  const {preview, queryParams, children, seo, slug, header} = props

  const ogImage = seo?.image && urlForImage(seo.image).url()

  return (
    <DebugProvider>
      <Meta
        noIndex={seo.noIndex}
        canonical={
          slug
            ? `${process.env.NEXT_PUTBLIC_SITE_URL}/${slug === '/' ? '' : slug}`
            : null
        }
        title={seo.titleSEO}
        description={seo.descriptionSEO}
        ogImage={ogImage ? ogImage : null}
      />
      <div className="min-h-screen bg-black">
        <Header data={header} />
        {preview ? <Alert preview={preview} queryParams={queryParams} /> : null}
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </DebugProvider>
  )
}
