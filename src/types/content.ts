import { Country } from './countries'

export type Meta = {
  title: string
  description: string
  url: string
  image: string
}

export type Case = {
  detected: Date
  updated: Date
  casestatus: 'active' | 'recovered' | 'dead'
  gender: 'f' | 'm'
  age: number
  nationality: Country
}
