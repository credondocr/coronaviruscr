import moment from 'moment'

import * as sdk from '../lib/sdk'
import { FormattedReport } from '../types/content'

moment.locale('ES')

export const formatDate = (date?: Date, small = false): string =>
  moment(date).format(small ? 'DD MMM' : 'DD \\d\\e MMMM \\d\\e YYYY')

export const formatReport = (report: sdk.Report): FormattedReport => ({
  date: report.date,
  confirmedCases: report.confirmedCases,
  discardedCases: report.discardedCases,
  byStatus: {
    active: report.activeCases,
    recovered: report.recoveredCases,
    deceased: report.deceasedCases,
  },
  byGender: {
    women: report.womenCases,
    men: report.menCases,
  },
  byAge: {
    juveniles: report.juvenileCases,
    adults: report.adultCases,
    elderlies: report.elderlyCases,
  },
  byNationality: {
    costarricans: report.costaRicanCases,
    foreigners: report.foreignersCases,
  },
  byLocation: {
    sanJose: report.casesInSanJose,
    alajuela: report.casesInAlajuela,
    cartago: report.casesInCartago,
    heredia: report.casesInHeredia,
    guanacaste: report.casesInGuanacaste,
    puntarenas: report.casesInPuntarenas,
    limon: report.casesInLimon,
  },
})
