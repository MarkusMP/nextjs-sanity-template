import ErrorPage from 'next/error'
import Head from 'next/head'
import {useRouter} from 'next/router'
import * as React from 'react'

import {usePreview} from '../sanity/sanity'
import {PageProps, PageQueryParams} from '../types'
import Layout from './Layout'
import Loading from './Loading'
import Page from './Page'

interface Props {
  data: PageProps
  query: string | null
  queryParams: PageQueryParams
}

export default function PreviewPage(props: Props) {
  const {query, queryParams} = props
  const router = useRouter()

  const data = usePreview(null, query, queryParams) || props.data

  if (!router.isFallback && !data) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview queryParams={queryParams}>
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