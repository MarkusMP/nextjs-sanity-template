import Link from 'next/link'
import * as React from 'react'

import {LayoutProps} from './Layout'

type AlertProps = LayoutProps

export default function Alert(props: AlertProps) {
  const {preview, queryParams} = props

  const updateTimeUrl = new URLSearchParams()
  updateTimeUrl.set('slug', String(queryParams.slug))

  const nowTimeUrl = new URLSearchParams()
  nowTimeUrl.set('slug', String(queryParams.slug))

  if (!preview) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex h-screen w-screen items-end justify-center text-xs lg:text-sm">
      <div className="pointer-events-auto flex overflow-hidden rounded-t-lg bg-white text-black">
        <Link
          href="/api/exit-preview"
          className="hover:bg-magenta-300 px-4 py-2 transition-colors duration-200"
        >
          Preview{` `}
          <strong>On</strong>
        </Link>
      </div>
    </div>
  )
}
