import ga, { EventArgs } from 'react-ga'

import env from '../config/env'

export const init = (): void => {
  ga.initialize(env.GOOGLE_ANALYTICS_TRACKING_CODE)
}

export const logPageView = (): void => {
  setTimeout(() => {
    const url = window.location.pathname
    const { title } = document
    ga.set({ url, title })
    ga.pageview(url, [], title)
  }, 0)
}

type EventExtra = Pick<
  EventArgs,
  'label' | 'value' | 'nonInteraction' | 'transport'
>

export const logEvent = (
  category: string,
  action: string,
  extra: EventExtra
) => {
  ga.event({ category, action, ...extra })
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ga.exception({ description, fatal })
  }
}
