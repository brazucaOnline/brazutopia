import React from 'react'
import * as PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PageTemplate from './pageTemplate'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Helmet } from 'react-helmet'
import moment from 'moment'
import { orderBy } from 'lodash'
import Card from '../components/Card'
import Container from '../components/Styles/Links/Container'
import Content from '../components/Styles/Links/Content'
import General from '../locales/pt/general.yaml'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class HighlightTemplate extends React.Component {
  render() {
    const restaurants = orderBy(
      this.props.data.highlight.restaurant,
      [(object) => new moment(object.createdAt)],
      ['asc']
    )

    const services = orderBy(
      this.props.data.highlight.service,
      [(object) => new moment(object.createdAt)],
      ['asc']
    )

    const { name } = this.props.data.highlight

    return (
      <PageTemplate data={this.props.data} location={this.props.location}>
        <Helmet>
          <link rel='stylesheet' href='' />
        </Helmet>
        <Container>
          <div className='gridContent'>
            <div className='gridContentCol'>
              <section className='locations'>
                <h2>{General.label.highlight}:</h2>
                <h1>{name}</h1>
              </section>
              <Content>
                <div className='card'>
                  <ul className='list'>
                    {restaurants.map((item) => {
                      return <Card item={item} link='restaurant' />
                    })}
                    {services.map((item) => {
                      return <Card item={item} link='service' />
                    })}
                  </ul>
                </div>
              </Content>
            </div>
          </div>
        </Container>
      </PageTemplate>
    )
  }
}

export const query = graphql`
  query highlightQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    highlight: contentfulHighlights(
      slug: { eq: $slug }
      node_locale: { eq: "pt" }
    ) {
      name
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
  }
`

HighlightTemplate.propTypes = propTypes

export default HighlightTemplate
