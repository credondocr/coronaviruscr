/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

type SectionProps = {
  title: string
}

const Section: React.FC<SectionProps> = ({ title, children, ...props }) => {
  return (
    <section sx={{ variant: 'components.section.container' }} {...props}>
      <Styled.h2 sx={{ variant: 'components.section.title' }}>
        {title}
      </Styled.h2>
      {children}
    </section>
  )
}

export default Section
