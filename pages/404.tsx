import Head from 'next/head'
import {useRouter} from 'next/router'
import {PreviewSuspense} from 'next-sanity/preview'
import {lazy} from 'react'
import * as React from 'react'

import Layout from '../components/Layout'
import Loading from '../components/Loading'
import Page from '../components/Page'
import {revalidateSecret} from '../sanity/env'
import {notFoundQuery} from '../sanity/queries'
import {getClient} from '../sanity/sanity.server'
import {PageProps, PageQueryParams} from '../types'

const PreviewPage = lazy(() => import('../components/PreviewPage'))

interface Props {
  data: PageProps
  preview: boolean
  query: string | null
  queryParams: PageQueryParams
}

export default function Custom404(props: Props) {
  const {data, preview, query, queryParams} = props
  const router = useRouter()

  if (preview) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewPage data={data} query={query} queryParams={queryParams} />
      </PreviewSuspense>
    )
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

export async function getStaticProps({preview = false}) {
  const queryParams: PageQueryParams = {
    slug: `404`,
  }

  const notFoundQueryParams = {
    ...queryParams,
  }
  const page = await getClient(preview).fetch(
    notFoundQuery,
    notFoundQueryParams
  )

  return {
    props: {
      preview,
      data: page,
      query: preview ? notFoundQuery : null,
      queryParams: preview ? notFoundQueryParams : null,
    },
    revalidate: revalidateSecret ? undefined : 60,
  }
}
