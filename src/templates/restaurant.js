import React from 'react'
import * as PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import PageTemplate from './pageTemplate'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Container from '../components/Styles/Business/Container'
import Button from '../components/Styles/Business/Button'
import {
  FaHome,
  FaPhoneAlt,
  FaGlobe,
  FaFacebookF,
  FaFax,
  FaWhatsapp,
  FaGlassMartiniAlt,
} from 'react-icons/fa'
import { BsEnvelopeFill } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { ImImages, ImAlarm } from 'react-icons/im'
import { GiArrowDunk } from 'react-icons/gi'
import {
  IoFastFoodOutline,
  IoStorefrontSharp,
  IoTelescopeOutline,
  IoCartOutline,
  IoRestaurant,
} from 'react-icons/io5'
import { Helmet } from 'react-helmet'
import { formatPhoneNumber } from '../../static/format'
import Map from '../components/GoogleMap/RestaurnatMap'
import HourStatus from '../utils/BizHour'
import InBiz from '../utils/inBiz'
import General from '../locales/pt/general.yaml'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const dateObj = new Date()
const weekdayEn = dateObj.toLocaleString('en-US', { weekday: 'long' })
const weekdayPt = dateObj.toLocaleString('pt-BR', { weekday: 'long' })

const RestaurantTemplate = ({ data }) => {
  const restaurant = data.contentfulRestaurant
  const {
    name,
    locationName,
    street,
    city,
    state,
    postalCode,
    tel,
    fax,
    extraTels,
    whatsapp,
    website,
    email,
    facebook,
    priceRange,
    foundedIn,
    description,
    cuisine,
    highlight,
    pay,
    businessHour,
    happyHour,
    tags,
    booking,
    order,
    menu,
    branch,
    imageBanner,
    gallery,
  } = restaurant

  // Booking and Ordering Links
  const bookLink =
    booking !== 'null' ? (
      <a href={booking} target='_blank' rel='noreferrer'>
        <span className='links'>
          <Button className='btn' top='-10px'>
            <span className='btn__visible'>{General.link.bookOnline}</span>
            <span className='btn__invisible btn__invisible-book'>
              {General.link.reservation}
            </span>
          </Button>
        </span>
      </a>
    ) : (
      <div></div>
    )
  const orderLink =
    order !== 'null' ? (
      <a href={order} target='_blank' rel='noreferrer'>
        <span className='links'>
          <Button className='btn'>
            <span className='btn__visible'>{General.link.orderOnline}</span>
            <span className='btn__invisible btn__invisible-order'>
              {General.link.enjoy}
            </span>
          </Button>
        </span>
      </a>
    ) : (
      <div></div>
    )

  const emailSec =
    email !== 'null' ? (
      <div className='header__email'>
        <a href={`mailto:${email}`} className='underlined'>
          <BsEnvelopeFill /> Email
        </a>
      </div>
    ) : (
      ''
    )
  const fbSec =
    facebook !== 'null' ? (
      <div className='header__facebook'>
        <a
          href={facebook}
          target='_blank'
          aria-label='facebook'
          rel='noreferrer'
          className='underlined'
        >
          <FaFacebookF />
        </a>
      </div>
    ) : (
      ''
    )

  const menuSec =
    menu !== 'null' ? (
      <div className='header__menu'>
        <a href={menu} className='underlined'>
          <IoRestaurant /> Menu
        </a>
      </div>
    ) : (
      ''
    )

  const webSec =
    website !== 'null' ? (
      <div className='header__website'>
        <a
          href={website}
          target='_blank'
          rel='noreferrer'
          className='underlined'
        >
          <FaGlobe /> Website
        </a>
      </div>
    ) : (
      ''
    )

  const priceSec =
    priceRange !== 'null' ? (
      <li className='header__price-range'>
        <Link
          to={`/price-range/${priceRange.slug}`}
          className='underlined'
        >
          {priceRange.symbol}
        </Link>
      </li>
    ) : (
      ''
    )

  const foundedSec =
    foundedIn !== 'null' ? (
      <li className='header__founded'>
        <IoStorefrontSharp /> Founded in {foundedIn}
      </li>
    ) : (
      ''
    )

  const extraTelSec =
    extraTels[0] !== 'null' ? (
      <section className='biz-main__content'>
        <FiPhoneCall className='biz-main__icon' />
        <div className='biz-main__list'>
          <h5 className='content-label'>{General.label.extraTel}:</h5>
          <p>{extraTels}</p>
        </div>
      </section>
    ) : (
      ''
    )

  const streetName = street !== 'null' ? `${street},` : ''

  const LocationName = locationName !== 'null' ? locationName : ''

  const faxSec =
    fax !== 'null' ? (
      <section className='biz-main__content'>
        <FaFax className='biz-main__icon' />
        <div className='biz-main__list'>
          <h5 className='content-label'>{General.label.fax}:</h5>
          <p>{`${formatPhoneNumber(fax)}`}</p>
        </div>
      </section>
    ) : (
      ''
    )
  const whatsappSec =
    whatsapp !== 'null' ? (
      <section className='biz-main__content'>
        <FaWhatsapp className='biz-main__icon' />
        <div className='biz-main__list'>
          <h5 className='content-label'>{General.label.whatsapp}:</h5>
          <a
            href={`https://api.whatsapp.com/send?phone=1${whatsapp}`}
            target='_blank'
            rel='noreferrer'
            className='whatsapp underlined'
          >{`${formatPhoneNumber(whatsapp)}`}</a>
        </div>
      </section>
    ) : (
      ''
    )

  const branchSec =
    branch.name !== 'null' ? (
      <section className='other-locations'>
        {branch && (
          <Link to={`/branches/${branch.slug}`}>
            <button className='btn-inline'>
              {General.link.otherLocations} <span>&rarr;</span>
            </button>
          </Link>
        )}
      </section>
    ) : (
      ''
    )

  const happyHourSec =
    happyHour[0].happy_day !== 'null' ? (
      <section className='aside-section aside__items'>
        <div className='happy-hour'>
          <div className='aside-label'>
            <FaGlassMartiniAlt className='block-label' />
            <h5 className='block-label blm'>{General.label.happyHour}</h5>
          </div>
          <table>
            <tbody>
              {happyHour.map((hour) => {
                return (
                  <tr key={hour.id}>
                    <td>{hour.happy_day}:</td>
                    <td className='hour-tab'>{hour.happy_hour_time}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    ) : (
      ''
    )

  // Page Render
  return (
    <PageTemplate
      title={`${name} ${locationName}`}
      description={description.description}
    >
      <Helmet>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css'
        />
      </Helmet>
      <Container className='container'>
        <div className='biz-node'>
          <header className='header'>
            <div>
              <section className='header__banner'>
                {imageBanner.map((item) => {
                  return (
                    <div key={item.id} className='banner-container'>
                      <LazyLoadImage
                        className='img-banner'
                        src={item.original_url}
                        effect='blur'
                        delayMethod='debounce'
                        alt='Banner Image'
                      />
                    </div>
                  )
                })}
                <section className='header__content'>
                  <h2 id='business-name' className='h-1'>
                    {name}
                  </h2>
                  <div className='header__address'>
                    <FaHome /> {LocationName}
                    <div>
                      {streetName} {city.name}, {state.stateCode} {postalCode}
                    </div>
                  </div>
                  <div className='header__links'>
                    <div className='header__phone'>
                      <a href={`tel: +1 `} className='underlined'>
                        <FaPhoneAlt /> {`${formatPhoneNumber(tel)}`}
                      </a>
                    </div>
                    {webSec}
                    {emailSec}
                    {menuSec}
                    {fbSec}
                  </div>
                  <div>
                    <ul className='header__bottom'>
                      <li key={Math.random()} className='header__biz-hour'>
                        <HourStatus restaurant={restaurant} />
                      </li>
                      {priceSec}
                      {foundedSec}
                    </ul>
                  </div>
                </section>
                <section className='header__biz-map'>
                  <Map restaurant={restaurant} />
                </section>
              </section>
            </div>
          </header>
          <div className='gridContent'>
            <div className='gridContentCol'>
              <div className='flexContent'>
                <main className='biz-main'>
                  <p className='description'>{description.description}</p>
                  <section className='biz-main__content'>
                    <IoFastFoodOutline className='biz-main__icon' />
                    <div className='biz-main__list'>
                      <h5 className='content-label'>
                        {General.label.cuisine}:
                      </h5>
                      {cuisine.map((item) => {
                        return (
                          <div key={item.id} className='biz-main__items'>
                            <Link
                              to={`/cuisine/${item.slug}`}
                              className='underlined'
                            >
                              {item.name}
                            </Link>
                          </div>
                        )
                      })}
                    </div>
                  </section>
                  <section className='biz-main__content'>
                    <IoTelescopeOutline className='biz-main__icon' />
                    <div className='biz-main__list'>
                      <h5 className='content-label'>
                        {General.label.highlight}:
                      </h5>
                      {highlight.map((item) => {
                        return (
                          <div key={item.id} className='biz-main__items'>
                            <Link
                              to={`/highlight/${item.slug}`}
                              className='underlined'
                            >
                              {item.name}
                            </Link>
                          </div>
                        )
                      })}
                      <li className='biz-main__cuisine'></li>
                    </div>
                  </section>
                  {extraTelSec}
                  {whatsappSec}
                  {faxSec}
                  <section className='biz-main__content'>
                    <IoCartOutline className='biz-main__icon' />
                    <h5 className='content-label'>{General.label.pay}:</h5>
                    <div className='biz-main__list pay-list'>
                      {pay.map((item) => {
                        return (
                          <div key={item.id} className='biz-main__items'>
                            {item.image.map((img) => {
                              return (
                                <LazyLoadImage
                                  key={item.name}
                                  src={img.url}
                                  title={item.name}
                                  effect='blur'
                                  delayMethod='debounce'
                                  alt={item.name}
                                />
                              )
                            })}
                          </div>
                        )
                      })}
                      <li className='biz-main__cuisine'></li>
                    </div>
                  </section>
                  {branchSec}
                  <section className='disclaimer'>
                    <p>{General.disclaimerRest}</p>
                  </section>
                </main>
                <aside className='aside'>
                  <section className='biz-aside__lang aside__items'>
                    <div className='aside-section'>
                      <h2 className='block-title h-2'>
                        {General.label.languages}
                      </h2>
                      {/* <LanguageSwitch /> */}
                    </div>
                  </section>
                  {foundedIn !== 'null' ? (
                    <section className='biz-aside__years aside__items'>
                      <div className='aside-section'>
                        <InBiz restaurant={restaurant}></InBiz>
                      </div>
                    </section>
                  ) : (
                    ''
                  )}
                  <section className='biz-aside__links aside__items'>
                    {bookLink}
                    {orderLink}
                  </section>
                  <section className='aside-section aside__items'>
                    <div className='aside-label'>
                      <ImImages className='block-label' />
                      <h5 className='block-label blm'>
                        {General.label.photos}
                      </h5>
                    </div>
                    <div className='aside__gallery'>
                      <ul>
                        {gallery.map((item) => {
                          return (
                            <li key={item.id} className='photo-item'>
                              <a
                                key={item.id}
                                href={item.url}
                                alt='Gallery'
                                data-fancybox='gallery'
                                data-type='image'
                                className='aside__photos'
                              >
                                <LazyLoadImage
                                  src={item.url}
                                  style={{ width: 60, height: 60 }}
                                  effect='blur'
                                  delayMethod='debounce'
                                  className='photo'
                                />
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </section>
                  <section className='aside-section aside__items'>
                    <div className='business-hour'>
                      <div className='aside-label'>
                        <ImAlarm className='block-label' />
                        <h5 className='block-label blm'>
                          {General.label.bizHour}
                        </h5>
                      </div>
                      <div className='biz-hour__content'>
                        <div className='aside-biz-status'>
                          <HourStatus restaurant={restaurant} />
                        </div>
                        <table>
                          <tbody>
                            {businessHour &&
                              businessHour.map((hourItem) => {
                                if (hourItem.start_hour === '') {
                                  return <tr key={hourItem.id}></tr>
                                } else if (hourItem.start_hour !== '') {
                                  return (
                                    <tr
                                      key={hourItem.id}
                                      title={`Open ${hourItem.weekday} from ${hourItem.start_hour} to ${hourItem.end_hour}`}
                                    >
                                      {weekdayEn === hourItem.wd ||
                                      weekdayPt === hourItem.wd ? (
                                        <>
                                          <td className='hour-bold'>
                                            {General.today}:
                                          </td>
                                          <td className='hour-tab hour-bold'>
                                            <div>
                                              <span>{hourItem.start_hour}</span>{' '}
                                              {hourItem.start_hour ===
                                              General.closed
                                                ? ''
                                                : '-'}{' '}
                                              <span> {hourItem.end_hour}</span>
                                            </div>
                                            <div>
                                              <span>
                                                {hourItem.start_hour2}
                                              </span>{' '}
                                              {hourItem.start_hour2 === null
                                                ? ''
                                                : '-'}{' '}
                                              <span> {hourItem.end_hour2}</span>
                                            </div>
                                          </td>
                                        </>
                                      ) : (
                                        <>
                                          <td>{hourItem.weekday}:</td>
                                          <td className='hour-tab'>
                                            <div>
                                              <span>{hourItem.start_hour}</span>{' '}
                                              {hourItem.start_hour ===
                                              General.closed
                                                ? ''
                                                : '-'}{' '}
                                              <span> {hourItem.end_hour}</span>
                                            </div>
                                            <div>
                                              <span>
                                                {hourItem.start_hour2}
                                              </span>{' '}
                                              {hourItem.start_hour2 === null
                                                ? ''
                                                : '-'}{' '}
                                              <span> {hourItem.end_hour2}</span>
                                            </div>
                                          </td>
                                        </>
                                      )}
                                    </tr>
                                  )
                                }
                                return <></>
                              })}
                          </tbody>
                        </table>
                      </div>
                      <div className='hour-disclaimer'>
                        {General.misc.hourInfo}
                      </div>
                    </div>
                  </section>
                  {happyHourSec}
                  <aside className='aside-section aside__items'>
                    <div className='aside-label'>
                      <GiArrowDunk className='block-label' />
                      <h5 className='block-label blm'>{General.label.tags}</h5>
                    </div>
                    <div className='biz-tags'>
                      {tags.map((item) => {
                        return (
                          <div key={item.name} className='biz-main__items'>
                            <Link
                              to={`/tag/${item.slug}`}
                              className='underlined'
                            >
                              {item.name}
                            </Link>
                          </div>
                        )
                      })}
                    </div>
                  </aside>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PageTemplate>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulRestaurant(slug: { eq: $slug }, node_locale: { eq: "pt" }) {
      id
      name
      node_locale
      slug
      locationName
      street
      city {
        name
        slug
      }
      state {
        stateCode
      }
      postalCode
      coordinates {
        lat
        lon
      }
      tel
      extraTels
      extraTels
      fax
      whatsapp
      website
      facebook
      email
      foundedIn
      priceRange {
        name
        symbol
        slug
        node_locale
      }
      description {
        description
      }
      cuisine {
        id
        name
        slug
        node_locale
      }
      highlight {
        id
        name
        slug
        node_locale
      }
      pay {
        id
        name
        image {
          url
          secure_url
          original_url
        }
      }
      businessHour {
        id
        weekday
        wd
        start_hour
        end_hour
        start_hour2
        end_hour2
      }
      happyHour {
        id
        happy_day
        happy_hour_time
      }
      tags {
        name
        slug
        id
        node_locale
      }
      booking
      order
      menu
      branch {
        name
        slug
        node_locale
      }
      imageBanner {
        original_url
        id
      }
      gallery {
        url
        id
      }
    }
  }
`
RestaurantTemplate.propTypes = propTypes

export default RestaurantTemplate
