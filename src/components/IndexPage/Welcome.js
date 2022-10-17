import React from 'react'
import styled from 'styled-components'
import { color } from '../Styles/Variables'
import BallLogo from '../BallLogo'
import slogan from '../../locales/pt/general.yaml'



const IndexWelcome = () => {
    return (
      <Welcome>
            <h1 className="block-title">{slogan.slogan}</h1>
            <hr />
            <p></p>
            <BallLogo />
        </Welcome>
    )
}

export default IndexWelcome

const Welcome = styled.section`
  height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  z-index: -1;

  .block-title {
    margin-top: 7rem;
  }

  hr {
      position: absolute;
      width: 20rem;
      text-align: center;
      border: 1px solid ${color.primary};
      transform: translateY(13rem)
  }
  
  h1 {
      font-family: 'Raleway', Arial, sans-serif;
      font-size: 2.5rem;
      font-weight: 400;
      text-transform: uppercase;
      margin-top: 10rem;
      margin-bottom: 5rem;
      position: relative;
  }


    .logo-ball__img {

      animation: spin 3s infinite reverse linear;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-359deg);
      }
    }

  .logo-title {
    transform: translateY(-10.8rem);
    .logo-ball__img-title {

      animation: spin 8s infinite linear;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(359deg);
      }
    }
  }
`
