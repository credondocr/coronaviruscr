import React from 'react'
import Head from 'next/head'

import { Meta } from '../types/content'

const SEO: React.FC<Meta> = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="url" content={url} />
      <meta name="image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/images/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta name="msapplication-TileColor" content="#1f1f23" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#4ad0fb" />
    </Head>
  )
}

export default SEO
