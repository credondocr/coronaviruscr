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
    </Head>
  )
}

export default SEO
