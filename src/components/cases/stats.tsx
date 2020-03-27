/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from 'recharts'

import { useTranslation } from 'react-i18next'
import * as content from '../../types/content'
import * as format from '../../utils/format'
import Card from '../ui/card'

type CasesStatsProps = {
  totalCases: number
  discardedCases: number
  activeCases: number
  recoveredCases: number
  deadCases: number
  reports: content.FormattedReport[]
}

const CasesStats: React.FC<CasesStatsProps> = ({
  totalCases,
  discardedCases,
  activeCases,
  recoveredCases,
  deadCases,
  reports,
}) => {
  const { t } = useTranslation()
  const lastReport = reports[reports.length - 1]

  const byGender = [
    { name: t('Female'), value: lastReport.byGender.women },
    { name: t('Male'), value: lastReport.byGender.men },
  ]

  const GENDER_COLORS = ['#fd79a8', '#74b9ff']

  const byAge = [
    { name: t('Childs'), value: lastReport.byAge.juveniles },
    { name: t('Adults'), value: lastReport.byAge.adults },
    { name: t('Older adults'), value: lastReport.byAge.elderlies },
  ]

  const byLocation = [
    { name: 'San José', value: lastReport.byLocation.sanJose },
    { name: 'Alajuela', value: lastReport.byLocation.alajuela },
    { name: 'Cartago', value: lastReport.byLocation.cartago },
    { name: 'Heredia', value: lastReport.byLocation.heredia },
    { name: 'Guanacaste', value: lastReport.byLocation.guanacaste },
    { name: 'Puntarenas', value: lastReport.byLocation.puntarenas },
    { name: 'Limón', value: lastReport.byLocation.limon },
    { name: 'Desconocida', value: lastReport.byLocation.unknown },
  ]

  const NATIONALITY_COLORS = ['#e74c3c', '#9b59b6', '#f1c40f']

  const byNationality = [
    { name: t('Costa Ricans'), value: lastReport.byNationality.costarricans },
    { name: t('Foreign'), value: lastReport.byNationality.foreigners },
    {
      name: t('TBD'),
      value: lastReport.byNationality.pending,
    },
  ]

  const active = t('Active')
  const recovered = t('Recovered')
  const deceased = t('Deceased')
  const confirmed = t('Confirmed')

  return (
    <div sx={{ variant: 'components.cases.stats.container' }}>
      <Card
        sx={{ variant: 'components.cases.stats.mainStat' }}
        title={t('Confirmed Cases')}
      >
        <span sx={{ variant: 'components.ui.text.stat' }}>{totalCases}</span>
      </Card>

      <Card
        sx={{ variant: 'components.cases.stats.mainStat' }}
        title={t('Discarded Cases')}
      >
        <span sx={{ variant: 'components.ui.text.stat' }}>
          {discardedCases}
        </span>
      </Card>

      <Card
        title={t('Active Cases')}
        sx={{ variant: 'components.cases.stats.secondaryStat' }}
      >
        <span sx={{ variant: 'components.ui.text.stat', color: 'warning' }}>
          {activeCases}
        </span>
      </Card>

      <Card
        title={t('Recovered Cases')}
        sx={{ variant: 'components.cases.stats.secondaryStat' }}
      >
        <span sx={{ variant: 'components.ui.text.stat', color: 'success' }}>
          {recoveredCases}
        </span>
      </Card>

      <Card
        title={t('Deceased Cases')}
        sx={{ variant: 'components.cases.stats.secondaryStat' }}
      >
        <span sx={{ variant: 'components.ui.text.stat', color: 'error' }}>
          {deadCases}
        </span>
      </Card>

      <Card
        title="Casos por día"
        sx={{ variant: 'components.cases.stats.mainChart' }}
      >
        <ResponsiveContainer height={500}>
          <LineChart
            data={reports}
            margin={{ left: 0, right: 16, top: 24, bottom: 24 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              textAnchor="middle"
              tick={{ fontSize: 11, angle: -75 }}
              tickMargin={16}
              tickFormatter={(d) => format.formatDate(d, true)}
            />
            <YAxis dataKey="confirmedCases" />
            <Tooltip label="date" />
            <Line dataKey="confirmedCases" name={confirmed} />
            <Line dataKey="byStatus.active" name={active} stroke="#f1c40f" />
            <Line
              dataKey="byStatus.recovered"
              name={recovered}
              stroke="#2ecc71"
            />
            <Line
              dataKey="byStatus.deceased"
              name={deceased}
              stroke="#e74c3c"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card
        title={t('Cases by Gender')}
        sx={{ variant: 'components.cases.stats.secondaryChart' }}
      >
        <ResponsiveContainer height={300}>
          <PieChart>
            <Pie
              data={byGender}
              dataKey="value"
              stroke="transparent"
              paddingAngle={3}
              innerRadius={80}
            >
              {byGender.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={GENDER_COLORS[index % GENDER_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      <Card
        title={t('Cases by Age')}
        sx={{ variant: 'components.cases.stats.secondaryChart' }}
      >
        <ResponsiveContainer height={300}>
          <BarChart
            data={byAge.sort((a, b) => (a.value > b.value ? -1 : 1))}
            margin={{ top: 24 }}
          >
            <XAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 11 }}
              tickMargin={10}
            />
            <YAxis hide type="number" dataKey="value" />
            <Bar label dataKey="value" fill="#6c5ce7" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card
        title={t('Cases by Province')}
        sx={{ variant: 'components.cases.stats.secondaryChart' }}
      >
        <ResponsiveContainer height={300}>
          <BarChart
            layout="vertical"
            data={byLocation
              .filter((i) => i.value > 0)
              .sort((a, b) => (a.value > b.value ? -1 : 1))}
            margin={{ left: 24, top: 24 }}
          >
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 11 }}
              tickMargin={10}
            />
            <XAxis hide type="number" dataKey="value" />
            <Bar label dataKey="value" fill="#ffeaa7" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card
        title={t('Cases by Nationality')}
        sx={{ variant: 'components.cases.stats.secondaryChart' }}
      >
        <ResponsiveContainer height={300}>
          <PieChart>
            <Pie
              data={byNationality}
              dataKey="value"
              stroke="transparent"
              paddingAngle={3}
              innerRadius={80}
            >
              {byNationality.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={NATIONALITY_COLORS[index % NATIONALITY_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}

export default CasesStats
