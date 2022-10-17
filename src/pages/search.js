import React from 'react'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'
import Jumbotron from '../components/AboutPage/Jumbotron'
import Pages from '../locales/pt/pages.yaml'

const SearchPage = () => (
  <PageTemplate>
    <Jumbotron />
    <div className="container pt-5 pb-5">
      <Markdown>{Pages.about.text}</Markdown>
    </div>
  </PageTemplate>
)

export default SearchPage
