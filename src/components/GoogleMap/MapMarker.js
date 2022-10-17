import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Marker, InfoWindow } from '@react-google-maps/api'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styled from 'styled-components'
import { formatPhoneNumber } from '../../../static/format'
import { FaHome, FaPhoneAlt } from 'react-icons/fa'
import { color } from '../Styles/Variables'

const image =
{
  url: "https://res.cloudinary.com/brazucacms/image/upload/v1607109180/logos/brazucamarker_sette0.png"
}

class MapMarker extends Component {
  state = {
    mapMaker: null,
    showingInfoWindow: false
  }

  onMarkerClick = (props) => {
    this.setState({
      showingInfoWindow: true
    })
  }

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false
    })
  }

  onload = (mapMaker) => {
    this.setState({
      mapMaker
    })
  }

  render () {
    const { clusterer, item, link } = this.props

    return (
      <Marker
        clusterer={clusterer}
        onload={this.onload}
        icon={image}
        position={{
          lat: parseFloat(`${item.node.coordinates.lat}`),
          lng: parseFloat(`${item.node.coordinates.lon}`)
        }}
        clickable
        onClick={this.onMarkerClick}
      >
        {this.state.showingInfoWindow === true && (
          <InfoWindow
            position={{
              lat: parseFloat(`${item.node.coordinates.lat}`),
              lng: parseFloat(`${item.node.coordinates.lon}`)
            }}
            onCloseClick={this.onInfoWindowClose}
          >
            <MarkerInfo>
              <Link
                to={`/${link}/${item.node.slug}/${item.node.city.slug}`}>
                {
                  item.node.imageBanner.map(img => {
                    return <LazyLoadImage key={img.id} src={img.secure_url} className="marker-img" />
                  })
                }
                <h3>{item.node.name}</h3>
                <p>
                  <FaHome /> {item.node.street}, {item.node.city.name}, {item.node.state.stateCode} {item.node.postalCode}
                </p>
                <p>
                  <FaPhoneAlt /> {`${formatPhoneNumber(item.node.tel)}`}
                </p>
              </Link>
            </MarkerInfo>
          </InfoWindow>
        )}
      </Marker>
    )
  }
}

export default MapMarker

const MarkerInfo = styled.div`
  text-align: center;

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      color:${color.primary};
    }
  }
  .marker-img {
    max-width: 220px;
    width: 220px;
  }
`