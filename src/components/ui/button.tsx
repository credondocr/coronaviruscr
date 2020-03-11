/** @jsx jsx */
import { jsx } from 'theme-ui'

const Button: React.FC<React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>> = (props) => {
  return (
    <button
      type="button"
      sx={{ variant: 'components.ui.button.container' }}
      {...props}
    />
  )
}

export default Button
