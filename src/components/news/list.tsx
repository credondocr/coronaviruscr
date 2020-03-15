/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import * as sdk from '../../lib/sdk'
import * as analytics from '../../lib/analytics'
import Select from '../ui/select'
import Table from '../ui/table'
import * as format from '../../utils/format'
import Button from '../ui/button'

type NewsListProps = {
  news: sdk.News[]
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [page, setPage] = React.useState(1)

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = Number(e.target.value)
      setRowsPerPage(value)
      setPage(1)
      analytics.logEvent('news list', 'set news items per page', { value })
    },
    []
  )

  const paginatedNews = React.useMemo(
    () =>
      news.slice(
        (page - 1) * rowsPerPage,
        (page - 1) * rowsPerPage + rowsPerPage
      ),
    [news, page, rowsPerPage]
  )

  const totalPages = React.useMemo(() => Math.ceil(news.length / rowsPerPage), [
    news.length,
    rowsPerPage,
  ])

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
      <Table
        sx={{ variant: 'components.news.list.table.container' }}
        getRowKey={(c) => c.id}
        data={paginatedNews}
        columns={[
          {
            key: 'title',
            renderTitle: () => 'Titulo',
            renderContent: (c) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={c.url || ''}
                sx={{ color: 'text' }}
              >
                {c.title}
              </a>
            ),
          },
          {
            key: 'createdAt',
            renderTitle: () => 'Fecha',
            renderContent: (c) => format.formatDate(c.createdAt),
          },
          {
            key: 'source',
            renderTitle: () => 'Fuente',
            renderContent: (c) => c.source?.name,
          },
        ]}
      />

      <div sx={{ variant: 'components.news.list.footer.container' }}>
        <Select value={rowsPerPage} onChange={onRowsPerPageChange}>
          {[5, 10, 25, 50, 100].map((n) => (
            <option key={n} value={n}>
              {n} noticias por página
            </option>
          ))}
        </Select>
        <div sx={{ variant: 'components.news.list.footer.buttons' }}>
          <Button disabled={page === 1} onClick={handlePrevPage}>
            &laquo;
          </Button>
          <Select
            value={page}
            onChange={onPageChange}
            sx={{ variant: 'components.news.list.footer.pageSelector' }}
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
    </React.Fragment>
  )
}

export default NewsList
