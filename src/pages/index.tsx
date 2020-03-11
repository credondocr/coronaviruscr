import React from 'react'
import { NextPage, GetStaticProps } from 'next'

import { fetchPageSEO, fetchCases } from '../lib/datocms'
import { PageMetaTag, Case } from '../types/content'
import SEO from '../components/seo'
import MainLayout from '../layouts/main'
import Section from '../components/ui/section'
import CasesStats from '../components/cases/stats'
import CasesList from '../components/cases/list'

type HomePageProps = {
  meta: PageMetaTag[]
  cases: Case[]
}

const HomePage: NextPage<HomePageProps> = ({ meta, cases }) => {
  const filterCases = (casestatus: Case['casestatus']) =>
    cases.filter((c) => c.casestatus === casestatus)

  const activeCases = filterCases('active')
  const recoveredCases = filterCases('recovered')
  const deadCases = filterCases('dead')

  return (
    <>
      <SEO meta={meta} />
      <MainLayout>
        <Section title="Estadísticas generales">
          <CasesStats
            totalCases={cases.length}
            activeCases={activeCases.length}
            recoveredCases={recoveredCases.length}
            deadCases={deadCases.length}
          />
        </Section>
        <Section title="Casos recientes">
          <CasesList filters={false} cases={cases} />
        </Section>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = await fetchPageSEO('home')
  const cases = await fetchCases({ orderBy: 'detected_DESC', first: 5 })

  return {
    props: {
      meta,
      cases,
    },
  }
}

export default HomePage
