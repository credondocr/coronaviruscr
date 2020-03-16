import React from 'react'
import { NextPage, GetStaticProps } from 'next'

import * as sdk from '../lib/sdk'
import * as content from '../types/content'
import SEO from '../components/seo'
import MainLayout from '../layouts/main'
import Section from '../components/ui/section'
import CasesStats from '../components/cases/stats'
import RecentNews from '../components/news/recent'

type HomePageProps = {
  meta: sdk.PageMetaTag[]
  reports: content.FormattedReport[]
  recentNews: sdk.News[]
}

const HomePage: NextPage<HomePageProps> = ({ meta, reports, recentNews }) => {
  const [lastReport] = reports

  return (
    <>
      <SEO meta={meta} />
      <MainLayout>
        <Section>
          <CasesStats
            totalCases={lastReport.confirmedCases}
            discardedCases={lastReport.discardedCases}
            activeCases={lastReport.byStatus.active}
            recoveredCases={lastReport.byStatus.recovered}
            deadCases={lastReport.byStatus.recovered}
          />
        </Section>
        <Section title="Noticias recientes">
          <RecentNews recentNews={recentNews} />
        </Section>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = await sdk.fetchPageMetaTags({ name: 'home' })

  const reports = await sdk.fetchReports({
    orderBy: [sdk.ReportOrderBy.date_DESC],
    first: 5,
  })

  const recentNews = await sdk.fetchNews({
    orderBy: [sdk.NewsOrderBy.createdAt_DESC],
    first: 3,
  })

  return {
    props: {
      meta,
      reports,
      recentNews,
    },
  }
}

export default HomePage
