import React from 'react'
import Head from 'next/head'
import { renderMetaTags, SeoMetaTagType } from 'react-datocms'

import * as sdk from '../lib/sdk'

type SEOProps = {
  meta: sdk.PageMetaTag[]
}

const SEO: React.FC<SEOProps> = ({ meta }) => {
  return <Head>{renderMetaTags(meta as SeoMetaTagType[])}</Head>
}

export default SEO
