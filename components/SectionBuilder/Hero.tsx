import React from 'react'
import {KeyedObject, TypedObject} from 'sanity'

import Container from '../Container'

type HeroProps = KeyedObject &
  TypedObject & {
    title?: string
  }

const Hero = (props: HeroProps) => {
  const {title} = props
  return (
    <section className="flex min-h-screen items-center">
      <Container>
        {title ? (
          <h1 className=" text-center text-6xl font-bold text-white">
            {title}
          </h1>
        ) : null}
      </Container>
    </section>
  )
}

export default Hero
