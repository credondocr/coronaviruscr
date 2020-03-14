import React from 'react'
import { NextPage, GetStaticProps } from 'next'

import * as sdk from '../lib/sdk'
import SEO from '../components/seo'
import MainLayout from '../layouts/main'
import Section from '../components/ui/section'
import CasesStats from '../components/cases/stats'
import CasesList from '../components/cases/list'
import CasesMap from '../components/cases/map'

type HomePageProps = {
  meta: sdk.PageMetaTag[]
  allCases: sdk.Case[]
  recentCases: sdk.Case[]
  recentNews: sdk.News[]
}

const HomePage: NextPage<HomePageProps> = ({
  meta,
  allCases,
  recentCases,
  recentNews,
}) => {
  const filterCases = (casestatus: sdk.CaseStatus) =>
    allCases.filter((c) => c.casestatus === casestatus)
  const activeCases = filterCases('active')
  const recoveredCases = filterCases('recovered')
  const deadCases = filterCases('dead')
  console.log(recentNews) // TODO: implement recent news blocks cta etc ...
  return (
    <>
      <SEO meta={meta} />
      <MainLayout>
        <Section title="Estadísticas generales">
          <CasesStats
            totalCases={allCases.length}
            activeCases={activeCases.length}
            recoveredCases={recoveredCases.length}
            deadCases={deadCases.length}
          />
        </Section>
        <Section title="Casos recientes">
          <CasesList filters={false} cases={recentCases} />
        </Section>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = await sdk.fetchPageMetaTags({ name: 'home' })

  const allCases = await sdk.fetchCases({ first: 100 })

  const recentCases = await sdk.fetchCases({
    orderBy: [sdk.CaseOrderBy.detected_DESC],
    first: 5,
  })

  const recentNews = await sdk.fetchNews({
    orderBy: [sdk.NewsOrderBy.createdAt_DESC],
    first: 3,
  })

  return {
    props: {
      meta,
      allCases,
      recentCases,
      recentNews,
    },
  }
}

export default HomePage
