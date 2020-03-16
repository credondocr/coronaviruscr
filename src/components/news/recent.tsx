/** @jsx jsx */
import { jsx } from 'theme-ui'

import Card from '../ui/card'
import * as sdk from '../../lib/sdk'
import * as format from '../../utils/format'

type RecentNewsProps = {
  recentNews: sdk.News[]
}

const RecentNews: React.FC<RecentNewsProps> = ({ recentNews }) => {
  return (
    <div sx={{ variant: 'components.news.card.container' }}>
      {recentNews.map((news) => (
        <Card key={news.id}>
          <a
            sx={{ variant: 'components.news.title' }}
            href={news.url || ''}
            rel="noopener noreferrer"
            target="_blank"
          >
            {news.title}
          </a>
          <a
            sx={{ variant: 'components.news.source' }}
            href={news.url || ''}
            rel="noopener noreferrer"
            target="_blank"
          >
            {news.source?.name}. {format.formatDate(news.createdAt)}.
          </a>
        </Card>
      ))}
    </div>
  )
}

export default RecentNews
