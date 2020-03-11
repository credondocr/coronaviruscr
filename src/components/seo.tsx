import React from 'react'
import Head from 'next/head'
import { renderMetaTags } from 'react-datocms'

import { PageMetaTag } from '../types/content'

type SEOProps = {
  meta: PageMetaTag[]
}

const SEO: React.FC<SEOProps> = ({ meta }) => {
  return <Head>{renderMetaTags(meta)}</Head>
}

export default SEO
