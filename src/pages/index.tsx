/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { NextPage, GetStaticProps } from 'next'

import { fetchCases } from '../lib/datocms'
import { Meta, Case } from '../types/content'
import SEO from '../components/seo'
import MainLayout from '../layouts/main'
import Section from '../components/section'
import Card from '../components/card'
import { fetchCases } from '../lib/datocms'

type HomePageProps = {
  meta: Meta
  cases: Case[]
  activeCases: Case[]
  recoveredCases: Case[]
  deadCases: Case[]
}

const HomePage: NextPage<HomePageProps> = ({
  meta,
  cases,
  activeCases,
  recoveredCases,
  deadCases,
}) => {
  return (
    <React.Fragment>
      <SEO {...meta} />
      <MainLayout>
        <Section title="Estadísticas generales">
          <div sx={{ variant: 'components.stats.container' }}>
            <Card
              sx={{ variant: 'components.stats.mainStat' }}
              title="Total de casos"
            >
              <span sx={{ variant: 'components.text.stat' }}>
                {cases.length}
              </span>
            </Card>

            <Card title="Casos activos">
              <span sx={{ variant: 'components.text.stat', color: 'warning' }}>
                {activeCases.length}
              </span>
            </Card>

            <Card title="Casos recuperados">
              <span sx={{ variant: 'components.text.stat', color: 'success' }}>
                {recoveredCases.length}
              </span>
            </Card>

            <Card title="Casos muertos">
              <span sx={{ variant: 'components.text.stat', color: 'error' }}>
                {deadCases.length}
              </span>
            </Card>
          </div>
        </Section>
      </MainLayout>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // @TODO: get this from a rest api sometime in the future
  const meta = await import('../content/meta').then((m) => m.default)

  const cases = await fetchCases()

  const activeCases = cases.filter((c) => c.casestatus === 'active')
  const recoveredCases = cases.filter((c) => c.casestatus === 'recovered')
  const deadCases = cases.filter((c) => c.casestatus === 'dead')

  return {
    props: {
      meta,
      cases,
      activeCases,
      recoveredCases,
      deadCases,
    },
  }
}

export default HomePage
