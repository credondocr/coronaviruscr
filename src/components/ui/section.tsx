/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

type SectionProps = {
  title: string
  actions?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({
  title,
  actions,
  children,
  ...props
}) => {
  return (
    <section sx={{ variant: 'components.ui.section.container' }} {...props}>
      <div sx={{ variant: 'components.ui.section.titleContainer' }}>
        <Styled.h2 sx={{ variant: 'components.ui.section.title' }}>
          {title}
        </Styled.h2>
        {actions ? (
          <div sx={{ variant: 'components.ui.section.actions' }}>{actions}</div>
        ) : null}
      </div>
      {children}
    </section>
  )
}

export default Section
