import * as React from 'react'

import {PageQueryParams} from '@/types'

import Alert from './Alert'
import {DebugProvider} from './Debug/DebugProvider'
import Meta from './Meta'

export type LayoutProps = {
  preview: boolean
  queryParams?: PageQueryParams
}

export default function Layout(props) {
  const {preview, queryParams, children} = props

  return (
    <DebugProvider>
      <Meta />
      <div className="min-h-screen bg-black">
        {/* <Header /> */}
        {preview ? <Alert preview={preview} queryParams={queryParams} /> : null}
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </DebugProvider>
  )
}
