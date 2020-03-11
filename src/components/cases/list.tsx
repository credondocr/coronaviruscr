/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { Case, CaseStatus } from '../../types/content'
import Select from '../ui/select'
import Table from '../ui/table'
import * as format from '../../utils/format'
import CaseIndicator from './indicator'
import Button from '../ui/button'

type CasesListProps = {
  filters?: boolean
  cases: Case[]
}

type StatusFilter = 'all' | CaseStatus

const CasesList: React.FC<CasesListProps> = ({ filters = true, cases }) => {
  const statuses: CaseStatus[] = ['active', 'recovered', 'dead']
  const [statusFilter, setStatusFilter] = React.useState<StatusFilter>('all')

  const onStatusChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setStatusFilter(e.target.value as StatusFilter)
    },
    []
  )

  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [page, setPage] = React.useState(1)

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setPage(1)
      setRowsPerPage(Number(e.target.value))
    },
    []
  )

  const filteredCases = React.useMemo(() => {
    if (statusFilter === 'all') {
      return cases
    }

    return cases.filter((c) => c.casestatus === statusFilter)
  }, [cases, statusFilter])

  const paginatedCases = React.useMemo(
    () =>
      filteredCases.slice(
        (page - 1) * rowsPerPage,
        (page - 1) * rowsPerPage + rowsPerPage
      ),
    [filteredCases, page, rowsPerPage]
  )

  const totalPages = React.useMemo(
    () => Math.ceil(filteredCases.length / rowsPerPage),
    [filteredCases.length, rowsPerPage]
  )

  const handlePrevPage = React.useCallback(() => {
    setPage((p) => Math.max(p - 1, 1))
  }, [])

  const handleNextPage = React.useCallback(() => {
    setPage((p) => Math.min(p + 1, totalPages))
  }, [totalPages])

  const onPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setPage(Number(e.target.value))
    },
    []
  )

  return (
    <React.Fragment>
      <div sx={{ variant: 'components.cases.list.toolbar.container' }}>
        <ul sx={{ variant: 'components.cases.list.toolbar.legend.container' }}>
          {statuses.map((status) => (
            <li
              key={status}
              sx={{ variant: 'components.cases.list.toolbar.legend.item' }}
            >
              <CaseIndicator status={status} />
              {format.formatStatus(status)}
            </li>
          ))}
        </ul>
        {filters ? (
          <Select value={statusFilter} onChange={onStatusChange}>
            {['all', ...statuses].map((status) => (
              <option key={status} value={status}>
                {status === 'all'
                  ? 'Todos'
                  : format.formatStatus(status as CaseStatus)}
              </option>
            ))}
          </Select>
        ) : null}
      </div>

      <Table
        sx={{ variant: 'components.cases.list.table.container' }}
        getRowKey={(c) => c.id}
        data={filters ? paginatedCases : cases}
        columns={[
          {
            key: 'casestatus',
            renderTitle: () => '',
            renderContent: (c) => (
              <CaseIndicator status={c.casestatus} sx={{ mr: 2 }} />
            ),
          },
          {
            key: 'detected',
            renderTitle: () => 'Detectado',
            renderContent: (c) => format.formatDate(c.detected),
          },
          {
            key: 'age',
            renderTitle: () => 'Edad',
            renderContent: (c) => c.age,
          },
          {
            key: 'gender',
            renderTitle: () => 'Género',
            renderContent: (c) => format.getGenderIcon(c.gender),
          },
        ]}
      />

      {filters ? (
        <div sx={{ variant: 'components.cases.list.footer.container' }}>
          <Select value={rowsPerPage} onChange={onRowsPerPageChange}>
            {[5, 10, 25, 50, 100].map((n) => (
              <option key={n} value={n}>
                {n} casos por página
              </option>
            ))}
          </Select>
          <div sx={{ variant: 'components.cases.list.footer.buttons' }}>
            <Button disabled={page === 1} onClick={handlePrevPage}>
              &laquo;
            </Button>
            <Select
              value={page}
              onChange={onPageChange}
              sx={{ variant: 'components.cases.list.footer.pageSelector' }}
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </Select>
            <Button disabled={page === totalPages} onClick={handleNextPage}>
              &raquo;
            </Button>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default CasesList
