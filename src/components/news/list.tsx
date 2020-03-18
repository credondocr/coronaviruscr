/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import * as sdk from '../../lib/sdk'
import * as format from '../../utils/format'
import Card from '../ui/card'

type NewsListProps = {
  data: sdk.News[]
}

const NewsList: React.FC<NewsListProps> = ({ data }) => {
  return (
    <section sx={{ variant: 'components.news.list.container' }}>
      {data.map((news) => (
        <Card key={news.id} sx={{ variant: 'components.news.list.card' }}>
          <Styled.a
            href={news.url as string}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ variant: 'components.news.list.title' }}
          >
            {news.title}
          </Styled.a>
          <Styled.a
            href={news.source?.url as string}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ variant: 'components.news.list.source' }}
          >
            {news.source?.name}
          </Styled.a>
          <small sx={{ variant: 'components.news.list.date' }}>
            {format.formatDate(news.date)}
          </small>
        </Card>
      ))}
    </section>
  )
}

export default NewsList
