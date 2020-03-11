/** @jsx jsx */
import { jsx } from 'theme-ui'

import Card from '../ui/card'

type CasesStatsProps = {
  totalCases: number
  activeCases: number
  recoveredCases: number
  deadCases: number
}

const CasesStats: React.FC<CasesStatsProps> = ({
  totalCases,
  activeCases,
  recoveredCases,
  deadCases,
}) => {
  return (
    <div sx={{ variant: 'components.cases.stats.container' }}>
      <Card
        sx={{ variant: 'components.cases.stats.mainStat' }}
        title="Total de casos"
      >
        <span sx={{ variant: 'components.ui.text.stat' }}>{totalCases}</span>
      </Card>

      <Card title="Casos activos">
        <span sx={{ variant: 'components.ui.text.stat', color: 'warning' }}>
          {activeCases}
        </span>
      </Card>

      <Card title="Casos recuperados">
        <span sx={{ variant: 'components.ui.text.stat', color: 'success' }}>
          {recoveredCases}
        </span>
      </Card>

      <Card title="Casos fallecidos">
        <span sx={{ variant: 'components.ui.text.stat', color: 'error' }}>
          {deadCases}
        </span>
      </Card>
    </div>
  )
}

export default CasesStats
