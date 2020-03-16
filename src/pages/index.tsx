import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { FaChartLine, FaRegClock } from 'react-icons/fa'

import * as sdk from '../lib/sdk'
import * as content from '../types/content'
import SEO from '../components/seo'
import MainLayout from '../layouts/main'
import Section from '../components/ui/section'
import CasesStats from '../components/cases/stats'
import NewsList from '../components/news/list'

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
        <Section icon={FaChartLine} title="Estadísticas generales">
          <CasesStats
            totalCases={lastReport.confirmedCases}
            discardedCases={lastReport.discardedCases}
            activeCases={lastReport.byStatus.active}
            recoveredCases={lastReport.byStatus.recovered}
            deadCases={lastReport.byStatus.recovered}
          />
        </Section>
        <Section icon={FaRegClock} title="Noticias recientes">
          <NewsList data={recentNews} />
        </Section>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = await sdk.fetchPageMetaTags({ name: 'home' })

  const reports = await sdk.fetchReports({
    orderBy: [sdk.ReportOrderBy.date_DESC],
    first: 1,
  })

  const recentNews = await sdk.fetchNews({
    orderBy: [sdk.NewsOrderBy.createdAt_DESC],
    first: 6,
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
