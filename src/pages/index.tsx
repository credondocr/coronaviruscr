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
  suspiciousCases: sdk.SuspiciousCase[]
  allCases: sdk.Case[]
  recentCases: sdk.Case[]
}

const HomePage: NextPage<HomePageProps> = ({
  meta,
  suspiciousCases,
  allCases,
  recentCases,
}) => {
  const filterCases = (casestatus: sdk.CaseStatus) =>
    allCases.filter((c) => c.casestatus === casestatus)

  const activeCases = filterCases('active')
  const recoveredCases = filterCases('recovered')
  const deadCases = filterCases('dead')

  const lastSuspiciousCasesNumber = suspiciousCases[0].number

  return (
    <>
      <SEO meta={meta} />
      <MainLayout>
        <Section title="Mapa">
          <CasesMap cases={recentCases} />
        </Section>
        <Section title="Estadísticas generales">
          <CasesStats
            suspiciousCases={lastSuspiciousCasesNumber}
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

  const allCases = await sdk.fetchCases()

  const suspiciousCases = await sdk.fetchSuspiciousCases({
    orderBy: [sdk.SuspiciousCaseOrderBy.date_DESC],
  })

  const recentCases = await sdk.fetchCases({
    orderBy: [sdk.CaseOrderBy.detected_DESC],
    first: 5,
  })

  return {
    props: {
      meta,
      suspiciousCases,
      allCases,
      recentCases,
    },
  }
}

export default HomePage
