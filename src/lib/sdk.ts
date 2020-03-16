import { GraphQLClient } from 'graphql-request'

import * as graphql from '../generated/graphql.gen'
import env from '../config/env'
import { FormattedReport } from '../types/content'
import { formatReport } from '../utils/format'

const client = new GraphQLClient('https://graphql.datocms.com')
client.setHeader('authorization', env.DATO_CMS_READ_TOKEN)

const sdk = graphql.getSdk(client)

export type PageMetaTag = graphql.PageMetaTagFragmentFragment

export const fetchPageMetaTags = async (
  variables: graphql.pageMetaTagsQueryVariables
): Promise<PageMetaTag[]> => {
  const { page } = await sdk.pageMetaTags(variables)
  if (!page) throw new Error(`Page ${variables.name} does not exist`)
  return page.meta
}

export type Report = graphql.ReportFragmentFragment
export const ReportOrderBy = graphql.ReportModelOrderBy

export const fetchReports = async (
  variables?: graphql.reportsQueryVariables
): Promise<FormattedReport[]> => {
  const { reports } = await sdk.reports(variables)
  return reports.map(formatReport)
}

export type News = graphql.NewsFragmentFragment
export const NewsOrderBy = graphql.NewsModelOrderBy

export const fetchNews = async (
  variables?: graphql.newsQueryVariables
): Promise<News[]> => {
  const { news } = await sdk.news(variables)
  return news
}
