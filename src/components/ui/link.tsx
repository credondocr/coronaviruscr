/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import NextLink, { LinkProps } from 'next/link'

const Link: React.FC<LinkProps & { className?: string }> = ({
  children,
  className,
  ...props
}) => {
  return (
    <NextLink passHref {...props}>
      <Styled.a className={className}>{children}</Styled.a>
    </NextLink>
  )
}

export default Link
