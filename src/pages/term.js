import React from 'react'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'
import Accordion from '../components/Accordion'
import styled from 'styled-components'
import { color } from '../components/Styles/Variables'
import Term from '../locales/pt/term.yaml'

const TermPage = () => (
  <PageTemplate title={Term.term.title}>
    <div className="gridContent">
      <div className="gridContentCol">
          <Container>
            <div className="title">
              <h1 className="block-title">{Term.term.title}</h1>
              <hr />
            </div>
            <p>{Term.term.publishedDate}</p>
            <Accordion label={Term.Q_intro}>
              <Markdown>{Term.A_intro}</Markdown>
            </Accordion>
            <Accordion label={Term.Q_copyright}>
              <Markdown>{Term.A_copyright}</Markdown>
            </Accordion>
            <Accordion label={Term.Q_license}>
              <Markdown>{Term.A_license}</Markdown>
            </Accordion>
            <Accordion label={Term.Q_acceptable}>
            <Markdown>{Term.A_acceptable}</Markdown>
            </Accordion>
            <Accordion label={Term.Q_warranties}>
              <Markdown>{Term.A_warranties}</Markdown>
            </Accordion>
            <Accordion label={Term.Q_limitations}>
              <Markdown>{Term.A_limitations}</Markdown>
            </Accordion>
            <Accordion label={Term.Q_violations}>
              <Markdown>{Term.A_violations}</Markdown>
            </Accordion>
            <Accordion label={Term.Q_variation}>
            <Markdown>{Term.A_variation}</Markdown>
            </Accordion>
            <Accordion label={Term.Q_attribution}>
              <Markdown>{Term.A_attribution}</Markdown>
            </Accordion>
            <Accordion label={Term.Q_autonomy}>
              <Markdown>{Term.A_autonomy}</Markdown>
            </Accordion>
            <Accordion label={Term.Q_third}>
            <Markdown>{Term.A_third}</Markdown>
            </Accordion>
            <Accordion label={Term.Q_integral}>
            <Markdown>{Term.A_integral}</Markdown>
            </Accordion>
          </Container>
      </div>
    </div>
  </PageTemplate>
)

export default TermPage


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

  ol {
    margin-left: 2rem;
  }
`