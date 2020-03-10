/* eslint-disable @typescript-eslint/no-explicit-any */
import 'isomorphic-unfetch'

import { Case } from '../types/content'

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
    throw new Error('Failed to fetch API')
  }

  return json.data
}

const FETCH_CASES_QUERY = `
{
  allCases(orderBy: detected_ASC) {
    id
    detected
    updated
    casestatus
    gender
    age
    nationality
  }
}
`

export const fetchCases = async (): Promise<Case[]> => {
  const data = await fetchApi(FETCH_CASES_QUERY)
  return data.allCases
}
