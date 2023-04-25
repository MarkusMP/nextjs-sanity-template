import Image from 'next/image'
import React from 'react'

import {urlForImage} from '@/sanity/sanity'
import {FooterProps} from '@/types'

import Button from './Button'

interface IProps {
  data: FooterProps
}

const Footer = ({data}: IProps) => {
  const {image, linksItems} = data

  const imageUrl = urlForImage(image).url()

  return (
    <footer className="flex justify-around">
      <div>
        <Image
          src={imageUrl}
          width={200}
          height={60}
          alt={data.image?.alt || ''}
          sizes="(max-width: 200px) 200px"
        />
      </div>
      <div className="items-cener flex">
        {linksItems.map((item) => (
          <div key={item._key}>
            <h2 className="px-3 py-2 font-bold text-white">{item.title}</h2>
            <ul>
              {item.menuItems.map((items) => (
                <li key={items._key} className="pb-2">
                  <Button {...items.link} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
