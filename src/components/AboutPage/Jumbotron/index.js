import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { color } from '../../Styles/Variables'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Yaml from '../../../locales/pt/pages.yaml'

const Jumbotron = () => (
  <Container>
    <Image>
      <LazyLoadImage
        src={`${Yaml.about.jumbotron.image}`}
        alt='Hero Image'
        className='bg-image'
        effect='blur'
      />
    </Image>
    <div className='hero-links'>
      <h1>{Yaml.about.title}</h1>
      <div className='d-none d-lg-block'>
        <p>
          <Link to='/help'>{Yaml.about.jumbotron.faq}</Link>
          <span>|</span>
          <Link to='http://services.brazuca.online/contact' target='_blank'>
            {Yaml.about.jumbotron.contact}
          </Link>
          <span>|</span>
          <Link to='/listing'>{Yaml.about.jumbotron.listing}</Link>
        </p>
      </div>
    </div>
  </Container>
)

export default Jumbotron

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;

  /* position: relative; */
  /* z-index: -3; */

  font-family: 'Raleway', Arial, sans-serif;
  font-size: 2.5rem;
  font-variant: small-caps;
  font-weight: 700;
  color: #fff;
  text-align: center;

  a {
    font-family: 'Raleway', Arial, sans-serif;
    font-variant: small-caps;
    font-weight: 700;
    font-size: 2.5rem;
    color: #fff;
    background-image: linear-gradient(
      ${color.colorYellow},
      ${color.colorYellow}
    );
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: 0% 3px;
    transition: background-size 0.2s;

    &:hover {
      color: ${color.secondary};
      background-size: 100% 3px;
      padding-bottom: 5px;
    }
  }

  .hero-links {
    grid-row: 2 / 3;
    grid-column: 1 / 3;

    background-color: rgba(74, 65, 211, 0.8);
    padding: 25px 0 20px 0;
    z-index: 1;
    transform: translateY(-18rem);

    span {
      margin: 0 2rem;
    }
  }
`

const Image = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 3;
  height: 52rem;
  overflow: hidden;

  img {
    width: 100%;
    margin-top: -4rem;
  }
`

// style={{width: '100%', paddingTop: '60px', overflow: 'hidden'}}
