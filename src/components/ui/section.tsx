/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

type SectionProps = {
  title?: string
}

const Section: React.FC<SectionProps> = ({ title, children, ...props }) => {
  return (
    <section sx={{ variant: 'components.ui.section.container' }} {...props}>
      {title ? (
        <Styled.h2 sx={{ variant: 'components.ui.section.title' }}>
          {title}
        </Styled.h2>
      ) : null}
      {children}
    </section>
  )
}

export default Section
