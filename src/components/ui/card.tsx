/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

type CardProps = {
  title?: string
}

const Card: React.FC<CardProps> = ({ title, children, ...props }) => {
  return (
    <div sx={{ variant: 'components.ui.card.container' }} {...props}>
      {children}
      {title ? (
        <Styled.h5 as="h3" sx={{ variant: 'components.ui.card.title' }}>
          {title}
        </Styled.h5>
      ) : null}
    </div>
  )
}

export default Card
