import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { FiPlus, FiMinus } from 'react-icons/fi'


const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const parentRef = useRef()

  return (
    <AccordionSection className="collapsible">
      <div className="toggle" onClick={() => setIsOpen(!isOpen)} onKeyDown={() => setIsOpen(!isOpen)} role="link" tabIndex="0">
        <div>{props.label}</div>
        <span>{isOpen ? <FiMinus /> : <FiPlus />}</span>
      </div>
      <div
        className="content-parent"
        ref={parentRef}
        style={
          isOpen ? {
            height: parentRef.current.scrollHeight + "px"
          } : {
              height: "0"
            }
        }
      >
        <div className="content">{props.children}</div>
      </div>
    </AccordionSection>
  )
}

export default Accordion

const AccordionSection = styled.div`
  .toggle {
    display: flex;
    justify-content: space-between;
    background: #f7faf5;
    border: 1px solid #ddd;
    font-size: 2rem;
    color: #1c1c1c;
    padding: 1.5rem;
    cursor: pointer;

  }

  .content-parent {
    height: 0;
    overflow: hidden;
    transition: height ease .3s;
  }

  .content {
    background: #fff;
    border: 1px solid #ddd;
    padding: 2rem 5rem;
    font-size: 1.8rem;



  }

`
