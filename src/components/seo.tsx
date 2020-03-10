import React from 'react'
import Head from 'next/head'

import { SiteInfo } from '../types/content'

const SEO: React.FC<SiteInfo> = ({ title, description, url, imageUrl }) => {
  console.log(imageUrl)
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="url" content={url} />
      <meta name="image" content={imageUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default SEO
