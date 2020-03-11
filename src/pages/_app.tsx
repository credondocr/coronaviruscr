import React from 'react'
import { AppProps } from 'next/app'

import ProgressBar from '../components/ui/progress-bar'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
    </>
  )
}

export default App
