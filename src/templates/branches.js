import React from 'react'
import { graphql } from 'gatsby'
import PageTemplate from './pageTemplate'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Pager from '../components/Pager'
import moment from 'moment'
import { orderBy } from 'lodash'
import Content from '../components/Styles/Links/Content'
import Card from '../components/Card'
import Pages from '../locales/pt/pages.yaml'

class BranchTemplate extends React.Component {
  render() {
    const pageContext = this.props.pageContext

    const restaurants = orderBy(
      this.props.data.branch.restaurant,
      [(object) => new moment(object.createdAt)],
      ['asc']
    )

    const services = orderBy(
      this.props.data.branch.service,
      [(object) => new moment(object.createdAt)],
      ['asc']
    )
    const { name } = this.props.data.branch

    return (
      <PageTemplate
        title={`Branches: ${name}`}
        description={Pages.branches.description}
      >
        <Helmet>
          <link rel='stylesheet' href='' />
        </Helmet>
        <Container>
          <div className='gridContent'>
            <div className='gridContentCol'>
              <section className='other-locs'>
                <h2>{Pages.branches.otherLocations}</h2>
                <h1>{name}</h1>
                <h3>{Pages.branches.description}</h3>
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
              {/* <BranchPreview restaurant={restaurant} service={service} /> */}
            </div>
            <Pager pageContext={pageContext} />
          </div>
        </Container>
      </PageTemplate>
    )
  }
}

export const query = graphql`
  query ($slug: String!) {
    branch: contentfulBranch(slug: { eq: $slug }, node_locale: { eq: "pt" }) {
      name
      restaurant {
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
        tel
        website
        imageBanner {
          url
          id
        }
      }
      service {
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
        tel
        website
        imageBanner {
          url
          id
        }
      }
    }
  }
`

export default BranchTemplate

const Container = styled.div`
  .card {
    position: relative;
    /* z-index: -1; */
  }

  .other-locs {
    text-align: center;
    margin-bottom: 3.5rem;

    h1 {
      font-size: 4rem;
      font-weight: 400;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 3rem;
      font-weight: 300;
      margin-bottom: 2rem;
      font-variant: small-caps;
    }

    h3 {
      font-size: 2rem;
      font-weight: 400;
    }
  }
`
