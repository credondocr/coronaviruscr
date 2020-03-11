import { GraphQLClient } from 'graphql-request'

import * as graphql from '../generated/graphql.gen'

const client = new GraphQLClient('https://graphql.datocms.com')
client.setHeader('authorization', 'b5d7d10dacad064cb899ce0d988500')

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

export type SuspiciousCase = graphql.SuspiciousCaseFragmentFragment
export const SuspiciousCaseOrderBy = graphql.SuspiciouscaseModelOrderBy

export const fetchSuspiciousCases = async (
  variables?: graphql.suspiciousCasesQueryVariables
): Promise<SuspiciousCase[]> => {
  const { suspiciousCases } = await sdk.suspiciousCases(variables)
  return suspiciousCases
}
