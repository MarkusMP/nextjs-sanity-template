import Head from 'next/head'
import * as React from 'react'

export default function Meta({
  description,
  ogImage,
  title,
  noIndex = false,
  canonical,
}: {
  description?: string
  ogImage?: string
  title?: string
  noIndex: boolean
  canonical?: string | null
}) {
  return (
    <Head>
      <title>{title && title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#F9FAFB" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#F9FAFB" />
      <meta
        key="description"
        name="description"
        content={description && description}
      />

      {canonical && <link rel="canonical" href={canonical} key="canonical" />}

      {ogImage && <meta property="og:title" content={title && title} />}
      {ogImage && <meta property="og:image" content={`${ogImage}`} />}
      {ogImage && (
        <meta property="og:description" content={description && description} />
      )}
      {ogImage && canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image:width" content="1200" />}
      {ogImage && <meta property="og:image:height" content="630" />}

      {noIndex && <meta key="robots" name="robots" content="noindex,follow" />}
      {noIndex && (
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
      )}
    </Head>
  )
}
