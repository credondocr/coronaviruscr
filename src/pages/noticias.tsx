import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { FaNewspaper } from 'react-icons/fa'

import * as sdk from '../lib/sdk'
import SEO from '../components/seo'
import MainLayout from '../layouts/main'
import Section from '../components/ui/section'
import NewsList from '../components/news/list'

type NewsPageProps = {
  meta: sdk.PageMetaTag[]
  news: sdk.News[]
}

const NewsPage: NextPage<NewsPageProps> = ({ meta, news }) => {
  return (
    <>
      <SEO meta={meta} />
      <MainLayout>
        <Section icon={FaNewspaper} title="Noticias">
          <NewsList data={news} />
        </Section>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = await sdk.fetchPageMetaTags({ name: 'news' })
  const news = await sdk.fetchNews({
    first: 100,
    orderBy: [sdk.NewsOrderBy.createdAt_DESC],
  })

  return {
    props: {
      meta,
      news,
    },
  }
}

export default NewsPage
