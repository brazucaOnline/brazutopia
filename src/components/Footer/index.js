import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { serviceLinks } from '../../constants/links'
import { useStaticQuery, graphql } from 'gatsby'
import { color } from '../Styles/Variables'
import SocialLinks from '../SocialMedia/SocialLinks'
import RoundSocialLinks from '../SocialMedia/RoundSocialLinks'
import BallLogo from '../BallLogo'
import FooterUseLinks from './FooterUse'
import General from '../../locales/pt/general.yaml'
import Pages from '../../locales/pt/pages.yaml'

const Footer = (props) => {
  const response = useStaticQuery(footerInfo)
  // const statesEn = response.statesEn.edges
  const statesPt = response.statesPt.edges
  // const categoriesEn = response.categoriesEn.edges
  const categoriesPt = response.categoriesPt.edges

  return (
    <FooterContainer>
      <section className='footer'>
        <div className='top-social-links'>
          <RoundSocialLinks />
        </div>
        <div className='footer__container'>
          <div className='footer__locations'>
            <h2 className='block-title'>{General.label.locations}</h2>
            <div className='states'>
              <ul className='states__list'>
                {statesPt.map((item, index) => {
                  return (
                    <Link key={index} to={`/state/${item.node.slug}`}>
                      <li className='states__item' title={item.node.name}>
                        {item.node.stateCode}
                      </li>
                    </Link>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className='footer__categories'>
            <h2 className='block-title'>{General.label.categories}</h2>
            <ul className='cat__list'>
              {categoriesPt.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={`/category/${item.node.slug}`}>
                      {item.node.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='footer__useful-links'>
            <h2 className='block-title'>{General.label.usefulLinks}</h2>
            <ul className='use-links__list'>
              <FooterUseLinks />
            </ul>
          </div>
          <div className='footer__brazuca-services'>
            <h2 className='block-title'>{General.label.brazucaServices}</h2>
            <ul className='br-serv__list'>
              {serviceLinks.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.path}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <li className='br-serv__item'>
                      {item.icon}
                      {item.text}
                    </li>
                  </a>
                )
              })}
            </ul>
          </div>
          <div className='footer__about'>
            <h2 className='block-title'>{General.label.aboutUs}</h2>
            <p>
              {Pages.about.trim}{' '}
              <Link to='/about'>{General.misc.readMore}</Link>
            </p>
            <SocialLinks />
          </div>
          {/* <div className='footer__lang'>
            <h2 className='block-title'>{General.label.languages}</h2>
          </div> */}
        </div>
        <div className='footer__copyright'>
          <div className='footer__logo'>
            <Link to='/'>
              <BallLogo />
            </Link>
          </div>
          <div>
            Copyright &copy; {new Date().getFullYear()} {General.copyright}
          </div>
        </div>
      </section>
    </FooterContainer>
  )
}

const footerInfo = graphql`
  query {
    cats: allContentfulCategory(
      filter: { node_locale: { eq: "en" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          id: contentful_id
          name
          slug
          node_locale
        }
      }
    }
    statesEn: allContentfulState(
      filter: { node_locale: { eq: "en" } }
      sort: { fields: stateCode, order: ASC }
    ) {
      edges {
        node {
          id: contentful_id
          name
          slug
          stateCode
          node_locale
        }
      }
    }
    statesPt: allContentfulState(
      filter: { node_locale: { eq: "pt" } }
      sort: { fields: stateCode, order: ASC }
    ) {
      edges {
        node {
          id: contentful_id
          name
          slug
          stateCode
          node_locale
        }
      }
    }
    categoriesEn: allContentfulCategory(
      filter: { node_locale: { eq: "en" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          id: contentful_id
          name
          slug
          node_locale
        }
      }
    }
    categoriesPt: allContentfulCategory(
      filter: { node_locale: { eq: "pt" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          id: contentful_id
          name
          slug
          node_locale
        }
      }
    }
  }
`

export default Footer

const FooterContainer = styled.div`
  position: relative;
  /* z-index: -1; */
  .footer {
    grid-column: full-start / full-end;
    display: grid;
    grid-template-columns: repeat(14, 1fr);

    background-color: #1d1e23;
    width: 100%;
    margin-top: 10rem;
    line-height: 1.7;
    color: #fff;
    z-index: 0;

    &__container {
      grid-column: 3 / 13;
      grid-row: 2;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 3rem;

      .block-title {
        border-bottom: 0.01rem solid #333232;
        position: relative;
        padding-bottom: 1.5rem;

        &::after {
          content: '';
          height: 0.22rem;
          background: ${color.secondaryBright};
          position: absolute;
          left: 0;
          bottom: 0;
          width: 6rem;
        }
      }

      h2 {
        text-transform: uppercase;
        font-weight: 300;
        margin-bottom: 2.5rem;
      }

      a {
        color: ${color.primary};
        font-weight: 400;

        &:hover {
          color: ${color.secondaryBright};
        }
      }

      li:hover svg {
        transform: translateX(-0.5rem) scale(1.3);
      }

      li,
      p {
        font-weight: 400;
        display: block;
      }
    }

    .states {
      /* width: 30rem; */

      &__list {
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        grid-template-columns: repeat(5, 1fr);
      }

    }

    &__categories {
      grid-column: 2;
    }

    &__useful-links {
      grid-column: 3;
    }

    &__brazuca-services {
      grid-column: 3;
      margin-top: -3rem;
      margin-bottom: -10rem;
      transform: translateY(-27rem);

      .br-serv__items {
        &--icons {
          width: 1.7rem;
          height: 1.7rem;
          fill: #e5e5e5;
          transform: translateY(0.3rem);
          margin-right: 0.5rem;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }

    .list li svg {
      fill: #999;
    }

    &__about {
      grid-row: 1;
      grid-column: 4;

      p {
        color: #999;
        z-index: 3;
        position: relative;
      }

      ul {
        transform: translateY(-3rem);
        z-index: 1;
      }

      li {
        color: #999;
        border-right: none;
        transform: translate(1rem, 5rem);
      }

      svg:hover {
        fill: ${color.secondary} !important;
        transform: scale(1.1);
      }

      .sml {
        background-color: transparent;
        border: none;
        transform: translate(-25rem, 2rem);

        .services {
          display: none;
        }

        .icons {
          box-shadow: none;
        }
      }
    }

    &__lang {
      transform: translateY(-3rem);
    }

    .top-social-links {
      grid-column: 1 / -1;
      margin: -3rem auto 5rem;

      .sml {
        background-color: transparent;
        border: none;

        .services {
          display: none;
        }
      }

      svg {
        fill: #fff;
        width: 3rem;
        height: 3rem;
        transform: translate(1.5rem, 1.5rem);
      }

      .join-item {
        display: none;
      }

      [data-title]:after {
        display: none;
      }
    }

    &__logo {
      display: flex;
      justify-content: center;

      img {
        width: 70%;
      }

      .logo-title {
        margin-top: -8rem;

        img {
          transition: all 0.3s;

          &:hover {
            filter: hue-rotate(265deg) brightness(170%);
          }
        }
      }

      #footerLogo._active {
        animation: rotation 3s forwards;
        animation-timing-function: ease-in-out;
      }

      #footerLogo.in-active {
        animation-direction: reverse;
      }
    }

    &__copyright {
      grid-row: 4;
      grid-column: 1 / -1;

      background-color: #000;
      padding-top: 3rem;
      padding-bottom: 3rem;
      text-align: center;
      font-weight: 300;
    }
  }
`
