import React from 'react'
import { Link } from 'gatsby'
import { formatPhoneNumber } from '../../../static/format'
import { FaHome, FaPhoneAlt, FaAngleDoubleRight } from 'react-icons/fa'
import styled from 'styled-components'
import { color } from '../Styles/Variables'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Map from '../GoogleMap/HitMap'

const ListSearch = ({ hit }) => {
  const link = hit.cuisine ? 'restaurant' : 'service'
  const slug = hit.cuisine ? hit.slug : hit.slugServ
  const title = hit.cuisine ? hit.name : hit.nameServ

  return (
    <Container>
      <div className="gridContent">
        <div className="gridContentCol">
          <Content>
            <section className="content">
              <h3>
                {
                  <Link
                    to={`/${link}/${slug}/${hit.city.slug}`}
                    title={title}>
                    {title}
                  </Link>
                }

              </h3>
              <p>
                <span className="category">
                  <Link
                    to={`/category/${hit.category.slug}`}
                    title={`Category: ${hit.category.name}`}
                    className="underlined"
                  >
                    {hit.category.name}
                  </Link> </span>
                <span><FaAngleDoubleRight className="icon" /> </span>

                {hit.tags &&
                  hit.tags.map(item => {
                    return (
                      <span key={item.id} className="cuisine">
                        <Link
                          to={`/tag/${item.slug}`}
                          title={`Tag: ${item.name}`}
                          className="underlined"
                        >
                          {item.name}
                        </Link> </span>
                    )
                  })
                }
              </p>
              <p>
                <Link
                  to={
                    hit.priceRange &&
                    `/price-range/${hit.priceRange.slug}`
                  }
                  title={
                    hit.priceRange &&
                    `Price: ${hit.priceRange.symbol} ${hit.priceRange.name}`
                  }
                  className="underlined"
                >
                  {hit.priceRange && hit.priceRange.symbol} {hit.priceRange && hit.priceRange.name}
                </Link>
              </p>
              <p>
                <FaHome className="icon-local" />{hit.street} {hit.city.name}, {hit.state.stateCode} {hit.postalCode}
              </p>
              <p>
                <a href={`tel: +1 ${hit.tel}`} title={`${hit.name}phone number`}>
                  <FaPhoneAlt className="icon-local" /> {`${formatPhoneNumber(hit.tel)}`}
                </a>
              </p>
            </section>
            <section className="search-img">
              {hit.imageBanner &&
                hit.imageBanner.map(item => {
                  return (
                    <Link
                      key={item.id}
                      to={`/${link}/${slug}/${hit.city.slug}`}
                      title={`${hit.name}image`}
                    >
                      <LazyLoadImage src={item.secure_url} alt={`${hit.name}image`} className="search-image" />
                    </Link>
                  )
                })
              }
            </section>
          </Content>
          <div className="search-map">
            <Map hit={hit} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ListSearch

const Container = styled.div`
  .gridContentCol {
    padding: 2rem;
    background-color: #fff;
    transition: all .2s;

    &:hover {
      box-shadow: 0 0 3px 3px #aaa;

      .search-image {
        transform: scale(1.3, 1.3);
        max-height: 200px;
      }
    }
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: ${color.primary};
    font-weight: 300;

  }

  a.underlined {
        background-image: linear-gradient(${color.colorYellow}, ${color.colorYellow});
        background-position: 50% 100%;
        background-repeat: no-repeat;
        background-size: 0% 3px;
        transition: background-size .2s;
    }

    a:hover {
        color: ${color.secondary};
        background-size: 100% 3px;
        padding-bottom: 5px;
    }


  h3 {
    margin-bottom: 1rem;

    a {
      font-weight: 400;

    }
  }

  .search-img {
    overflow: hidden;
    height: 16.5rem;
    margin-bottom: 2rem;

    img {
      width: 41rem;
      border-bottom: 6px solid ${color.primary};
      transition: all .25s ease-out;

    }
  }

  .content {
    .category {
      font-weight: 700;
    }
    .icon {
      width: 2rem;
      height: 2rem;
      fill: ${color.primaryLight};
      transform: translateY(.5rem);

      &-local {
        fill: #666;
        margin-right: .5rem;
        transform: translateY(.2rem);
      }
    }

    .cuisine {
      margin-right: 1.2rem;
    }
  }
`
