import React from 'react'
import GoogleMapReact from 'google-map-react'
import * as sdk from '../../lib/sdk'
import { mapStyles } from '../../config/theme/components/map'

type CasesMapProps = {
  cases: sdk.Case[]
}

const AnyReactComponent = ({ text }: any) => <div>{text}</div>

const APIKey = 'AIzaSyDy5yxvYSkrkLn2QBrKXaksrr2yyVrPmNo'
const defaultCenter = { lat: 9.9359506, lng: -84.1271644 }
const defaultZoom = 8

const CasesMap: React.FC<CasesMapProps> = ({ cases }) => {
  return (
    <>
      <div>{JSON.stringify(cases)}</div>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIKey }}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          options={{ styles: mapStyles }}
        >
          <AnyReactComponent lat={11.0168} lng={76.9558} text="My Marker" />
        </GoogleMapReact>
      </div>
    </>
  )
}

export default CasesMap
