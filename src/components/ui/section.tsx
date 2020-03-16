/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { IconType } from 'react-icons'

type SectionProps = {
  icon?: IconType
  title: string
}

const Section: React.FC<SectionProps> = ({
  icon: Icon,
  title,
  children,
  ...props
}) => {
  return (
    <section sx={{ variant: 'components.ui.section.container' }} {...props}>
      <div sx={{ variant: 'components.ui.section.title' }}>
        {Icon ? <Icon sx={{ variant: 'components.ui.section.icon' }} /> : null}
        <Styled.h2>{title}</Styled.h2>
      </div>
      {children}
    </section>
  )
}

export default Section
