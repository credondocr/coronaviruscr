/** @jsx jsx */
import { jsx, ThemeProvider, Styled } from 'theme-ui'

import theme from '../../config/theme'
import { formatDate } from '../../utils/format'
import Nav from './nav'

const MainLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <header sx={{ variant: 'components.layout.header.wrapper' }}>
        <div sx={{ variant: 'components.layout.header.container' }}>
          <div>
            <Styled.h1 sx={{ variant: 'components.layout.header.title' }}>
              Costa Rica
            </Styled.h1>
            <Styled.h2 sx={{ variant: 'components.layout.header.subtitle' }}>
              COVID-19
            </Styled.h2>
          </div>
          <Nav />
        </div>
      </header>

      <main sx={{ variant: 'components.layout.main' }}>{children}</main>

      <footer sx={{ variant: 'components.layout.footer.wrapper' }}>
        <div sx={{ variant: 'components.layout.footer.container' }}>
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
            <Styled.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kevinwolf.dev"
            >
              Kevin Wolf
            </Styled.a>{' '}
            y{' '}
            <Styled.a
              target="_blank"
              rel="noopener noreferrer"
              href="http://cesarredondo.dev/"
            >
              Cesar Redondo
            </Styled.a>
          </Styled.p>
          <Styled.p>Última actualización el {formatDate()}</Styled.p>
        </div>
      </footer>
    </ThemeProvider>
  )
}

export default MainLayout
