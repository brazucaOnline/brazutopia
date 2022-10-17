import React from 'react'
import socialIcons from '../../constants/social-icons'
import styled from 'styled-components'
import { color } from '../Styles/Variables'

const SocialLinks = () => {
  return (
    <TopLinks>
      <section className='social-links'>
        <ul className='list'>
          <li className='join-item'>Join us on</li>
          {socialIcons.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={item.url}
                  target='_blank'
                  data-title={item.dataTitle}
                  rel='noreferrer'
                >
                  {item.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </TopLinks>
  )
}

export default SocialLinks

const TopLinks = styled.div`
  .list {
    display: flex;

    li {
      margin: 0;
      padding: 0 1rem;
      border-right: 1px solid #eee;

      &:last-child {
        border-right: none;
      }

      svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: ${color.colorText};
        transition: all 0.25s ease-in-out;
        box-shadow: 0.2rem 0.4rem 0.5rem rgba(0, 0, 0, 0.2);

        &:hover {
          fill: ${color.secondary};
          transform: scale(1.1);
        }
      }
    }
  }
`
