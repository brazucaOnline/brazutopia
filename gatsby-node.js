/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const fs = require('fs-extra')
const yaml = require('js-yaml')
const flatten = require('flat')

// const {createFilePath} = require(`gatsby-source-filesystem`);

// exports.onPreBootstrap = () => {
//   console.log("Copying locales");

//   const ptTranslation = loadTranslationObject("pt");
//   const enTranslation = loadTranslationObject("en");

//   // Create directory structure
//   fs.existsSync(path.join(__dirname, "/public/intl")) || fs.mkdirSync(path.join(__dirname, "/public/intl"));

//   // Save bundled translation files
//   fs.writeFileSync(path.join(__dirname, "/public/intl/pt.json"), JSON.stringify(flatten(ptTranslation)));
//   fs.writeFileSync(path.join(__dirname, "/public/intl/en.json"), JSON.stringify(flatten(enTranslation)));

//   // Copy redirects
//   fs.copySync(
//     path.join(__dirname, "/_redirects"),
//     path.join(__dirname, "/public/_redirects")
//   );
// };

// pages locale
// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   deletePage(page)
//   // You can access the variable "locale" in your page queries now
//   createPage({
//       ...page,
//       context: {
//           ...page.context,
//           // locale: page.context.intl.language,
//       },
//   })
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      restaurants: allContentfulRestaurant {
        edges {
          node {
            id
            contentful_id
            slug
            city {
              slug
            }
          }
        }
      }
      services: allContentfulService {
        edges {
          node {
            id
            contentful_id
            slug
            city {
              slug
            }
          }
        }
      }
      service: allContentfulServices {
        edges {
          node {
            id
            contentful_id
            slug
          }
        }
      }
      serviceArea: allContentfulServiceArea {
        edges {
          node {
            id
            contentful_id
            slug
          }
        }
      }
      state: allContentfulState {
        edges {
          node {
            id
            contentful_id
            slug
          }
        }
      }
      city: allContentfulCity {
        edges {
          node {
            id
            contentful_id
            slug
          }
        }
      }
      categories: allContentfulCategory {
        totalCount
        edges {
          node {
            id
            contentful_id
            slug
          }
        }
      }
      branches: allContentfulBranch {
        edges {
          node {
            id
            slug
          }
        }
      }
      cuisine: allContentfulCuisine {
        edges {
          node {
            id
            slug
          }
        }
      }
      tag: allContentfulTag {
        edges {
          node {
            id
            slug
          }
        }
      }
      price: allContentfulPriceRange {
        edges {
          node {
            id
            slug
          }
        }
      }
      highlight: allContentfulHighlights {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  data.restaurants.edges.forEach(({ node }) => {
    createPage({
      path: `/restaurant/${node.slug}/${node.city.slug}`,
      component: path.resolve(`./src/templates/restaurant.js`),
      context: {
        id: node.id,
        contentful_id: node.contentful_id,
        slug: node.slug,
      },
    })
  })

  data.services.edges.forEach(({ node }) => {
    createPage({
      path: `/service/${node.slug}/${node.city.slug}`,
      component: path.resolve(`./src/templates/service.js`),
      context: {
        id: node.id,
        contentful_id: node.contentful_id,
        slug: node.slug,
      },
    })
  })

  data.state.edges.forEach(({ node }) => {
    createPage({
      path: `/state/${node.slug}/`,
      component: path.resolve(`./src/templates/state.js`),
      context: {
        id: node.id,
        contentful_id: node.contentful_id,
        slug: node.slug,
      },
    })
  })

  data.city.edges.forEach(({ node }) => {
    createPage({
      path: `/city/${node.slug}/`,
      component: path.resolve(`./src/templates/city.js`),
      context: {
        id: node.id,
        contentful_id: node.contentful_id,
        slug: node.slug,
      },
    })
  })

  data.serviceArea.edges.forEach(({ node }) => {
    createPage({
      path: `/service-area/${node.slug}/`,
      component: path.resolve(`./src/templates/serviceArea.js`),
      context: {
        id: node.id,
        contentful_id: node.contentful_id,
        slug: node.slug,
      },
    })
  })

  data.branches.edges.forEach(({ node }) => {
    createPage({
      path: `/branches/${node.slug}/`,
      component: path.resolve(`./src/templates/branches.js`),
      context: {
        id: node.id,
        contentful_id: node.contentful_id,
        slug: node.slug,
      },
    })
  })

  // data.categories.edges.forEach(({node}) => {
  //   createPage({
  //     path: `/category/${node.slug}/`,
  //     component: path.resolve(`./src/templates/category.js`),
  //     context: {
  //       id: node.id,
  //       contentful_id: node.contentful_id,
  //       slug: node.slug,
  //     }
  //   })
  // })
  const {totalCount} = data.categories
  const catsPerPage = 10
  const numPages = Math.ceil(totalCount / catsPerPage)
  data.categories.edges.forEach(({ node }) => {
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/category/${node.slug}` : `/category/${node.slug}/${i + 1}`,
        component: path.resolve(`./src/templates/category.js`),
        context: {
          id: node.id,
          contentful_id: node.contentful_id,
          slug: node.slug,
          limit: catsPerPage,
          skip: i * catsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  data.cuisine.edges.forEach(({ node }) => {
    createPage({
      path: `/cuisine/${node.slug}/`,
      component: path.resolve(`./src/templates/cuisine.js`),
      context: {
        id: node.id,
        contentful_id: node.contentful_id,
        slug: node.slug,
      },
    })
  })
  data.service.edges.forEach(({ node }) => {
    createPage({
      path: `/services/${node.slug}/`,
      component: path.resolve(`./src/templates/services.js`),
      context: {
        id: node.id,
        contentful_id: node.contentful_id,
        slug: node.slug,
      },
    })
  })
  data.tag.edges.forEach(({ node }) => {
    createPage({
      path: `/tag/${node.slug}/`,
      component: path.resolve(`./src/templates/tag.js`),
      context: {
        id: node.id,
        contentful_id: node.contentful_id,
        slug: node.slug,
      },
    })
  })
  data.highlight.edges.forEach(({ node }) => {
    createPage({
      path: `/highlight/${node.slug}/`,
      component: path.resolve(`./src/templates/highlight.js`),
      context: {
        id: node.id,
        contentful_id: node.contentful_id,
        slug: node.slug,
      },
    })
  })
  data.price.edges.forEach(({ node }) => {
    createPage({
      path: `/price-range/${node.slug}/`,
      component: path.resolve(`./src/templates/price-range.js`),
      context: {
        id: node.id,
        contentful_id: node.contentful_id,
        slug: node.slug,
      },
    })
  })
}

// function loadTranslationObject(languageCode) {
//   const srcPath = path.join(__dirname, `/src/locales/${languageCode}/`);
//   const translationObjects = fs.readdirSync(srcPath).map(file => (
//     yaml.load(fs.readFileSync(path.join(srcPath, file)), {encoding: "utf-8"})
//   ));
//   return Object.assign({}, ...translationObjects)
// }
