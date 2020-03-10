/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { NextPage, GetStaticProps } from 'next'

import { fetchCases } from '../lib/datocms'
import { Meta, Case } from '../types/content'
import SEO from '../components/seo'
import MainLayout from '../layouts/main'
import Stats from '../components/home/stats'

type HomePageProps = {
  meta: Meta
  cases: Case[]
}

const HomePage: NextPage<HomePageProps> = ({ meta, cases }) => {
  const filterCases = (casestatus: Case['casestatus']) =>
    cases.filter((c) => c.casestatus === casestatus)

  const activeCases = filterCases('active')
  const recoveredCases = filterCases('recovered')
  const deadCases = filterCases('dead')

  return (
    <React.Fragment>
      <SEO {...meta} />
      <MainLayout>
        <Stats
          totalCases={cases.length}
          activeCases={activeCases.length}
          recoveredCases={recoveredCases.length}
          deadCases={deadCases.length}
        />
      </MainLayout>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // @TODO: get this from a rest api sometime in the future
  const meta = await import('../content/meta').then((m) => m.default)

  const cases = await fetchCases()

  return {
    props: {
      meta,
      cases,
    },
  }
}

export default HomePage
