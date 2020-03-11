/** @jsx jsx */
import { jsx } from 'theme-ui'

import { CaseStatus } from '../../types/content'
import { getIndicatorVariant } from '../../utils/format'

type CaseIndicatorProps = {
  status: CaseStatus
}

const CaseIndicator: React.FC<CaseIndicatorProps> = ({ status, ...props }) => {
  return (
    <div
      sx={{
        variant: getIndicatorVariant(status),
      }}
      {...props}
    />
  )
}

export default CaseIndicator
