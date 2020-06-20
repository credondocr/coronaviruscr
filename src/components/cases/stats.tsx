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
import moment from 'moment'
import _ from 'lodash'
import * as content from '../../types/content'
import * as format from '../../utils/format'
import Card from '../ui/card'
import cantonData from '../../pages/data.json'

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
  const lastReport = reports[reports.length - 1]
  const yesterdayReport = reports[reports.length - 2]

  const yesterdayConfirmedCases = yesterdayReport.confirmedCases
  const yesterdayDiscartedCases = yesterdayReport.discardedCases
  const yesterdayByStatus = yesterdayReport.byStatus

  const byGender = [
    { name: 'Mujeres', value: lastReport.byGender.women },
    { name: 'Hombres', value: lastReport.byGender.men },
  ]

  const GENDER_COLORS = ['#fd79a8', '#74b9ff']

  const byAge = [
    { name: 'Menores', value: lastReport.byAge.juveniles },
    { name: 'Adultos', value: lastReport.byAge.adults },
    { name: 'Ancianos', value: lastReport.byAge.elderlies },
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
    { name: 'Costarricenses', value: lastReport.byNationality.costarricans },
    { name: 'Extranjeros', value: lastReport.byNationality.foreigners },
    {
      name: 'Investigación pendiente',
      value: lastReport.byNationality.pending,
    },
  ]
  const groupedCantonData = _.mapValues(_.groupBy(cantonData, 'provincia'))
  const yesterday: string = moment()
    .subtract(1, 'days')
    .format('DD/MM/YYYY')
  const today: string = moment().format('DD/MM/YYYY')
  return (
    <div sx={{ variant: 'components.cases.stats.container' }}>
      <Card
        sx={{ variant: 'components.cases.stats.mainStat' }}
        title="Casos confirmados"
      >
        <span sx={{ variant: 'components.ui.text.stat' }}>
          {totalCases} ({totalCases - yesterdayConfirmedCases})
        </span>
      </Card>

      <Card
        sx={{ variant: 'components.cases.stats.mainStat' }}
        title="Casos descartados"
      >
        <span sx={{ variant: 'components.ui.text.stat' }}>
          {discardedCases} ({discardedCases - yesterdayDiscartedCases})
        </span>
      </Card>

      <Card
        title="Casos activos"
        sx={{ variant: 'components.cases.stats.secondaryStat' }}
      >
        <span sx={{ variant: 'components.ui.text.stat', color: 'warning' }}>
          {activeCases} ({activeCases - yesterdayByStatus.active})
        </span>
      </Card>

      <Card
        title="Casos recuperados"
        sx={{ variant: 'components.cases.stats.secondaryStat' }}
      >
        <span sx={{ variant: 'components.ui.text.stat', color: 'success' }}>
          {recoveredCases} ({recoveredCases - yesterdayByStatus.recovered})
        </span>
      </Card>

      <Card
        title="Casos fallecidos"
        sx={{ variant: 'components.cases.stats.secondaryStat' }}
      >
        <span sx={{ variant: 'components.ui.text.stat', color: 'error' }}>
          {deadCases} ({deadCases - yesterdayByStatus.deceased})
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
            <Line dataKey="confirmedCases" name="Confirmados" />
            <Line dataKey="byStatus.active" name="Activos" stroke="#f1c40f" />
            <Line
              dataKey="byStatus.recovered"
              name="Recuperados"
              stroke="#2ecc71"
            />
            <Line
              dataKey="byStatus.deceased"
              name="Fallecidos"
              stroke="#e74c3c"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card
        title="Casos por género"
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
        title="Casos por edad"
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
        title="Casos por provincia"
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
        title="Casos por nacionalidad"
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

      <Card
        title="Casos en Alajuela"
        sx={{ variant: 'components.cases.stats.secondaryChart' }}
      >
        {yesterday}
        <ResponsiveContainer height={500}>
          <BarChart
            layout="vertical"
            data={groupedCantonData.Alajuela.filter(
              (i) => _.get(i, yesterday) > 0
            ).sort((a, b) =>
              _.get(a, yesterday) > _.get(b, yesterday) ? -1 : 1
            )}
            margin={{ left: 24, top: 24 }}
          >
            <YAxis
              type="category"
              dataKey="canton"
              interval={0}
              tick={{ fontSize: 11 }}
              tickMargin={10}
            />
            <Legend />
            <XAxis type="number" hide dataKey={yesterday} interval={0} />
            <Bar barSize={15} label dataKey={yesterday} fill="#ffeaa7" />
            <XAxis type="number" hide dataKey={today} interval={0} />
            <Bar barSize={15} label dataKey={today} fill="#a6500e" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      <Card
        title="Casos en Cartago"
        sx={{ variant: 'components.cases.stats.secondaryChart' }}
      >
        {yesterday}
        <ResponsiveContainer height={500}>
          <BarChart
            layout="vertical"
            data={groupedCantonData.Cartago.filter(
              (i) => _.get(i, yesterday) > 0
            ).sort((a, b) =>
              _.get(a, yesterday) > _.get(b, yesterday) ? -1 : 1
            )}
            margin={{ left: 24, top: 24 }}
          >
            <YAxis
              type="category"
              dataKey="canton"
              interval={0}
              tick={{ fontSize: 11 }}
              tickMargin={10}
            />
            <Legend />
            <XAxis type="number" hide dataKey={yesterday} interval={0} />
            <Bar barSize={15} label dataKey={yesterday} fill="#ffeaa7" />
            <XAxis type="number" hide dataKey={today} interval={0} />
            <Bar barSize={15} label dataKey={today} fill="#a6500e" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card
        title="Casos en Guanacaste"
        sx={{ variant: 'components.cases.stats.secondaryChart' }}
      >
        <ResponsiveContainer height={500}>
          <BarChart
            layout="vertical"
            data={groupedCantonData.Guanacaste.filter(
              (i) => _.get(i, yesterday) > 0
            ).sort((a, b) =>
              _.get(a, yesterday) > _.get(b, yesterday) ? -1 : 1
            )}
            margin={{ left: 24, top: 24 }}
          >
            <YAxis
              type="category"
              dataKey="canton"
              tick={{ fontSize: 12 }}
              interval={0}
            />
            <Legend />
            <XAxis type="number" hide dataKey={yesterday} interval={0} />
            <Bar label dataKey={yesterday} fill="#ffeaa7" />
            <XAxis type="number" hide dataKey={today} interval={0} />
            <Bar label dataKey={today} fill="#a6500e" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card
        title="Casos en Heredia"
        sx={{ variant: 'components.cases.stats.secondaryChart' }}
      >
        <ResponsiveContainer height={500}>
          <BarChart
            layout="vertical"
            data={groupedCantonData.Heredia.filter(
              (i) => _.get(i, yesterday) > 0
            ).sort((a, b) =>
              _.get(a, yesterday) > _.get(b, yesterday) ? -1 : 1
            )}
            margin={{ left: 24, top: 24 }}
          >
            <YAxis
              type="category"
              dataKey="canton"
              tick={{ fontSize: 12 }}
              interval={0}
            />
            <Legend />
            <XAxis type="number" hide dataKey={yesterday} interval={0} />
            <Bar label dataKey={yesterday} fill="#ffeaa7" />
            <XAxis type="number" hide dataKey={today} interval={0} />
            <Bar label dataKey={today} fill="#a6500e" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card
        title="Casos en Limon"
        sx={{ variant: 'components.cases.stats.secondaryChart' }}
      >
        <ResponsiveContainer height={500}>
          <BarChart
            layout="vertical"
            data={groupedCantonData['Lim�n']
              .filter((i) => _.get(i, yesterday) > 0)
              .sort((a, b) =>
                _.get(a, yesterday) > _.get(b, yesterday) ? -1 : 1
              )}
            margin={{ left: 24, top: 24 }}
          >
            <YAxis
              type="category"
              dataKey="canton"
              tick={{ fontSize: 12 }}
              interval={0}
            />
            <Legend />
            <XAxis type="number" hide dataKey={yesterday} interval={0} />
            <Bar label dataKey={yesterday} fill="#ffeaa7" />
            <XAxis type="number" hide dataKey={today} interval={0} />
            <Bar label dataKey={today} fill="#a6500e" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      <Card
        title="Casos en Puntarenas"
        sx={{ variant: 'components.cases.stats.secondaryChart' }}
      >
        <ResponsiveContainer height={500}>
          <BarChart
            layout="vertical"
            data={groupedCantonData.Puntarenas.filter(
              (i) => _.get(i, yesterday) > 0
            ).sort((a, b) =>
              _.get(a, yesterday) > _.get(b, yesterday) ? -1 : 1
            )}
            margin={{ left: 24, top: 24 }}
          >
            <YAxis
              type="category"
              dataKey="canton"
              tick={{ fontSize: 12 }}
              interval={0}
            />
            <Legend />
            <XAxis type="number" hide dataKey={yesterday} interval={0} />
            <Bar label dataKey={yesterday} fill="#ffeaa7" />
            <XAxis type="number" hide dataKey={today} interval={0} />
            <Bar label dataKey={today} fill="#a6500e" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      <Card
        title="Casos en Otros"
        sx={{ variant: 'components.cases.stats.secondaryChart' }}
      >
        <ResponsiveContainer height={500}>
          <BarChart
            layout="vertical"
            data={groupedCantonData.Otros.filter(
              (i) => _.get(i, yesterday) > 0
            ).sort((a, b) =>
              _.get(a, yesterday) > _.get(b, yesterday) ? -1 : 1
            )}
            margin={{ left: 24, top: 24 }}
          >
            <YAxis
              type="category"
              dataKey="canton"
              tick={{ fontSize: 12 }}
              interval={0}
            />
            <Legend />
            <XAxis type="number" hide dataKey={yesterday} interval={0} />
            <Bar label dataKey={yesterday} fill="#ffeaa7" />
            <XAxis type="number" hide dataKey={today} interval={0} />
            <Bar label dataKey={today} fill="#a6500e" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}

export default CasesStats
