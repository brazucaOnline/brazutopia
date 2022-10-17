import React from 'react'
import { Link } from 'gatsby'
import algoliasearch from 'algoliasearch/lite'
import { formatPhoneNumber } from '../../../static/format'
import styled from 'styled-components'
import { color } from '../Styles/Variables'
import General from '../../locales/pt/general.yaml'

import {
  connectStateResults,
  Hits,
  Stats,
  InstantSearch,
  SearchBox,
} from "react-instantsearch-dom"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)


const Hit = ({ hit }) => {

  // Business Hour
  const hourStatus = hit.businessHour.map(item => {
    const dateObj = new Date()
    const weekdayEn = dateObj.toLocaleString("en-US", { weekday: "long" })
    const weekdayPt = dateObj.toLocaleString("pt-BR", { weekday: "long" })

    const startHour = `January 1, 2020 ${item.start_hour}:00`
    const endHour = `January 1, 2020 ${item.end_hour}:00`
    const startHour2 = `January 1, 2020 ${item.start_hour2}:00`
    const endHour2 = `January 1, 2020 ${item.end_hour2}:00`

    let ohour = new Date(startHour).getHours()
    let omin = new Date(startHour).getMinutes()
    let chour = new Date(endHour).getHours()
    let cmin = new Date(endHour).getMinutes()

    let dayOpen = new Date().setHours(ohour, omin, 0)
    let dayClose = new Date().setHours(chour, cmin, 0)

    let ohour2 = new Date(startHour2).getHours()
    let omin2 = new Date(startHour2).getMinutes()
    let chour2 = new Date(endHour2).getHours()
    let cmin2 = new Date(endHour2).getMinutes()

    let dayOpen2 = new Date().setHours(ohour2, omin2, 0)
    let dayClose2 = new Date().setHours(chour2, cmin2, 0)

    if ((item.start_hour === '' && weekdayEn === item.wd) || (item.start_hour === '' && weekdayPt === item.wd) || (item.start_hour2 === '' && weekdayEn === item.wd) || (item.start_hour2 === '' && weekdayPt === item.wd)) {
      return <section key={item.id}>
        <span className="biz-unavailable"> {General.hourNotAvailable} </span>
        <span className="biz-hour-short"> - {item.weekday}</span>
      </section>

    } else if (weekdayEn === item.wd || weekdayPt === item.wd) {
      if (((dateObj >= dayOpen && dateObj <= dayClose) || dayClose <= dayOpen) || ((dateObj >= dayOpen2 && dateObj <= dayClose2) || dayClose2 <= dayOpen)) {
        return (
          <section key={item.id}>
            <span className="biz-open"> {General.bizHourStatusOpen} </span>
            <span key={item.id} className="biz-hour-short">
              {item.weekday}: {item.start_hour} - {item.end_hour}
            </span>
          </section>)

      }
      return (
        <section key={item.id}>
          <span className="biz-closed"> {General.bizHourStatusClosed} </span>
          <span key={item.id} className="biz-hour-short">
            {item.weekday}: {item.start_hour} - {item.end_hour}
          </span>
        </section>
      )
    }

    return <div key={item.id}></div>
  })

  return <Container>
    {
      hit.name ?
        <Link
          to={`/restaurant/${hit.slug}/${hit.city.slug}`}>
          <h3 className="title">{hit.name}</h3>
          <div className="content">
            {
              hit.imageBanner &&
              hit.imageBanner.map(item => {
                return (
                  <SearchImg key={item.id}>
                    <img src={item.secure_url} alt={`${hit.name}`} />
                  </SearchImg>
                )
              })
            }
            <div className="info">
              <div>{hit.category.name}</div>
              <div>{hourStatus}</div>
              <div>{hit.street}, {hit.city.name} - {hit.state.stateCode} {hit.postalCode}</div>
              <div>{`${formatPhoneNumber(hit.tel)}`}</div>
            </div>
          </div>
        </Link>
        : <Link
          to={`/service/${hit.slugServ}/${hit.city.slug}`}>
          <h3 className="title">{hit.nameServ}</h3>
          <div className="content">
            {
              hit.imageBanner &&
              hit.imageBanner.map(item => {
                return (
                  <SearchImg key={item.id}>
                    <img src={item.secure_url} alt={`${hit.name}`} />
                  </SearchImg>
                )
              })
            }
            <div className="info">
              <div>{hit.category.name}</div>
              <div>{hourStatus}</div>
              <div>{hit.street}, {hit.city.name} - {hit.state.stateCode} {hit.postalCode}</div>
              <div>{`${formatPhoneNumber(hit.tel)}`}</div>
            </div>
          </div>
        </Link>
    }
  </Container>
}

module.export = Hit

const Results = connectStateResults(({ searchState, children }) =>
  searchState && searchState.query ? (
    <div className="results">
      {children}
    </div>
  ) : (
      <div></div>
    )
)

class Search extends React.Component {
  render () {
    // let intl = this.props.intl
    // const placeholder = intl.locale === 'en' ?
    //   'Enter Business name, category, city... to filter search'
    //   : 'Digite o Negócio, categoria, cidade... para filtrar busca'
    const placeholder = 'Digite o Negócio, categoria, cidade... para filtrar busca'

    return <InstantSearch
      indexName= {"businessPT"
      }
      searchClient={searchClient}
    >
      <SearchBox
        className="main-search"
        translations={{
          placeholder: placeholder
        }}
      />
      <Results>
        <Stats
          translations={{
            stats (nbHits) {
              return nbHits > 0 ? (
                 `${nbHits} empresa${nbHits !== 1 ? `s` : ''} encontrada${nbHits !== 1 ? `s` : ''}`
              ) : <p>{General.noSearch}</p>
            }
          }}
        />
        <Hits hitComponent={Hit} />
      </Results>
    </InstantSearch>
  }
}

export default Search

const Container = styled.div`
  background-color: #fff;
  transition: all .3s ease-in-out;

  transform: translateZ(0);
  backface-visibility: hidden;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    padding-bottom: 5px;
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background-color: ${color.secondary};
    height: 2px;
    transition: right .3s ease-out;
  }

  &:hover {
    padding-bottom: 1.5rem;
    filter: contrast(1.5);
  }

  &:hover:before {
    right: 0;
  }

  .content {
    display: flex;

    div {
      margin-bottom: .4rem;
      padding-left: .5rem;
    }

    .biz-unavailable {
      color: #d7740b;
      font-size: 1.8rem;
      font-variant: small-caps;
    }

    .biz-open {
      color: ${color.secondary};
      font-size: 1.8rem;
      font-variant: small-caps;
    }
    .biz-closed {
      color: ${color.colorRed};
      font-size: 1.8rem;
      font-variant: small-caps;
    }

  }
`

const SearchImg = styled.span`
  width: 10rem;
  overflow: hidden;

  img {
    width: 25rem;
  }

`