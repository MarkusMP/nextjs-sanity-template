import Image from 'next/image'
import React from 'react'

import {HeaderProps} from '@/types'

import {urlForImage} from '../sanity/sanity'
import Button from './Button'

interface IProps {
  data: HeaderProps
}

const Header = ({data}: IProps) => {
  const image = urlForImage(data.image).url()
  return (
    <header className="fixed flex h-[80px] w-full items-center justify-around">
      <div>
        <Image
          src={image}
          width={200}
          height={60}
          alt={data.image?.alt || ''}
          sizes="(max-width: 200px) 200px"
        />
      </div>
      <ul className="items-cener flex">
        {data.menuItems.map((item) => (
          <li key={item._key}>
            <Button {...item.link} />
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
