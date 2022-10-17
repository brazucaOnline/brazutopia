import React from 'react'
import { GoogleMap, MarkerClusterer, useJsApiLoader } from '@react-google-maps/api'
import 'react-lazy-load-image-component/src/effects/blur.css'
import MapMarker from './MapMarker'


const containerStyle = {
  width: '100vw',
  height: '350px'
}
const image =
{
  url: "https://res.cloudinary.com/brazucacms/image/upload/v1607109180/logos/brazucamarker_sette0.png"
}

const options = {
  imagePath:
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
}


const ListMap = ({ coordsRest, coordsServ }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: `${process.env.GATSBY_GOOGLE_MAP_API_KEY}`
  })

  const rest = coordsRest.edges
  const serv = coordsServ.edges
  const restServ = [...rest, ...serv]

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    // const onLoad = React.useCallback(
    //   function onLoad (mapInstance) {
    //     // do something with map Instance
    //   }
    // )
    return <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: 37.0902, lng: -95.7129 }}
      zoom={4}
    >
      <MarkerClusterer options={options}>
        {clusterer =>
          restServ.map(item => {
            const link = item.node.cuisine ? 'restaurant' : 'service'
            return (
              <MapMarker
                key={item.node.id}
                icon={image}
                item={item}
                clusterer={clusterer}
                link={link}
              />
            )
          })
        }
      </MarkerClusterer>
     </GoogleMap>
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : ''

}

export default ListMap

