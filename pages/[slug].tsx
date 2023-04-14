import Head from 'next/head'
import {notFound} from 'next/navigation'
import {useRouter} from 'next/router'
import {PreviewSuspense} from 'next-sanity/preview'
import {lazy} from 'react'
import * as React from 'react'

import Layout from '../components/Layout'
import Loading from '../components/Loading'
import Page from '../components/Page'
import {revalidateSecret} from '../sanity/env'
import {pageQuery, pageSlugsQuery} from '../sanity/queries'
import {getClient} from '../sanity/sanity.server'
import {PageProps, PageQueryParams} from '../types'

const PreviewPage = lazy(() => import('../components/PreviewPage'))

interface Props {
  data: PageProps
  preview: boolean
  query: string | null
  queryParams: PageQueryParams
}

export default function Slug(props: Props) {
  const {data, preview, query, queryParams} = props
  const router = useRouter()

  if (preview) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewPage data={data} query={query} queryParams={queryParams} />
      </PreviewSuspense>
    )
  }

  if (!router.isFallback && !data) {
    notFound()
  }

  return (
    <Layout preview={preview} queryParams={queryParams}>
      {router.isFallback ? (
        <Loading />
      ) : (
        <>
          <Head>
            <title>{`${data.title}`}</title>
          </Head>
          <Page {...data} />
        </>
      )}
    </Layout>
  )
}

export async function getStaticProps({params, preview = false}) {
  const queryParams: PageQueryParams = {
    slug: params.slug,
  }

  const page = await getClient(preview).fetch(pageQuery, queryParams)

  return {
    props: {
      preview,
      data: page,
      query: preview ? pageQuery : null,
      queryParams: preview ? queryParams : null,
    },
    revalidate: revalidateSecret ? undefined : 60,
  }
}

export async function getStaticPaths() {
  const paths = await getClient(false).fetch(pageSlugsQuery)
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}
