/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

type TableColumn<T> = {
  key: keyof T
  renderTitle: () => React.ReactNode
  renderContent: (row: T) => React.ReactNode
}

type TableProps<T> = {
  data: T[]
  columns: TableColumn<T>[]
  getRowKey: (row: T) => string
}

function Table<T>({ columns, data, getRowKey, ...props }: TableProps<T>) {
  return (
    <div sx={{ variant: 'components.ui.table.wrapper' }} {...props}>
      <Styled.table>
        <thead>
          <Styled.tr>
            {columns.map((c) => (
              <Styled.th key={c.key as string}>{c.renderTitle()}</Styled.th>
            ))}
          </Styled.tr>
        </thead>
        <tbody>
          {data.map((r) => (
            <Styled.tr key={getRowKey(r)}>
              {columns.map((c) => (
                <Styled.td key={c.key as string}>
                  {c.renderContent(r)}
                </Styled.td>
              ))}
            </Styled.tr>
          ))}
        </tbody>
      </Styled.table>
    </div>
  )
}

export default Table
