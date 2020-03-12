/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState } from 'react'
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl'

import * as sdk from '../../lib/sdk'
import CaseIndicator from './indicator'
import env from '../../config/env'
import Card from '../ui/card'

type CasesMapProps = {
  cases: sdk.Case[]
  sampleData?: any[] // temp data while get CMS/graphql updated
}

const defaultCenter = { lat: 9.9359506, lng: -84.1271644 }
const defaultZoom = 7

const CasesMap: React.FC<CasesMapProps> = ({ cases, sampleData }) => {
  const markers = sampleData || cases
  const [viewport, setViewport] = useState({
    latitude: defaultCenter.lat,
    longitude: defaultCenter.lng,
    zoom: defaultZoom,
  })
  return (
    <Card>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={env.MAP_BOX_TOKEN}
        width="100%"
        height="500px"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            longitude={marker.lng}
            latitude={marker.lat}
            captureDrag={false}
            captureDoubleClick={false}
          >
            <CaseIndicator status={marker.casestatus} />
          </Marker>
        ))}
        <NavigationControl sx={{ variant: 'components.map.navigation' }} />
      </ReactMapGL>
    </Card>
  )
}

export default CasesMap
