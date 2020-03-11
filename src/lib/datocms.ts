/* eslint-disable @typescript-eslint/no-explicit-any */
import 'isomorphic-unfetch'

import { PageMetaTag, Case } from '../types/content'

const API_URL = 'https://graphql.datocms.com'
const API_TOKEN = 'b5d7d10dacad064cb899ce0d988500'

const fetchApi = async (query: string, variables: Record<string, any> = {}) => {
  const json = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((res) => res.json())

  if (json.errors) {
    // eslint-disable-next-line
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

const FETCH_PAGE_QUERY = `
query fetchPage($name: String!) {
  page(filter: {name: {eq: $name}}) {
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
  }
}
`

export const fetchPageSEO = async (name: string): Promise<PageMetaTag[]> => {
  const data = await fetchApi(FETCH_PAGE_QUERY, { name })
  return data.page.seo
}

const FETCH_CASES_QUERY = `
query fetchCases($orderBy: [CaseModelOrderBy], $first: IntType) {
  allCases(orderBy: $orderBy, first: $first) {
    id
    detected
    updated
    casestatus
    gender
    age
  }
}
`

export const fetchCases = async ({
  orderBy,
  first,
}: {
  orderBy?: string
  first?: number
} = {}): Promise<Case[]> => {
  const data = await fetchApi(FETCH_CASES_QUERY, { orderBy, first })
  return data.allCases
}
