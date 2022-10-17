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
import General from '../locales/pt/general.yaml'


const propTypes = {
  data: PropTypes.object.isRequired,
}

class StateTemplate extends React.Component {
  render () {
    const cities = orderBy(
      this.props.data.state.city,
      [object => new moment(object.createdAt)],
      ['asc']
    )
    const restaurants = orderBy(
      this.props.data.state.restaurant,
      [object => new moment(object.createdAt)],
      ['asc']
    )

    const services = orderBy(
      this.props.data.state.service,
      [object => new moment(object.createdAt)],
      ['asc']
    )

    const {
      name,
    } = this.props.data.state

    return <PageTemplate data={this.props.data} location={this.props.location}>
      <Helmet>
        <link rel="stylesheet" href="" />
      </Helmet>
      <Container>
        <div className="gridContent">
          <div className="gridContentCol">
            <section className="locations">
              <h2>{General.label.state}:</h2>
              <h1>{name}</h1>
            </section>
            <Content>
              <StateSection>
                <aside className="aside-links">
                  <h3>{General.label.cities}</h3>
                  <hr className="separator" />
                  <ul>
                    {cities.map(item => {
                      return <li>
                        <Link
                          className="underlined"
                          to={`/city/${item.slug}`}>
                          {item.name}
                        </Link>
                      </li>
                    })}
                  </ul>
                </aside>
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
              </StateSection>
            </Content>
          </div>
        </div>
      </Container>
    </PageTemplate>
  }
}

export const query = graphql`
  query stateQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    state: contentfulState(
      slug: { eq: $slug },
      node_locale: {eq: "pt"}
    ) {
        name
        city {
          name
          slug
          node_locale
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
  }
`

StateTemplate.propTypes = propTypes

export default StateTemplate

const StateSection = styled.section`
  display: flex;
`
