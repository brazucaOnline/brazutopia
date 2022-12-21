import React from 'react'
import { Link } from 'gatsby'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { FaHome, FaPhoneAlt, FaGlobe } from 'react-icons/fa'
import { formatPhoneNumber } from '../../static/format'

const Card = ( { item, link } ) => {
  const streetName = item.street !== 'null' ? `${ item.street }` : ''
  // const streetName =
  //   item.street !== 'null' ? (
  //     <span>{item.street}</span>, <br />
  //   ) : (
  //     <span></span>
  //     )
  return (
    <li key={item.id}>
      <div>
        <Link to={`/${link}/${item.slug}/${item.city.slug}`}>
          {item.imageBanner.map((img) => {
            return (
              <div key={item.id} className='row'>
                <div className='title'>
                  <LazyLoadImage
                    key={img.id}
                    className='photo'
                    src={img.url}
                    effect='blur'
                    delayMethod='debounce'
                    alt='Banner Image'
                  />
                  <h3 className='city'>{item.name}</h3>
                  <h5 className='city'>{item.city.name}</h5>
                </div>
              </div>
            )
          })}
        </Link>
        <div className=' item address'>
          {streetName} 
          {item.city.name}, {item.state.stateCode} {item.postalCode}
        </div>
      </div>
      <div className='item'>
        <a href={`tel: +1 ${item.tel}`} className='underlined'>
          <FaPhoneAlt className='icon' /> {`${formatPhoneNumber(item.tel)}`}
        </a>
      </div>
      <div className='item'>
        <a
          href={item.website}
          target='_blank'
          rel='noreferrer'
          className='underlined'
        >
          <FaGlobe className='icon' />
          Website
        </a>
      </div>
    </li>
  )
}

export default Card
