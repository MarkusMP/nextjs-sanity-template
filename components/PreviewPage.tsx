import ErrorPage from 'next/error'
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
  slug?: string
}

export default function PreviewPage(props: Props) {
  const {query, queryParams, slug} = props
  const router = useRouter()

  const data = usePreview(null, query, queryParams) || props.data

  if (!router.isFallback && !data) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview queryParams={queryParams} seo={data.seo} slug={slug}>
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
