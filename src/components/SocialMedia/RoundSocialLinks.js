import React from 'react'
import socialIcons from '../../constants/social-icons'
import styled from 'styled-components'
import { color } from '../Styles/Variables'



const RoundSocialLinks = () => {
    return (
        <TopLinks>
            <section className="social-links">
                <ul className="items">
                    <li className="join-item">Join us on</li>
                    {socialIcons.map((item, index) => {
                        return (
                            <a key={index} href={item.url} target="_blank" data-title={item.dataTitle} rel="noreferrer">
                                <li >
                                    <div className={item.class}>
                                        {item.icon}
                                    </div>
                                </li>
                            </a>
                        )
                    })}
                </ul>
            </section>
        </TopLinks>
    )
}

export default RoundSocialLinks

const TopLinks = styled.div`
  z-index: -1;
  .items {
    display: flex;

    li {
      margin: 0;
      padding: 0 1rem;
      border-right: 1px solid #eee;

      &:last-child {
        border-right: none;
      }

      div {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        transition: all .2s ease-in-out;
        position: relative;

        &:hover {
          transform: scale(1.2, 1.2);
          transform: translateY(-.3rem);

        }

        &::after {
          content: "";
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
          position: absolute;
          transition: all .2s ease-in-out;
          left: 0;
          z-index: -1;
        }

        &:hover::after {
          transform: scale(1.3);
          box-shadow: -.2rem -1.2rem 1.5rem rgba(0, 0, 0, .25);
        }

      }

      .fb {
        background-color: #4267b2;

        &:hover::after {
          background-color: #4267b2;
        }
      }

      .tt {
        background-color: #08a0e9;

        &:hover::after {
          background-color: #08a0e9;
        }
      }

      .ig {
        background-color: #8134af;

        &:hover::after {
          background-color: #8134af;
        }
      }

      .pin {
          background-color: #bd081c;

          &:hover::after {
            background-color: #bd081c;
          }
      }

      .yt {
        background-color: #e52d27;

        &:hover::after {
          background-color: #e52d27;
        }
      }

      svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: ${color.colorText};
        transition: all .25s ease-in-out;

        svg:hover {
          fill: ${color.secondary};
          transform: scale(1.1);
        }
      }
    }
  }
`
