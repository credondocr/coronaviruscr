/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import moment from 'moment'
import flag from 'country-code-emoji'
import { IoMdFemale, IoMdMale } from 'react-icons/io'

import * as sdk from '../lib/sdk'

moment.locale('ES')

export const formatDate = (date?: Date): string =>
  moment(date).format('DD \\d\\e MMMM \\d\\e YYYY')

export const formatCountry = (iso: string): string => flag(iso)

export const formatStatus = (status: sdk.CaseStatus): string => {
  switch (status) {
    case 'active':
      return 'Activo'
    case 'recovered':
      return 'Recuperado'
    case 'dead':
      return 'Fallecido'
    default:
      throw new Error(`Unhandled case status: ${status}`)
  }
}

export const getIndicatorVariant = (status: sdk.CaseStatus): string =>
  `components.cases.indicator.${status}`

export const getGenderIcon = (gender: sdk.CaseGender): React.ReactNode => {
  switch (gender) {
    case 'f':
      return <IoMdFemale sx={{ color: 'female' }} />
    case 'm':
      return <IoMdMale sx={{ color: 'male' }} />
    default:
      throw new Error(`Unhandled case gender: ${gender}`)
  }
}
