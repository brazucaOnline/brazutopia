import React from 'react'
import * as PropTypes from "prop-types"
import { graphql, Link } from 'gatsby'
import PageTemplate from './pageTemplate'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Helmet } from 'react-helmet'
import moment from 'moment'
import { orderBy } from 'lodash'
import Card from '../components/Card'
import Container from '../components/Styles/Links/Container'
import Content from '../components/Styles/Links/Content'
import styled from 'styled-components'
import Pages from '../locales/pt/pages.yaml'


const propTypes = {
  data: PropTypes.object.isRequired,
}

class CategoryTemplate extends React.Component {
  render () {
    
    const restaurants = orderBy(
      this.props.data.category.restaurant,
      [object => new moment(object.createdAt)],
      ['asc']
    )

    const services = orderBy(
      this.props.data.category.service,
      [object => new moment(object.createdAt)],
      ['asc']
    )

    const {
      name,
      description,
    } = this.props.data.category

    // const catsEn = this.props.data.categoriesEn.edges
    // const catNamesEn = catsEn.map(item => {
    //   return (
    //     <ul>
    //       <Link className="underlined" to={`/category/${item.node.slug}`}>
    //         <li>{item.node.name}</li>
    //       </Link>
    //     </ul>
    //   )
    // })
    const catsPt = this.props.data.categoriesPt.edges
    const catNamesPt = catsPt.map(item => {

      return (
        <ul>
          <li>
            <Link className='underlined' to={`/category/${item.node.slug}`}>
              {item.node.name}
            </Link>
          </li>
        </ul>
      )
    })

    return <PageTemplate data={this.props.data} location={this.props.location}>
      <Helmet>
        <link rel="stylesheet" href="" />
      </Helmet>
      <Container>
        <div className="gridContent">
          <div className="gridContentCol">
            <section className="locations">
              <h2>{Pages.category.label}:</h2>
              <h1>{name}</h1>
              <h3>{description.description}</h3>
            </section>
            <CatSection>
              <aside className="aside-links">
                <h2>All Categories</h2>
                <hr className="separator" />
                { catNamesPt }
              </aside>
              <Content>
                <div className="card">
                  <ul className="list">
                    {
                      restaurants.map(item => {
                        return <Card item={item} link="restaurant" />
                      })
                    }
                    {
                      services.map(item => {
                        return <Card item={item} link="service" />
                      })
                    }
                  </ul>
                </div>
              </Content>
            </CatSection>
          </div>
        </div>
      </Container>
    </PageTemplate>
  }
}

export const query = graphql`
  query categoryQuery($slug: String!, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    category: contentfulCategory(
      slug: { eq: $slug }
      node_locale: { eq: "pt" }
    ) {
      name
      description {
        description
      }
      restaurant {
        id
        name
        slug
        street
        city {
          name
          slug
        }
        state {
          stateCode
        }
        postalCode
        tel
        website
        imageBanner {
          url
          id
        }
        createdAt
        node_locale
      }
      service {
        id
        name
        slug
        street
        city {
          name
          slug
        }
        state {
          stateCode
        }
        postalCode
        tel
        website
        imageBanner {
          url
          id
        }
        createdAt
        node_locale
      }
    }
    categoriesPt: allContentfulCategory(
      filter: { node_locale: { eq: "pt" } }
      sort: { fields: name }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          name
          slug
          node_locale
        }
      }
    }
  }
`

CategoryTemplate.propTypes = propTypes

export default CategoryTemplate

const CatSection = styled.section`
  display: flex;

`