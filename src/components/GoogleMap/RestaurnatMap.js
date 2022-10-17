import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import 'react-lazy-load-image-component/src/effects/blur.css'


const containerStyle = {
  width: '400px',
  height: '300px',
  border: '1px solid #ccc'
}
const image =
{
  url: "https://res.cloudinary.com/brazucacms/image/upload/v1607109180/logos/brazucamarker_sette0.png"
}

const Map = ({ restaurant }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: `${process.env.GATSBY_GOOGLE_MAP_API_KEY}`
  })

  const lat = restaurant.coordinates.lat
  const lon = restaurant.coordinates.lon

  const renderMap = () => {

    return <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: parseFloat(`${lat}`), lng: parseFloat(`${lon}`) }}
      zoom={16}
    >
      <Marker
        icon={image}
        position={{ lat: parseFloat(`${lat}`), lng: parseFloat(`${lon}`) }}
      />
    </GoogleMap>
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : ''

}

export default Map

