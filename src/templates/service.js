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
  FaTools,
  FaRegMap,
  FaWhatsapp,
} from 'react-icons/fa'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { BsEnvelopeFill } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { ImImages, ImAlarm } from 'react-icons/im'
import { GiArrowDunk } from 'react-icons/gi'
import {
  IoStorefrontSharp,
  IoTelescopeOutline,
  IoCartOutline,
} from 'react-icons/io5'
import { Helmet } from 'react-helmet'
import { formatPhoneNumber } from '../../static/format'
import Map from '../components/GoogleMap/ServiceMap'
import HourStatus from '../utils/ServHour'
import InServ from '../utils/inServ'
import General from '../locales/pt/general.yaml'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const dateObj = new Date()
const weekdayEn = dateObj.toLocaleString('en-US', { weekday: 'long' })
const weekdayPt = dateObj.toLocaleString('pt-BR', { weekday: 'long' })

const ServiceTemplate = ({ data }) => {
  const service = data.contentfulService
  const {
    name,
    locationName,
    street,
    city,
    state,
    postalCode,
    tel,
    fax,
    website,
    email,
    facebook,
    foundedIn,
    description,
    services,
    highlight,
    pay,
    businessHour,
    tags,
    booking,
    branch,
    imageBanner,
    gallery,
    serviceArea,
    license,
    whatsapp,
    extraTels,
  } = service

  // Booking and Ordering Links
  const bookLink =
    booking !== 'null' ? (
      <a href={booking} target='_blank' rel='noreferrer'>
        <span className='links'>
          <Button className='btn'>
            <span className='btn__visible'>{General.link.bookService}</span>
            <span className='btn__invisible btn__invisible-book'>
              {General.link.appointment}
            </span>
          </Button>
        </span>
      </a>
    ) : (
      <div></div>
    )
  const lic = license.map((lic) => {
    return lic.number
  })

  const licenseSec =
    lic[0] !== 'null' ? (
      <section className='biz-main__content'>
        <AiOutlineSafetyCertificate className='biz-main__icon' />
        <div className='biz-main__list'>
          <h5 className='content-label'>{General.label.license}:</h5>
          {license.map((item) => {
            return <p key={item.id}>{item.number}</p>
          })}
        </div>
      </section>
    ) : (
      ''
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

  const foundedSec =
    foundedIn !== 'null' ? (
      <li className='header__founded'>
        <IoStorefrontSharp /> Founded in {foundedIn}
      </li>
    ) : (
      ''
    )

  const extraPhones = extraTels.map((item) => {
    console.log(item)
    return (
      <a className='extraPhones underlined' href={`tel: +1 ${item}`}>
        {item}{' '}
      </a>
    )
  })

  const extraTelSec =
    extraTels[0] !== 'null' ? (
      <section className='biz-main__content'>
        <FiPhoneCall className='biz-main__icon' />
        <div className='biz-main__list'>
          <h5 className='content-label'>{General.label.extraTel}:</h5>
          {extraPhones}
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

  const servArea = serviceArea.map((item) => {
    return item.name
  })

  const serviceAreaSec =
    servArea[0] !== 'null' ? (
      <section className='biz-main__content'>
        <FaRegMap className='biz-main__icon' />
        <div className='biz-main__list'>
          <h5 className='content-label'>{General.label.serviceArea}:</h5>
          {serviceArea.map((item) => {
            return (
              <div key={item.id} className='biz-main__items'>
                <Link to={`/service-area/${item.slug}`} className='underlined'>
                  {item.name}
                </Link>
              </div>
            )
          })}
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

  const payName = pay.map((item) => {
    return item.name
  })

  const paySec =
    payName[0] !== 'null' ? (
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
                    {fbSec}
                  </div>
                  <div>
                    <ul className='header__bottom'>
                      <li key={Math.random()} className='header__biz-hour'>
                        <HourStatus service={service} />
                      </li>
                      {foundedSec}
                    </ul>
                  </div>
                </section>
                <section className='header__biz-map'>
                  <Map service={service} />
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
                    <FaTools className='biz-main__icon' />
                    <div className='biz-main__list'>
                      <h5 className='content-label'>
                        {General.label.services}:
                      </h5>
                      {services.map((item) => {
                        return (
                          <div key={item.id} className='biz-main__items'>
                            <Link
                              to={`/services/${item.slug}`}
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
                    </div>
                  </section>
                  {serviceAreaSec}
                  {extraTelSec}
                  {whatsappSec}
                  {faxSec}
                  {licenseSec}
                  {paySec}
                  {branchSec}
                  <section className='disclaimer'>
                    <p>{General.disclaimerServ}</p>
                  </section>
                </main>
                <aside className='aside'>
                  {/* <section className='biz-aside__lang aside__items'>
                    <div className='aside-section'> */}
                      {/* <h2 className='block-title h-2'>
                        {General.label.languages}
                      </h2> */}
                      {/* <LanguageSwitch /> */}
                    {/* </div>
                  </section> */}
                  {foundedIn !== 'null' ? (
                    <section className='biz-aside__years aside__items'>
                      <div className='aside-section'>
                        <InServ service={service} />
                      </div>
                    </section>
                  ) : (
                    ''
                  )}
                  <section className='biz-aside__links aside__items'>
                    {bookLink}
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
                          <HourStatus service={service} />
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
                                            <span>{hourItem.start_hour}</span>{' '}
                                            {hourItem.start_hour ===
                                            General.closed
                                              ? ''
                                              : '-'}{' '}
                                            <span> {hourItem.end_hour}</span>
                                          </td>
                                        </>
                                      ) : (
                                        <>
                                          <td>{hourItem.weekday}:</td>
                                          <td className='hour-tab'>
                                            <span>{hourItem.start_hour}</span>{' '}
                                            {hourItem.start_hour ===
                                            General.closed
                                              ? ''
                                              : '-'}{' '}
                                            <span> {hourItem.end_hour}</span>
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
                    </div>
                  </section>
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
    contentfulService(slug: { eq: $slug }, node_locale: { eq: "pt" }) {
      id
      name
      node_locale
      slug
      street
      locationName
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
      whatsapp
      tel
      extraTels
      fax
      website
      facebook
      email
      foundedIn
      description {
        description
      }
      serviceArea {
        id
        name
        slug
        node_locale
      }
      services {
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
      }
      tags {
        name
        slug
        id
        node_locale
      }
      booking
      license {
        number
        id
      }
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
ServiceTemplate.propTypes = propTypes

export default ServiceTemplate
