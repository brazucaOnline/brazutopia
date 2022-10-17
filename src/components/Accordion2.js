import React, { useState, useRef } from 'react'
import { DataEn } from '../locales/en/privacy'
import { DataPt } from '../locales/pt/privacy'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { injectIntl, Link } from 'react-intl'



const AccordionSection = styled.div`
  height: 100vh;
  /* font-family: initial; */
`

const Container = styled.div`
width: 100%;
`

const Wrap = styled.div`
  background: #f7faf5;
  border: 1px solid #ddd;
  color: #1c1c1c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: all ease 3s;

  h1 {
    padding: 2rem;
    font-size: 2rem;
    font-weight: 400;

    text-align: left;
  }

  span {
    margin-right: 1.5rem;
  }
`

const Dropdown = styled.div`
  background: #fff;
  color: #666;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 2rem 5rem;
  border: 1px solid #ddd;

  height: 0;
    overflow: hidden;
    transition: height ease .3s;

  p {
    font-size: 2rem;
  }
`

const Accordion = ({ intl }) => {
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null)
    }

    setClicked(index)
  }

  return (
    <IconContext.Provider value={{ color: '#666', size: '25px' }}>
      <AccordionSection>
        <Container>
          {intl.locale === 'en'
            ? DataEn.map((item, index) => {
              return (
                <div key={index}>
                  <Wrap onClick={() => toggle(index)}>
                    <h1>{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown
                    >
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </div>
              )
            })
            : DataPt.map((item, index) => {
              return (
                <div key={index}>
                  <Wrap onClick={() => toggle(index)}>
                    <h1>{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </div>
              )
            })
          }
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  )
}

export default injectIntl(Accordion)