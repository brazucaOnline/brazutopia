import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaCogs, FaSearch } from 'react-icons/fa'
import SocialLinks from '../SocialMedia/SocialLinks'
import { color } from '../Styles/Variables'
import Search from '../Search/Search'
import Yaml from '../../locales/pt/general.yaml'

class Header extends React.Component {
  render() {

    const NavLinkEn = ({ id, name, additionalClasses }) => (
      <Link
        className={`nav-item nav-link ${additionalClasses}`}
        to={'/en/' + id}
      >
        {name}
      </Link>
    )

    NavLinkEn.defaultProps = {
      additionalClasses: '',
    }

    const NavLinkPt = ({ id, name, additionalClasses }) => (
      <Link
        className={`nav-item nav-link ${additionalClasses}`}
        to={'/' + id}
      >
        {name}
      </Link>
    )

    NavLinkPt.defaultProps = {
      additionalClasses: '',
    }

    // return (
    //   <>
    //     <TopLinks>
    //       <div className='sml'>
    //         <section>
    //           <a
    //             href='http://services.brazuca.online'
    //             target='_blank'
    //             rel='noreferrer'
    //           >
    //             <FaCogs /> {Yaml.label.brazucaServices}
    //           </a>
    //         </section>
    //         <SocialLinks />
    //       </div>
    //     </TopLinks>
    //     <Nav>
    //       {/* <nav className='navbar__container'>
    //         <Link
    //           className='navbar-brand'
    //           to={intl === 'en' ? '/' : '/pt/'}
    //         >
    //           {/* <img src={ Yaml.header.image } height="75px" alt="Brazuca Online" /> */}
    //       {/* </Link> */}
    //       {/* <LanguageSwitcher /> */}
    //       {/* </nav> */}
    //       <nav className='navbar__container'>
    //         <Link to='/'>
    //           <img
    //             src={Yaml.header.image}
    //             height='75px'
    //             alt='Brazuca Online'
    //           />
    //         </Link>
    //       </nav>
    //     </Nav>
    //     <SearchBar>
    //       <div className='grid'>
    //         <FaSearch className='search-icon' />
    //         <Search />
    //       </div>
    //     </SearchBar>
    //   </>
    // )

    return (
      <>
        <TopLinks>
          <div className='sml'>
            <section>
              <a
                href='http://services.brazuca.online'
                target='_blank'
                rel='noreferrer'
              >
                <FaCogs /> {Yaml.label.brazucaServices}
              </a>
            </section>
            <SocialLinks />
          </div>
        </TopLinks>
        <Nav>
          <nav className='navbar__container'>
            <Link className='navbar-brand' to='/'>
              <img src={Yaml.header.image} height='75px' alt='Brazuca Online' />
            </Link>
            <ul className='navbar__container--links'>
              <li>
                <Link
                  to='/'
                  className='nav-item nav-link'
                  id='home'
                  name={Yaml.header.home}
                >
                  {Yaml.header.home}
                </Link>
              </li>
              <li>
                <NavLinkPt id='about' name={Yaml.header.about} />
              </li>
              <li>
                <NavLinkPt id='listing' name={Yaml.header.business} />
              </li>
              <li>
                <Link
                  to='http://services.brazuca.online/contact'
                  target='_blank'
                  className='nav-item nav-link'
                  id='contact'
                  name={Yaml.header.contact}
                >
                  {Yaml.header.contact}
                </Link>
              </li>
              <li>
                <NavLinkPt id='help' name={Yaml.header.help} />
              </li>
            </ul>
          </nav>
        </Nav>
        <SearchBar>
          <div className='grid'>
            <FaSearch className='search-icon' />
            <Search />
          </div>
        </SearchBar>
      </>
    )
  }
}

export default Header

const TopLinks = styled.section`
  border-top: 4px solid ${color.primary};
  .sml {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-bottom: 1px solid #eee;

    a {
      color: ${color.colorText};
      transition: all 0.2s ease-in-out;

      &:hover {
        color: ${color.secondary};

        svg {
          color: ${color.primary};
        }
      }
    }

    svg {
      margin-right: 2px;
      transform: translateY(2px);
    }
  }
`

