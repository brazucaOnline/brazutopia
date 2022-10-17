import React from 'react'
import { Helmet } from "react-helmet"
import { Location } from '@reach/router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Seo from '../components/Seo'
import GlobalStyle from '../components/Styles/Global'
import General from '../locales/pt/general.yaml'


const PageTemplate = ({
  title,
  description,
  children,
}) => {
  const pageTitle = title ? `${title} - Brazuca Online` : 'Brazuca Online'
  const pageDescription = description ? `${description} - Brazuca Online` : `${General.slogan} - Brazuca Online`

  return (
    <>
      <Location>
        {({ location }) => (
          <Seo
            title={pageTitle}
            description={pageDescription}
            url={location.pathname}
          />
        )}
      </Location>
      <Helmet title={pageTitle} />
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default PageTemplate

