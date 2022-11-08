import React from 'react'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'
import Accordion from '../components/Accordion'
import styled from 'styled-components'
import { color } from '../components/Styles/Variables'
import Privacy from '../locales/pt/privacy.yaml'

const PrivacyPage = () => (
  <PageTemplate title={Privacy.privacy.title}>
    <div className='gridContent'>
      <div className='gridContentCol'>
        <Container>
          <div className='title'>
            <h1 className='block-title'>{Privacy.privacy.title}</h1>
            <hr />
          </div>
          <p>{Privacy.privacy.publishedDate}</p>
          <Accordion label={Privacy.Q_intro}>
            <Markdown>{Privacy.A_intro}</Markdown>
          </Accordion>
          <Accordion label={Privacy.Q_infoCollect}>
            <Markdown>{Privacy.A_infoCollect}</Markdown>
          </Accordion>
          <Accordion label={Privacy.Q_infoUse}>
            <Markdown>{Privacy.A_infoUse}</Markdown>
          </Accordion>
          <Accordion label={Privacy.Q_disclosure}>
            <Markdown>{Privacy.A_disclosure}</Markdown>
          </Accordion>
          <Accordion label={Privacy.Q_retention}>
            <Markdown>{Privacy.A_retention}</Markdown>
          </Accordion>
          <Accordion label={Privacy.Q_security}>
            <Markdown>{Privacy.A_security}</Markdown>
          </Accordion>
          <Accordion label={Privacy.Q_infoUse}>
            <Markdown>{Privacy.A_infoUse}</Markdown>
          </Accordion>
          <Accordion label={Privacy.Q_changes}>
            <Markdown>{Privacy.A_changes}</Markdown>
          </Accordion>
          <Accordion label={Privacy.Q_children}>
            <Markdown>{Privacy.A_children}</Markdown>
          </Accordion>
          <Accordion label={Privacy.Q_third_party}>
            <Markdown>{Privacy.A_third_party}</Markdown>
          </Accordion>
          <Accordion label={Privacy.Q_cookies}>
            <Markdown>{Privacy.A_cookies}</Markdown>
            <ol className='privacy-external-links'>
              <li>
                no Internet Explorer,
                <a
                  href='https://support.microsoft.com/pt-br/help/278835/how-to-delete-cookie-files-in-internet-explorer'
                  target='_blank'
                  rel="noreferrer"
                >
                  {' '}
                  instruções aqui
                </a>
              </li>
              <li>
                no Firefox,
                <a
                  href='https://support.mozilla.org/pt-BR/kb/exclua-cookies-para-remover-info-armazenadas'
                  target='_blank'
                  rel="noreferrer"
                >
                  {' '}
                  instruções aqui
                </a>
              </li>
              <li>
                no Chrome,
                <a
                  href='https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=pt-BR'
                  target='_blank'
                  rel="noreferrer"
                >
                  {' '}
                  instruções aqui
                </a>
              </li>
            </ol>
            <p className='privacy-10'>
              10. A maioria dos navegadores permitem que você se recuse a
              aceitar cookies:
            </p>
            <ol className='privacy-external-links'>
              <li>
                no Internet Explorer, você pode bloquear cookies,
                <a
                  href='https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies'
                  target='_blank'
                  rel="noreferrer"
                >
                  {' '}
                  instruções aqui
                </a>
              </li>
              <li>
                no Firefox,
                <a
                  href='https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam'
                  target='_blank'
                  rel="noreferrer"
                >
                  {' '}
                  instruções aqui
                </a>
              </li>
              <li>
                no Chrome,
                <a
                  href='https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=pt-BR'
                  target='_blank'
                  rel="noreferrer"
                >
                  {' '}
                  instruções aqui
                </a>
              </li>
            </ol>
          </Accordion>
        </Container>
      </div>
    </div>
  </PageTemplate>
)

export default PrivacyPage

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
    transform: translateY(4rem);
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

  .privacy-external-links {
    margin-left: 4rem ;

    li {
      line-height: 2;
    }

  }
  .privacy-10 {
    margin-left: -2rem;
    margin-top: 1rem;
  }
`
