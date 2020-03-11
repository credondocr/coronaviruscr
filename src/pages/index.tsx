import React from 'react'
import { NextPage, GetStaticProps } from 'next'

import { fetchPageSEO, fetchCases, fetchSuspiciousCases } from '../lib/datocms'
import { PageMetaTag, Case, SuspiciousCase } from '../types/content'
import SEO from '../components/seo'
import MainLayout from '../layouts/main'
import Section from '../components/ui/section'
import CasesStats from '../components/cases/stats'
import CasesList from '../components/cases/list'

type HomePageProps = {
  meta: PageMetaTag[]
  suspiciousCases: SuspiciousCase[]
  allCases: Case[]
  recentCases: Case[]
}

const HomePage: NextPage<HomePageProps> = ({
  meta,
  suspiciousCases,
  allCases,
  recentCases,
}) => {
  const filterCases = (casestatus: Case['casestatus']) =>
    allCases.filter((c) => c.casestatus === casestatus)

  const activeCases = filterCases('active')
  const recoveredCases = filterCases('recovered')
  const deadCases = filterCases('dead')

  const lastSuspiciousCasesNumber = suspiciousCases[0].number

  return (
    <>
      <SEO meta={meta} />
      <MainLayout>
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
  const meta = await fetchPageSEO('home')
  const suspiciousCases = await fetchSuspiciousCases({ orderBy: 'date_DESC' })
  const allCases = await fetchCases()
  const recentCases = await fetchCases({ orderBy: 'detected_DESC', first: 5 })

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
