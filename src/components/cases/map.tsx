/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState } from 'react'
import ReactMapGL, {
  NavigationControl,
  Marker,
  Layer,
  Source,
} from 'react-map-gl'

import * as sdk from '../../lib/sdk'
import CaseIndicator from './indicator'
import env from '../../config/env'
import Card from '../ui/card'
import colors from '../../config/theme/colors'

type CasesMapProps = {
  cases: sdk.Case[]
  sampleData?: any[] // temp data while get CMS/graphql updated
}

const defaultCenter = { lat: 9.9359506, lng: -84.1271644 }
const defaultZoom = 7

// based on https://www.mapbox.com/boundaries configuration
const worldviewFilter = [
  'all',
  ['==', ['get', 'iso_3166_1'], 'CR'],
  [
    'any',
    ['==', 'all', ['get', 'worldview']],
    ['in', 'US', ['get', 'worldview']],
  ],
]

const layer = {
  id: 'adm1join',
  type: 'fill',
  source: 'adm1join',
  'source-layer': 'boundaries_admin_1',
  filter: worldviewFilter,
  paint: {
    'fill-opacity': 0.5,
    'fill-color': colors.primary,
  },
}

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
        <Source
          id="adm1join"
          type="vector"
          url="mapbox://mapbox.boundaries-adm1-v3"
        >
          <Layer {...layer} beforeId="waterway-label" />
        </Source>
        <NavigationControl sx={{ variant: 'components.map.navigation' }} />
      </ReactMapGL>
    </Card>
  )
}

export default CasesMap
