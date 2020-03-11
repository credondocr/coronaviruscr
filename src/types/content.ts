import { SeoMetaTagType } from 'react-datocms'

export type PageMetaTag = SeoMetaTagType

export type CaseStatus = 'active' | 'recovered' | 'dead'

export type Case = {
  id: string
  detected: Date
  updated: Date
  casestatus: CaseStatus
  gender: 'f' | 'm'
  age: number
}

export type SuspiciousCase = {
  id: string
  date: Date
  number: number
}
