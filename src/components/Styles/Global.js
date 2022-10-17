import { createGlobalStyle } from 'styled-components'
import { font, color } from './Variables'


const GlobalStyle = createGlobalStyle`

*,
*::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

}

body {
    font-family: ${font.firstFont};
    font-size: 1.6rem;
    color: ${color.colorText};
    font-weight: 400;
    letter-spacing: .18rem;
    background-color: #f3f3f3;
}

ul {
    list-style: none;
    margin: 0;
}

p {
  margin-bottom: 1.5rem;
}

a {
    text-decoration: none;
}

a.underlined {
      color: rgba(0,0,0,.847);
      background-image: linear-gradient(${color.colorYellow}, ${color.colorYellow});
      background-position: 50% 100%;
      background-repeat: no-repeat;
      background-size: 0% 3px;
      transition: background-size .2s;

    &:hover {
      color: ${color.secondary};
      background-size: 100% 3px;
      padding-bottom: 5px;
    }
}

hr.separator {
  width: 5rem;
  margin-bottom: 1rem;
  transform: translateY(-.2rem);
  border: 1px solid ${color.primary}
}

.aside-links {
  width: 100%;
  margin-right: 3rem;
  padding: 3rem;
  line-height: 1.8;
  background-color: #fff;
  height: 45%;
  font-weight: 400;
  color: ${color.colorText};
  font-family: 'Raleway', Arial, sans-serif;

  h2 {
  }

  a {
    color: ${color.primary};
  }
}


blockquote {
  font-size: 3rem;
    display: flex;
    margin-top: 4.5rem;
    margin-left: 6rem;

    svg {
        fill: ${color.primary};
        margin-right: 1rem;
        transform: translateY(-.8rem)
    }
}

[data-title]:hover:after {
    opacity: 1;
    visibility: visible;
    transition: all .5s ease-in-out;
}

[data-title]:after {
    content: attr(data-title);
    background-color: rgba(212, 223, 224, 0.83);
    font-size: 1.2rem;
    font-weight: 300;
    text-transform: capitalize;
    color: #111;
    width: max-content;
    position: absolute;
    left: 110%;
    bottom: -3.2rem;
    padding: .4rem;
    opacity: 0;
    visibility: hidden;
    z-index: 99999;
}

[data-title] {
    position: relative;
}

[data-title]:hover:after {
    opacity: 1;
}

.home-container {
  position: relative;
  ${'' /* z-index: -1; */}
}

.business-container {
    display: grid;
    grid-template-columns: [full-start] 1fr [center-start] repeat(12, [col-start] minmax(min-content, 12rem) [col-end]) [center-end] 1fr [full-end];
    // row-gap: 10rem;
    column-gap: 2.5rem;


}

input[type="search"]::-webkit-search-cancel-button {
  display: none;
}

.listing-page .main-search,
.listing-page .search-icon {
    display: none;
  }

.gridContent {
  display: grid;
  grid-template-columns: repeat(14, 1fr);

  margin-top: 7rem;
}

.gridContentCol {
  grid-column: 3 / 13;
}

.textCenter {
  text-align: center;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}

`
export default GlobalStyle
