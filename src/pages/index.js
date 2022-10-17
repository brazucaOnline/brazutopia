import React from 'react'
import * as PropTypes from "prop-types"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { color } from '../components/Styles/Variables'
import FrontMap from '../components/GoogleMap/FrontMap'
import IndexWelcome from '../components/IndexPage/Welcome'
import Categories from '../components/IndexPage/Categories/Categories'
import PageTemplate from '../templates/pageTemplate'
import 'react-lazy-load-image-component/src/effects/blur.css'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const IndexPage = ({ data }) => {
  const {
    categoriesRest,
    categoriesServ,
    coordsRest,
    coordsServ,
  } = data

  return <PageTemplate>

    <div className="home-container">
      <FrontMap coordsRest={coordsRest} coordsServ={coordsServ}/>
      <IndexWelcome />
      <Category>
        <div className="categories">
          <Categories categoriesRest={categoriesRest} categoriesServ={categoriesServ}/>
        </div>
      </Category>
    </div>
  </PageTemplate>
}

IndexPage.propTypes = propTypes

export default IndexPage

export const query = graphql`
# query($locale: String!) {
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
        category {
          name
        }
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
        category {
          name
        }
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
  categoriesRest: allContentfulCategory(
      filter: {node_locale: {eq: "pt"}},
      sort: {
          fields: name
          order: ASC
      }
  ) {
    group(field: restaurant___category___name, limit: 1) {
      fieldValue
      totalCount
      edges {
        node {
          id
          name
          slug
          description {
              description
          }
          image {
            id
            secure_url
          }
          restaurant {
            name
          }
          node_locale
        }
      }
    }
  }
  categoriesServ: allContentfulCategory(
      filter: {node_locale: {eq: "pt"}},
      sort: {
          fields: name
          order: ASC
      }
  ) {
    group(field: service___category___name, limit: 1) {
      fieldValue
      totalCount
      edges {
        node {
          id
          name
          slug
          description {
              description
          }
          image {
            id
            secure_url
          }
          service {
            name
          }
          node_locale
        }
      }
    }
  }
 }
`

const Category = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);

  background-color: ${color.primary};

  .categories {
    grid-column: 3 / 13;
    margin: 0 auto;
    margin-bottom: 8rem;


  }
`
