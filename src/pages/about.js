import React from 'react'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'
import Jumbotron from '../components/AboutPage/Jumbotron'
import styled from 'styled-components'
import { FaQuoteLeft } from 'react-icons/fa'
import { color } from '../components/Styles/Variables'
import Yaml from '../locales/pt/pages.yaml'
import Slogan from '../locales/pt/general.yaml'

const AboutPage = () => (
  <PageTemplate title={Yaml.about.title} description={Yaml.about.description}>
    <Jumbotron />
    <Container className='gridContent container pt-5 pb-5'>
      <article className='gridContentCol'>
        <Markdown>{Yaml.about.text}</Markdown>
        <blockquote>
          <FaQuoteLeft />
          {Slogan.slogan}
        </blockquote>
      </article>
    </Container>
  </PageTemplate>
)

const Container = styled.div`

  ul {
    list-style: disc;
    margin-left: 4rem;
    margin-bottom: 2rem;
  }

  a {
    color: ${color.primary};

    &:hover {
      color: ${color.secondary};
    }
  }

  article {
    background-color: #fff;
    padding: 8rem 5rem 10rem;
  }
`
export default AboutPage
