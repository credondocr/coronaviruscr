import React from 'react'
import { NextPage, GetStaticProps } from 'next'

import { fetchPageSEO, fetchCases } from '../lib/datocms'
import { PageMetaTag, Case } from '../types/content'
import SEO from '../components/seo'
import MainLayout from '../layouts/main'
import Section from '../components/ui/section'
import CasesList from '../components/cases/list'

type CasesPageProps = {
  meta: PageMetaTag[]
  cases: Case[]
}

const CasesPage: NextPage<CasesPageProps> = ({ meta, cases }) => {
  return (
    <>
      <SEO meta={meta} />
      <MainLayout>
        <Section title="Lista de casos">
          <CasesList cases={cases} />
        </Section>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const meta = await fetchPageSEO('cases')
  const cases = await fetchCases({ orderBy: 'detected_ASC' })

  return {
    props: {
      meta,
      cases,
    },
  }
}

export default CasesPage
