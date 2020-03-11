/** @jsx jsx */
import { jsx } from 'theme-ui'

import * as sdk from '../../lib/sdk'
import { getIndicatorVariant } from '../../utils/format'

type CaseIndicatorProps = {
  status: sdk.CaseStatus
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
