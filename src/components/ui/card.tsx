/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

type CardProps = {
  title: string
}

const Card: React.FC<CardProps> = ({ title, children, ...props }) => {
  return (
    <div sx={{ variant: 'components.card.container' }} {...props}>
      {children}
      <Styled.h5 as="h3" sx={{ variant: 'components.card.title' }}>
        {title}
      </Styled.h5>
    </div>
  )
}

export default Card
