export type FormattedReport = {
  date: string
  confirmedCases: number
  discardedCases: number
  byStatus: {
    active: number
    recovered: number
    deceased: number
  }
  byGender: {
    women: number
    men: number
  }
  byAge: {
    juveniles: number
    adults: number
    elderlies: number
  }
  byNationality: {
    costarricans: number
    foreigners: number
  }
  byLocation: {
    sanJose: number
    alajuela: number
    cartago: number
    heredia: number
    guanacaste: number
    puntarenas: number
    limon: number
  }
}
