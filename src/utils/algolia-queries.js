const indexName = `business`
const indexNamePT = `businessPT`


const businessQueryEN = `{
    pages: allContentfulRestaurant(filter: {node_locale: {eq: "en"}} ) {
      nodes {
        id
        name
        street
        slug
        city {
          name
          slug
        }
        state {
          stateCode
        }
        coordinates {
          lat
          lon
        }
        postalCode
        tel
        category {
          id
          name
          slug
        }
        imageBanner {
          id
          secure_url
        }
        cuisine {
          name
        }
        highlight {
          name
        }
        tags {
          id
          name
          slug
        }
        priceRange {
          name
          symbol
          slug
        }
        businessHour {
          id
          weekday
          wd
          start_hour
          end_hour
        }
        node_locale
      }
    }
  }
`

const businessQueryPT = `{
    pages: allContentfulRestaurant(filter: {node_locale: {eq: "pt"}}, limit: 10 ) {
      nodes {
        id
        name
        street
        slug
        city {
          name
          slug
        }
        state {
          stateCode
        }
        coordinates {
          lat
          lon
        }
        postalCode
        tel
        category {
          id
          name
          slug
        }
        imageBanner {
          id
          secure_url
        }
        cuisine {
          name
        }
        highlight {
          name
        }
        tags {
          id
          name
          slug
        }
        priceRange {
          name
          symbol
          slug
        }
        businessHour {
          id
          weekday
          wd
          start_hour
          end_hour
        }
        node_locale
      }
    }
  }
`

const serviceQueryEN = `{
    pages: allContentfulService(filter: {node_locale: {eq: "en"}} ) {
      nodes {
        id
        nameServ: name
        street
        slugServ: slug
        city {
          name
          slug
        }
        state {
          stateCode
        }
        coordinates {
          lat
          lon
        }
        postalCode
        tel
        category {
          id
          name
          slug
        }
        imageBanner {
          id
          secure_url
        }
        services {
          name
        }
        highlight {
          name
        }
        serviceArea {
          name
        }
        tags {
          id
          name
          slug
        }
        businessHour {
          id
          weekday
          wd
          start_hour
          end_hour
        }
        node_locale
      }
    }
  }
`

const serviceQueryPT = `{
    pages: allContentfulService(filter: {node_locale: {eq: "pt"}}, limit: 10 ) {
      nodes {
        id
        nameServ: name
        street
        slugServ: slug
        city {
          name
          slug
        }
        state {
          stateCode
        }
        coordinates {
          lat
          lon
        }
        postalCode
        tel
        category {
          id
          name
          slug
        }
        imageBanner {
          id
          secure_url
        }
        services {
          name
        }
        highlight {
          name
        }
        serviceArea {
          name
        }
        tags {
          id
          name
          slug
        }
        businessHour {
          id
          weekday
          wd
          start_hour
          end_hour
        }
        node_locale
      }
    }
  }
`

function businessToAlgoliaRecord ({ id, name, nameServ, slug , slugServ, category, tel, city, street, postalCode, highlight, tags, cuisine, priceRange, node_locale, state, serviceArea, services, coordinates, ...rest }) {
  return {
    objectID: id,
    name,
    nameServ,
    street,
    slug,
    slugServ,
    category,
    highlight,
    tags,
    cuisine,
    tel,
    city,
    state,
    services,
    serviceArea,
    postalCode,
    coordinates,
    node_locale,
    priceRange,
    ...rest,
  }
}

const queries = [
  {
    query: businessQueryEN,
    transformer: ({ data }) => data.pages.nodes.map(businessToAlgoliaRecord),
    indexName: indexName
  },
  {
    query: businessQueryPT,
    transformer: ({ data }) => data.pages.nodes.map(businessToAlgoliaRecord),
    indexName: indexNamePT
  },
  {
    query: serviceQueryEN,
    transformer: ({ data }) => data.pages.nodes.map(businessToAlgoliaRecord),
    indexName: indexName
  },
  {
    query: serviceQueryPT,
    transformer: ({ data }) => data.pages.nodes.map(businessToAlgoliaRecord),
    indexName: indexNamePT
  },

]

module.exports = queries
