import React from 'react'
import { AppProps } from 'next/app'
import router from 'next/router'

import * as analytics from '../lib/analytics'
import ProgressBar from '../components/ui/progress-bar'
import '../i18n'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    if (!window.ga) analytics.init()
    analytics.logPageView()

    router.events.on('routeChangeComplete', analytics.logPageView)

    return () => {
      router.events.off('routeChangeComplete', analytics.logPageView)
    }
  }, [])

  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
    </>
  )
}

export default App
