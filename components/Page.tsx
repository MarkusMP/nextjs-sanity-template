import React from 'react'

import {PageProps} from '../types'
import SectionBuilder from './SectionBuilder'

export default function Page(props: PageProps) {
  const {content} = props

  return (
    <article className="flex flex-col">
      {content && content.length > 0 ? <SectionBuilder rows={content} /> : null}
    </article>
  )
}
