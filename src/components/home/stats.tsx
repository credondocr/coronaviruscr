/** @jsx jsx */
import { jsx } from 'theme-ui'

import Section from '../ui/section'
import Card from '../ui/card'

type StatsProps = {
  totalCases: number
  activeCases: number
  recoveredCases: number
  deadCases: number
}

const Stats: React.FC<StatsProps> = ({
  totalCases,
  activeCases,
  recoveredCases,
  deadCases,
}) => {
  return (
    <Section title="Estadísticas generales">
      <div sx={{ variant: 'components.stats.container' }}>
        <Card
          sx={{ variant: 'components.stats.mainStat' }}
          title="Total de casos"
        >
          <span sx={{ variant: 'components.text.stat' }}>{totalCases}</span>
        </Card>

        <Card title="Casos activos">
          <span sx={{ variant: 'components.text.stat', color: 'warning' }}>
            {activeCases}
          </span>
        </Card>

        <Card title="Casos recuperados">
          <span sx={{ variant: 'components.text.stat', color: 'success' }}>
            {recoveredCases}
          </span>
        </Card>

        <Card title="Casos fallecidos">
          <span sx={{ variant: 'components.text.stat', color: 'error' }}>
            {deadCases}
          </span>
        </Card>
      </div>
    </Section>
  )
}

export default Stats
