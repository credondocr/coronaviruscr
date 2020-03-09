/** @jsx jsx */
import { jsx, ThemeProvider, Styled } from 'theme-ui'
import moment from 'moment'

import theme from '../config/theme'

moment.locale('ES')

const MainLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ variant: 'layout.container' }}>
        <header>
          <Styled.h2 as="h1" sx={{ color: 'textSecondary' }}>
            COVID-19
          </Styled.h2>
          <Styled.h1>Costa Rica</Styled.h1>
        </header>

        <main sx={{ variant: 'layout.main' }}>{children}</main>

        <footer sx={{ variant: 'layout.footer' }}>
          <Styled.p>
            Para{' '}
            <span role="img" aria-label="Costa Rica">
              🇨🇷
            </span>{' '}
            con{' '}
            <span role="img" aria-label="amor">
              ❤️
            </span>{' '}
            por{' '}
            <Styled.a target="_blank" href="https://kevinwolf.dev">
              Kevin Wolf
            </Styled.a>
          </Styled.p>
          <Styled.p>
            Última actualización el{' '}
            {moment().format('DD \\d\\e MMMM \\d\\e YYYY')}
          </Styled.p>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default MainLayout
