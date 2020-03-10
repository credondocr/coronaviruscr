import { Country } from './countries'

export type SiteInfo = {
  title: string
  description: string
  url: string
  imageUrl: string
}

export type Case = {
  detected: Date
  updated: Date
  casestatus: 'active' | 'recovered' | 'dead'
  gender: 'f' | 'm'
  age: number
  nationality: Country
}
