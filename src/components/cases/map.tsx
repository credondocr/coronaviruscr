import React from 'react'
import GoogleMapReact from 'google-map-react'
import * as sdk from '../../lib/sdk'
import { mapStyles } from '../../config/theme/components/map'
import CaseIndicator from './indicator'

type CasesMapProps = {
  cases: sdk.Case[]
  sampleData?: any[] // temp data while get CMS/graphql updated
}

const Marker = ({ status }: any) => <CaseIndicator status={status} />

const APIKey = 'AIzaSyDy5yxvYSkrkLn2QBrKXaksrr2yyVrPmNo'
const defaultCenter = { lat: 9.9359506, lng: -84.1271644 }
const defaultZoom = 8

const CasesMap: React.FC<CasesMapProps> = ({ cases, sampleData }) => {
  const markers = sampleData || cases
  return (
    <>
      <div style={{ height: '600px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIKey }}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          options={{ styles: mapStyles }}
        >
          {markers.map((marker) => (
            <Marker
              lat={marker.lat}
              lng={marker.lng}
              status={marker.casestatus}
            />
          ))}
        </GoogleMapReact>
      </div>
    </>
  )
}

export default CasesMap
