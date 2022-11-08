require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

const { getPackedSettings } = require('http2')
const path = require('path')
const algoliaQueries = require('./src/utils/algolia-queries')

module.exports = {
  siteMetadata: {
    title: `Brazuca Online`,
    description: `Because finding what you need is our business!`,
    twitterUsername: `@BrazucaOnline`,
    siteUrl: `https://brazuca.online`,
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-exclude`,
      options: {
        paths: [
          '/en/branches/null',
          '/pt/branches/null',
          '/en/service-area/null',
          '/pt/service-area/null',
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-playground',

    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries: algoliaQueries,
        chunkSize: 10000, // default: 1000
        settings: {
          hitsPerPage: 3,
        },
      },
    },
  ],
}
