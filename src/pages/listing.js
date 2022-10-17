import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'
import styled from 'styled-components'
import PageTemplate from '../templates/pageTemplate'
import ListSearch from '../components/Search/ListSearch'
import Helmet from 'react-helmet'
import { FaSearch } from 'react-icons/fa'
import Map from '../components/GoogleMap/ListMap'
import { graphql } from 'gatsby'
import Pages from '../locales/pt/pages.yaml'
import General from '../locales/pt/general.yaml'



const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

class Listing extends React.Component {

  render () {
    const placeholder = 'Digite o Negócio, categoria, cidade... para filtrar busca'

    const coordsRest = this.props.data.coordsRest
    const coordsServ = this.props.data.coordsServ

    return <PageTemplate title={Pages.listing.title}>
      <Helmet>
        <body className="listing-page" />
      </Helmet>
      <Container>
        <div className="map">
          <Map coordsRest={coordsRest} coordsServ={coordsServ} />
        </div>
        <div className="content">
          <InstantSearch
            searchClient={searchClient}
            indexName="businessPT"
          >
            <div className="list-container">
              <div className="search-box">
                <SearchBox
                  translations={{
                    placeholder: placeholder
                  }}
                />
                <FaSearch className="fasearch-icon" />
              </div>
              <div className="list-content">
                <Stats
                  translations={{
                    stats (nbHits) {
                      return nbHits > 0 ? (`${nbHits} Empresa${nbHits !== 1 ? `s` : ''} encontrada${nbHits !== 1 ? `s` : ''}`
                      ) : <p>{General.noSearch}</p>
                    }
                  }}
                />
                <Hits hitComponent={ListSearch} />
              </div>
            </div>
          </InstantSearch>
        </div>
      </Container>
    </PageTemplate>

  }
}

export default Listing

export const query = graphql`
  query {
    site {
        siteMetadata {
          title
        }
      }
    coordsRest: allContentfulRestaurant(filter: {
        node_locale: {eq: "pt"}
      }) {
      edges {
        node {
          id
          name
          slug
          node_locale
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
          imageBanner {
            id
            secure_url
          }
          cuisine {
            name
          }
        }
      }
    }
    coordsServ: allContentfulService(filter: {
        node_locale: {eq: "pt"}
      }) {
      edges {
        node {
          id
          name
          slug
          node_locale
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
          imageBanner {
            id
            secure_url
          }
          services {
            name
          }
        }
      }
    }
  }
`

const Container = styled.div`

  .map {
    margin-top: -9.5rem;
  }

  .list-container {
    margin-top:2rem;

    .list-content {

      text-align: center;

      .ais-Hits {
        margin-top: -3rem;
        text-align: left;

        .gridContent {
          margin-top: 3rem;
        }
      }

      .ais-Stats {
        transform: translateY(-3rem);
        font-style: italic;
        color: #0070ff;

        &-text p {
          font-size: 2rem;
          color: #bd5407;
        }
      }
    }
  }

  .search-icon {
    display: none;
  }
  .search-box {
    display: flex;
    justify-content: center;
    margin-bottom: 6rem;

    .fasearch-icon {
      width: 2rem;
      height: 2rem;
      transform: translate(-4rem, .6em);
      fill: #1c1c1c91;
    }

    .ais-SearchBox {
      /* margin-top: -7rem; */

      input {
        width: 47rem;
        height: 40px;
        border-radius: 20px;
        border: none;
        box-shadow: 5px 3px 7px #aaaaaa8f;
        padding-left: 3rem;
        transition: all .2s;

        &::placeholder {
          font-size: 1.6rem;
          color: #1c1c1c91;
        }

        &:focus {
          outline: none;
          width: 50rem;
        }

        &[value] { /* text entered in input field */
          font-size: 1.8rem;
          color: #1c1c1c91;
          margin-left: 0px;
          transform: translateX(0rem);
        }

      }

      button {
        border: none;
        /* transform: translate(-56rem, .5rem); */
        background-color: transparent;


        .ais-SearchBox-submitIcon {
          display: none;
        }

        .ais-SearchBox-resetIcon {
          transform: translate(-5rem);
        }
      }
    }
  }





`