import { NextApiRequest, NextApiResponse } from 'next'

import * as sdk from '../../lib/sdk'
import * as content from '../../types/content'

type Response = {
  data: content.FormattedReport[]
}

const reports = async (_: NextApiRequest, res: NextApiResponse<Response>) => {
  const data = await sdk.fetchReports({
    orderBy: [sdk.ReportOrderBy.date_DESC],
    first: 100,
  })

  res.status(200).json({ data })
}

export default reports
