import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { FaChartLine } from 'react-icons/fa'

import * as sdk from '../lib/sdk'
import * as content from '../types/content'
import SEO from '../components/seo'
import MainLayout from '../layouts/main'
import Section from '../components/ui/section'
import CasesStats from '../components/cases/stats'

type HomePageProps = {
  meta: sdk.PageMetaTag[]
  reports: content.FormattedReport[]
}

const HomePage: NextPage<HomePageProps> = ({ meta, reports }) => {
  const lastReport = reports[reports.length - 1]

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
            deadCases={lastReport.byStatus.deceased}
            reports={reports}
          />
        </Section>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = await sdk.fetchPageMetaTags({ name: 'home' })

  const reports = await sdk.fetchReports({
    orderBy: [sdk.ReportOrderBy.date_DESC],
    first: 100,
  })

  return {
    props: {
      meta,
      reports: reports.reverse(),
    },
  }
}

export default HomePage
