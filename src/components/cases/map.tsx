/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState } from 'react'
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl'
import * as sdk from '../../lib/sdk'
import CaseIndicator from './indicator'

type CasesMapProps = {
  cases: sdk.Case[]
  sampleData?: any[] // temp data while get CMS/graphql updated
}

const defaultCenter = { lat: 9.9359506, lng: -84.1271644 }
const defaultZoom = 7
const token =
  'pk.eyJ1IjoiYXNvdG9nMjAiLCJhIjoiY2s3bnlnaDlhMDNrazNlbWloemRtMTl6MyJ9.JVZCh2T-fHZ7-MmT6l59DA'

const CasesMap: React.FC<CasesMapProps> = ({ cases, sampleData }) => {
  const markers = sampleData || cases
  console.log(markers)
  const [viewport, setViewport] = useState({
    latitude: defaultCenter.lat,
    longitude: defaultCenter.lng,
    zoom: defaultZoom,
  })
  return (
    <ReactMapGL
      mapboxApiAccessToken={token}
      width="100%"
      height="500px"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      {...viewport}
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
      <div sx={{ variant: 'components.map.navigation' }}>
        <NavigationControl />
      </div>
    </ReactMapGL>
  )
}

export default CasesMap