const Nav = styled.section`
  display: grid;
  grid-template-columns: repeat(14, 1fr);

  background-color: #fff;
  width: 100%;
  height: 11rem;
  padding: 2rem 0;
  // position: fixed;

  .navbar__container {
    justify-content: space-between;
    grid-column: 3 / 13;
    display: flex;
    align-items: center;
    text-transform: uppercase;

    .navbar-brand {
      img {
        transition: all 0.2s ease-in-out;
      }

      img:hover {
        transform: scale(1.03);
      }
    }

    li {
      display: inline-block;
      margin-right: 4rem;

      .icon {
        width: 2rem;
        height: 2rem;
        transform: translateY(0.2rem);
        transition: all 0.2s ease-in-out;

        &:hover {
          transform: scale(1.3);
          color: ${color.secondary};
        }
      }
    }

    .navbar__container--links {
      a[aria-current='page'] {
        background-image: linear-gradient(
          to right,
          ${color.secondary},
          ${color.secondaryBright}
        );
        background-position: 0% 0%;
        background-repeat: no-repeat;
        background-size: 100% 5px;
        padding-top: 7px;
      }

      a[aria-current='page'].search-link {
        background-size: 0 0;

        .icon:hover {
          transform: translateY(0.2rem) scale(1);
        }

        .icon {
          fill: ${color.secondary};
        }
      }

      a {
        color: ${color.colorText};
        background-image: linear-gradient(
          to right,
          ${color.secondary},
          ${color.secondaryBright}
        );
        background-position: 0% 0%;
        background-repeat: no-repeat;
        background-size: 0 5px;
        transition: background-size 0.2s;

        &:hover {
          background-size: 100% 5px;
          padding-top: 7px;
        }
      }

      .search-link:hover {
        background-image: none;
        background-size: 0 0;
      }
    }

    &--lang {
      a {
        margin-right: 3.5rem;

        img {
          box-shadow: 0.2rem 0.4rem 0.5rem rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease-in-out;
        }

        img:hover {
          transform: scale(1.3);
        }
      }
    }
  }
`

const SearchBar = styled.section`
  height: 100px;
  margin-top: -1rem;
  background-color: ${color.primary};
  position: relative;
  z-index: 3;

  .grid {
    grid-template-columns: repeat(7, 1fr);
    justify-content: center;
    transform: translateY(3rem);

    .ais-SearchBox {
      grid-row: 1;
      grid-column: 4 / 5;

      button[type='submit'],
      button[type='reset'] {
        display: none;
      }
    }

    .search-icon {
      grid-row: 1;
      grid-column: 4 / -1;
      width: 2rem;
      height: 2rem;
      transform: translate(0.5rem, 0.6em);
      fill: #1c1c1c91;
      z-index: 10;
    }

    .results {
      grid-column: 4 / 6;
      width: 100%;
      transform: translateY(3rem);

      a {
        color: #333;
      }

      .ais-Hits-list {
        background-color: #fff;
        margin-top: -3rem;
        padding: 0 2rem 2rem 2rem;
        transform: translateY(-2rem);
      }

      .ais-Hits-item {
        padding-bottom: 2rem;
        margin-top: 2rem;
        transition: all 0.3s;

        &:not(:last-child) {
          border-bottom: 1px solid #eee;
        }

        .title {
          margin-bottom: 1rem;
          font-weight: 400;
        }
      }

      .ais-Stats {
        font-style: italic;
        background-color: #fff;
        height: 9rem;
        padding-top: 3rem;
        padding-right: 2rem;
        padding-bottom: 2rem;
        text-align: right;

        p {
          text-align: center;
          position: relative;
          z-index: 3;
        }
      }
    }
  }

  input {
    width: 43rem;
    height: 40px;
    border-radius: 20px;
    border: none;
    box-shadow: 5px 3px 7px #aaaaaa8f;
    padding-left: 3rem;
    transition: all 0.2s;

    &::placeholder {
      font-size: 1.6rem;
      color: #1c1c1c91;
    }

    &:focus {
      outline: none;
      box-shadow: 1px 2px 10px #108bad;
      width: 50rem;
      transform: scale(5);
    }

    &[value] {
      /* text entered in input field */
      font-size: 1.8rem;
      color: #1c1c1c91;
      margin-left: 0px;
      transform: translateX(0rem);
    }
    &[type='search']::-webkit-search-cancel-button {
      display: block;
      transform: translate(-1rem, -0.2rem);
    }
  }
`
