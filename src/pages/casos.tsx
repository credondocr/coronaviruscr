import React from 'react'
import { NextPage, GetStaticProps } from 'next'

import * as sdk from '../lib/sdk'
import SEO from '../components/seo'
import MainLayout from '../layouts/main'
import Section from '../components/ui/section'
import CasesList from '../components/cases/list'

type CasesPageProps = {
  meta: sdk.PageMetaTag[]
  cases: sdk.Case[]
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
  const meta = await sdk.fetchPageMetaTags({ name: 'cases' })
  const cases = await sdk.fetchCases({
    orderBy: [sdk.CaseOrderBy.detected_DESC],
  })

  return {
    props: {
      meta,
      cases,
    },
  }
}

export default CasesPage
