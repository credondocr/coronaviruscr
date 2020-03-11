/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const Select: React.FC<React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>> = ({ className, ...props }) => {
  return (
    <div
      sx={{ variant: 'components.ui.select.container' }}
      className={className}
    >
      <select sx={{ variant: 'components.ui.select.select' }} {...props} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        sx={{ variant: 'components.ui.select.indicator' }}
      >
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </div>
  )
}

export default Select
