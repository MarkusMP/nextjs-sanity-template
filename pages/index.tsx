import {notFound} from 'next/navigation'
import {useRouter} from 'next/router'
import {PreviewSuspense} from 'next-sanity/preview'
import {lazy} from 'react'
import * as React from 'react'

import Layout from '../components/Layout'
import Loading from '../components/Loading'
import Page from '../components/Page'
import {projectId, revalidateSecret} from '../sanity/env'
import {footerQuery, headerQuery, homeQuery} from '../sanity/queries'
import {getClient} from '../sanity/sanity.server'
import {PageProps, PageQueryParams} from '../types'

const PreviewPage = lazy(() => import('../components/PreviewPage'))

interface Props {
  data: PageProps
  preview: boolean
  query: string | null
  queryParams: PageQueryParams
  slug: string
  header: any
  footer: any
}

export default function Home(props: Props) {
  const {data, preview, query, queryParams, slug, header, footer} = props
  const router = useRouter()

  if (preview) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewPage
          data={data}
          query={query}
          queryParams={queryParams}
          slug={slug}
          header={header}
          footer={footer}
        />
      </PreviewSuspense>
    )
  }

  if (!router.isFallback && !data) {
    notFound()
  }

  return (
    <Layout
      preview={preview}
      queryParams={queryParams}
      seo={data.seo}
      slug={slug}
      header={header}
      footer={footer}
    >
      {router.isFallback ? (
        <Loading />
      ) : (
        <>
          <Page {...data} />
        </>
      )}
    </Layout>
  )
}

export async function getStaticProps({preview = false}) {
  if (projectId) {
    const queryParams: PageQueryParams = {
      slug: `/`,
    }

    const homeQueryParams = {
      ...queryParams,
    }
    const page = await getClient(preview).fetch(homeQuery, homeQueryParams)

    const {header, footer}: any = await getClient(preview).fetch(`{
      "header": ${headerQuery},
      "footer": ${footerQuery}
    }`)

    return {
      props: {
        preview,
        data: page,
        query: preview ? homeQuery : null,
        queryParams: preview ? homeQueryParams : null,
        slug: queryParams.slug,
        header,
        footer,
      },
      revalidate: revalidateSecret ? undefined : 60,
    }
  }

  return {
    props: {},
    revalidate: undefined,
  }
}
