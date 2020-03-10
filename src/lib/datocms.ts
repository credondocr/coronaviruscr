import { SiteClient } from 'datocms-client'
import { Case } from '../types/content'

const client = new SiteClient('b5d7d10dacad064cb899ce0d988500')

export const fetchCases = (): Promise<Case[]> =>
  client.items.all({ 'filter[type]': 'case' }, { allPages: true })
