import React from 'react'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'
import Accordion from '../components/Accordion'
import styled from 'styled-components'
import {color} from '../components/Styles/Variables'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Help from '../locales/pt/help.yaml'


const HelpPage = () => (
  <PageTemplate title={Help.help.title}>
    <div className="gridContent">
      <div className="gridContentCol">
          <Container>
            <div className="title">
              <h1 className="block-title">{Help.help.title}</h1>
              <hr />
              <LazyLoadImage src="https://res.cloudinary.com/brazucacms/image/upload/v1613260257/images/help-banner.jpg" alt="help banner"/>
            </div>
            <Accordion label={Help.Q_whatBO}>
              <Markdown>{Help.A_whatBO}</Markdown>
            </Accordion>
            <Accordion label={Help.Q_termPrivacy}>
              <Markdown>{Help.A_termPrivacy}</Markdown>
            </Accordion>
            <Accordion label={Help.Q_responsabilityAccuracy}>
            <Markdown>{Help.A_responsabilityAccuracy}</Markdown>
            </Accordion>
            <Accordion label={Help.Q_relationBusiness}>
              <Markdown>{Help.A_relationBusiness}</Markdown>
            </Accordion>
            <Accordion label={Help.Q_editPage}>
              <Markdown>{Help.A_editPage}</Markdown>
            </Accordion>
            <Accordion label={Help.Q_outsideUSA}>
              <Markdown>{Help.A_outsideUSA}</Markdown>
            </Accordion>
            {/* <Accordion label={Help.Q_multilingual}>
            <Markdown>{Help.A_multilingual}</Markdown>
            </Accordion> */}
            <Accordion label={Help.Q_otherServices}>
              <Markdown>{Help.A_otherServices}</Markdown>
            </Accordion>
            <Accordion label={Help.Q_listingPrice}>
              <Markdown>{Help.A_listingPrice}</Markdown>
            </Accordion>
            <Accordion label={Help.Q_reviews}>
            <Markdown>{Help.A_reviews}</Markdown>
            </Accordion>
          </Container>
      </div>
    </div>
  </PageTemplate>
)

export default HelpPage


const Container = styled.div`
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  hr {
        position: absolute;
        width: 7rem;
        text-align: center;
        border: 1px solid ${color.primary};
        transform: translateY(4rem)
  }

  h1 {
      font-family: 'Raleway', Arial, sans-serif;
      font-size: 3rem;
      font-weight: 400;
      text-transform: uppercase;
      margin-bottom: 8rem;
      position: relative;
      text-align: center;
  }

  img {
    margin-bottom: 5rem;
  }

  ol {
    margin-left: 2rem;
  }
`