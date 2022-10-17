import React from 'react'
import * as PropTypes from "prop-types"
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

class ServiceTemplate extends React.Component {
  render () {
    const serviceArea = orderBy(
      this.props.data.serviceArea.service,
      [object => new moment(object.createdAt)],
      ['asc']
    )

    const {
      name,
      state
    } = this.props.data.serviceArea

    return <PageTemplate data={this.props.data} location={this.props.location}>
      <Helmet>
        <link rel="stylesheet" href="" />
      </Helmet>
      <Container>
        <div className="gridContent">
          <div className="gridContentCol">
            <section className="locations">
              <h2>{General.label.serviceArea}:</h2>
              <h1>{name} - {state[0].stateCode}</h1>
            </section>
            <Content>
              <div className="card">
                <ul className="list">
                  {
                    serviceArea.map(item => {
                      return <Card item={item} link="service" />
                    })
                  }
                </ul>
              </div>
            </Content>
          </div>
        </div>
      </Container>
    </PageTemplate>
  }
}

export const query = graphql`
  query serviceAreaQuery($slug: String!) {
    site {
      siteMetadata {
          title
      }
    }
    serviceArea: contentfulServiceArea (
      slug: { eq: $slug },
      node_locale: {eq: "pt"}
    ) {
        name
        slug
        state {
          stateCode
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

ServiceTemplate.propTypes = propTypes

export default ServiceTemplate

