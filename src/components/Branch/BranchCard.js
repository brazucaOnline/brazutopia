import React from 'react'
import { Link } from 'gatsby'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styled from 'styled-components'
import { color } from '../Styles/Variables'
import { FaHome, FaPhoneAlt, FaGlobe } from 'react-icons/fa'
import { formatPhoneNumber } from '../../../static/format'

const BranchCard = ({ restaurant, service }) => {
  return (
    <Card>
      <ul className="list">
        {restaurant &&
          restaurant.map(item => {
            return (
              <li key={item.id}>
                <>
                  <Link to={`/${item.node_locale}/restaurant/${item.slug}/${item.city.slug}`}>
                    {
                      item.imageBanner.map(img => {
                        return (
                          <div key={item.id} className="row">
                            <div className="title">
                              <LazyLoadImage
                                key={img.id}
                                className="photo"
                                src={img.url}
                                effect="blur"
                                delayMethod="debounce"
                                alt="Banner Image"
                              />
                              <h3 className="city">{item.name}</h3>
                              <h5 className="city">{item.city.name}</h5>
                            </div>
                          </div>
                        )
                      })
                    }
                  </Link>
                  <div className=" item address">
                    <FaHome className="icon" />
                    {item.street}, <br />
                    {item.city.name}, {item.state.stateCode} {item.postalCode}
                  </div>
                </>
                <div className="item"><a href={`tel: +1 ${item.tel}`} className="underlined">
                  <FaPhoneAlt className="icon" /> {`${formatPhoneNumber(item.tel)}`}
                </a></div>
                <div className="item">
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noreferrer"
                    className="underlined">
                    <FaGlobe className="icon" />
                      Website
                  </a>
                </div>
              </li>
            )
          })
        }
        {service &&
          service.map(item => {
            return (
              <li key={item.id}>
                <div>
                  <Link to={`/${item.node_locale}/service/${item.slug}/${item.city.slug}`}>
                    {
                      item.imageBanner.map(img => {
                        return (
                          <div key={item.id} className="row">
                            <div className="title">
                              <LazyLoadImage
                                key={img.id}
                                className="photo"
                                src={img.url}
                                effect="blur"
                                delayMethod="debounce"
                                alt="Banner Image"
                              />
                              <h4 className="city">{item.city.name}</h4>
                            </div>
                          </div>
                        )
                      })
                    }
                  </Link>
                  <div className=" item address">
                    <FaHome className="icon" />
                    {item.street}, <br />
                    {item.city.name}, {item.state.stateCode} {item.postalCode}
                  </div>
                </div>
                <div className="item"><a href={`tel: +1 ${item.tel}`} className="underlined">
                  <FaPhoneAlt className="icon" /> {`${formatPhoneNumber(item.tel)}`}
                </a></div>
                <div className="item">
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noreferrer"
                    className="underlined">
                    <FaGlobe className="icon" />
                      Website
                  </a>
                </div>
              </li>
            )
          })
        }
      </ul>
    </Card>
  )
}

export default BranchCard

const Card = styled.div`

position: relative;

  .list {
    display: flex;
    grid-column: 3 / 13;

    li {
      width: 33.3%;
      margin-right: 2rem;
      padding-bottom: 4rem;
      background-color: #fff;
      transition: all .25s ease-out;
      z-index: -1;

      .photo {
        transition: all .25s ease-out;
      }

      span {
        overflow: hidden;
      }

      &:hover {
        box-shadow: 1px 0 12px #333;

        .photo {
            transform: scale(1.08, 1.08);
        }
      }
    }

    .row {
      display: flex;
      flex-direction: column;

      .title {
        text-transform: uppercase;
        color: ${color.colorText};
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;

        h4 {
          margin-top: 1.5rem;
          margin-left: 1.5rem;
        }

        &:hover {
          color: ${color.secondary};

          .photo {
            transform: scale(1, 1);
            border-color: ${color.secondary}
          }
        }
      }
    }
  }

  .item {
    margin: 2rem 0 0 1.5rem;
    color: ${color.colorText};

    &:hover {
      .photo {
        transform: scale(1, 1)
      }
    }

    a {
      color: ${color.colorText};
      transition: all .25s ease-in-out;

      &:hover {
        color: ${color.secondary}
      }
    }
  }
  .photo {
    max-width: 150%;
    position: relative;
    border-bottom: 6px solid ${color.primary};

  }
  .address {
    display: flex;
  }
  .icon {
    margin-right: 1.1rem;
    transform: translateY(.2rem)
  }
`
