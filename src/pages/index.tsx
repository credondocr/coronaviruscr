/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { NextPage, GetStaticProps } from 'next'

import { fetchCases, fetchSiteInfo } from '../lib/datocms'
import { SiteInfo, Case } from '../types/content'
import SEO from '../components/seo'
import MainLayout from '../layouts/main'
import Stats from '../components/home/stats'

type HomePageProps = {
  siteInfo: SiteInfo
  cases: Case[]
}

const HomePage: NextPage<HomePageProps> = ({ siteInfo, cases }) => {
  const filterCases = (casestatus: Case['casestatus']) =>
    cases.filter((c) => c.casestatus === casestatus)

  const activeCases = filterCases('active')
  const recoveredCases = filterCases('recovered')
  const deadCases = filterCases('dead')

  return (
    <React.Fragment>
      <SEO {...siteInfo} />
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
  const siteInfo = await fetchSiteInfo()
  const cases = await fetchCases()

  return {
    props: {
      siteInfo,
      cases,
    },
  }
}

export default HomePage
