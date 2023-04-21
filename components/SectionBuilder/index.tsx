import React from 'react'
import {KeyedObject, TypedObject} from 'sanity'

import Container from '../Container'

type PageBuilderProps = {
  rows: (KeyedObject & TypedObject)[]
}

const ROWS = {
  hero: React.lazy(() => import('./Hero')),
}

export default function PageBuilder(props: PageBuilderProps) {
  const {rows} = props

  if (!rows?.length) {
    return null
  }

  return (
    <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
      {rows.map((row, rowIndex) => {
        if (row._type && ROWS[row._type]) {
          const Row = ROWS[row._type]
          return <Row key={row._key} index={rowIndex} {...row} />
        }
        return (
          <div key={row._key}>
            <Container className="py-5">
              <p className="text-center text-red-500">
                No component found for <code>{row._type}</code>
              </p>
            </Container>
          </div>
        )
      })}
    </div>
  )
}
