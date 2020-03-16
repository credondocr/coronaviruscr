/** @jsx jsx */
import { jsx } from 'theme-ui'

import Card from '../ui/card'

type CasesStatsProps = {
  totalCases: number
  discardedCases: number
  activeCases: number
  recoveredCases: number
  deadCases: number
}

const CasesStats: React.FC<CasesStatsProps> = ({
  totalCases,
  discardedCases,
  activeCases,
  recoveredCases,
  deadCases,
}) => {
  return (
    <div sx={{ variant: 'components.cases.stats.container' }}>
      <Card
        sx={{ variant: 'components.cases.stats.mainStat' }}
        title="Casos confirmados"
      >
        <span sx={{ variant: 'components.ui.text.stat' }}>{totalCases}</span>
      </Card>

      <Card
        sx={{ variant: 'components.cases.stats.mainStat' }}
        title="Casos descartados"
      >
        <span sx={{ variant: 'components.ui.text.stat' }}>
          {discardedCases}
        </span>
      </Card>

      <Card
        title="Casos activos"
        sx={{ variant: 'components.cases.stats.secondaryStat' }}
      >
        <span sx={{ variant: 'components.ui.text.stat', color: 'warning' }}>
          {activeCases}
        </span>
      </Card>

      <Card
        title="Casos recuperados"
        sx={{ variant: 'components.cases.stats.secondaryStat' }}
      >
        <span sx={{ variant: 'components.ui.text.stat', color: 'success' }}>
          {recoveredCases}
        </span>
      </Card>

      <Card
        title="Casos fallecidos"
        sx={{ variant: 'components.cases.stats.secondaryStat' }}
      >
        <span sx={{ variant: 'components.ui.text.stat', color: 'error' }}>
          {deadCases}
        </span>
      </Card>
    </div>
  )
}

export default CasesStats
