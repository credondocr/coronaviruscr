import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// TODO move the resources to Json files
const resources = {
  en: {
    translation: {
      'General Stats': 'General Stats',
      'Confirmed Cases': 'Confirmed cases',
      'Discarded Cases': 'Discarded cases',
      'Active Cases': 'Active cases',
      'Recovered Cases': 'Recovered cases',
      'Deceased Cases': 'Deceased cases',
      'Women Cases': 'Women cases',
      'Men Cases': 'Men cases',
      'Daily Cases': 'Daily cases',
      'Cases by Gender': 'Cases by gender',
      'Cases by Age': 'Cases by age',
      'Cases by Province': 'Cases by province',
      'Cases by Nationality': 'Cases by nationality',
      Confirmed: 'Confirmed',
      Active: 'Active',
      Recovered: 'Recovered',
      Deceased: 'Deceased',
      'Older adults': 'Older adults',
      Adults: 'Adults',
      Childs: 'Childs',
      Male: 'Male',
      Female: 'Female',
      'Costa Rican': 'Costa Rican',
      Foreign: 'Foreign',
      TBD: 'TBD',
      'Recent News': 'Recent news',
    },
  },
  es: {
    translation: {
      'General Stats': 'Estadísticas generales',
      'Confirmed Cases': 'Casos confirmados',
      'Discarded Cases': 'Casos descartados',
      'Active Cases': 'Casos activos',
      'Recovered Cases': 'Casos recuperados',
      'Deceased Cases': 'Casos fallecidos',
      'Women Cases': 'Casos femeninos',
      'Men Cases': 'Casos masculinos',
      'Daily Cases': 'Casos por día',
      'Cases by Gender': 'Casos por género',
      'Cases by Age': 'Casos por edad',
      'Cases by Province': 'Casos por provincia',
      'Cases by Nationality': 'Casos por nacionalidad',
      Confirmed: 'Confirmados',
      Active: 'Activos',
      Recovered: 'Recuperados',
      Deceased: 'Fallecidos',
      'Older adults': 'Adultos mayores',
      Adults: 'Adultos',
      Childs: 'Niños',
      Male: 'Hombre',
      Female: 'Mujer',
      'Costa Rican': 'Costarricense',
      Foreign: 'Extranjeros',
      TBD: 'Por ser confirmados',
      'Recent News': 'Noticias recientes',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
