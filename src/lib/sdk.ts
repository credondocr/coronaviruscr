import { GraphQLClient } from 'graphql-request'

import * as graphql from '../generated/graphql.gen'
import env from '../config/env'

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

export type Case = graphql.CaseFragmentFragment
export type CaseStatus = 'active' | 'recovered' | 'dead'
export type CaseGender = 'f' | 'm'
export const CaseOrderBy = graphql.CaseModelOrderBy

export const fetchCases = async (
  variables?: graphql.casesQueryVariables
): Promise<Case[]> => {
  const { cases } = await sdk.cases(variables)
  return cases
}
