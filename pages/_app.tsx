import '@/styles/index.css'

import {Inter} from 'next/font/google'
import * as React from 'react'

const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-inter',
})

export default function App({Component, pageProps}) {
  return (
    <main className={`${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
