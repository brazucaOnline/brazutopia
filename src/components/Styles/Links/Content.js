import styled from "styled-components"
import { color } from '../Variables'

export default styled.ul`
  .card {
    width: 100%;

    .city-link {
      width: 230px;
      font-size: 1.8rem;
      padding: 2rem;
      background: #fff;
      margin-right: 3rem;
      font-family: 'Raleway';

      h3 {
        margin-bottom: 1rem;
        font-weight: 400;
      }

      a {
        color: ${color.primary};
        transition: all .2s ease-in-out;
        line-height: 1.6;

        &:hover {
          color: ${color.secondary};
        }
      }
    }
  }

  .list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2rem;
    grid-column: 3 / 13;
    transform: translateX(-.3rem);

    li {
      width: auto;
      margin-right: 2rem;
      padding-bottom: 4rem;
      background-color: #fff;
      transition: all .25s ease-out;

      .photo {
        transition: all .25s ease-out;
      }

      span {
        overflow: hidden;
      }

      &:hover {
        box-shadow: 1px 0 12px #333;

        .photo {
            transform: scale(1.08, 1.08);
        }
      }
    }

    .row {
      display: flex;
      flex-direction: column;

      .title {
        text-transform: uppercase;
        color: ${color.colorText};
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;

        h3, h5 {
          margin-top: 1.5rem;
          margin-left: 1.5rem;
        }

        &:hover {
          color: ${color.secondary};

          .photo {
              transform: scale(1, 1);
              border-color: ${color.secondary}
          }
        }
      }
    }
  }

  .item {
    margin: 2rem 0 0 1.5rem;
    color: ${color.colorText};

    &:hover {
      .photo {
          transform: scale(1, 1)
      }
    }

    a {
      color: ${color.colorText};
      transition: all .25s ease-in-out;

      &:hover {
          color: ${color.secondary}
      }
    }
  }
  .photo {
    max-width: 150%;
    position: relative;
    border-bottom: 6px solid ${color.primary};
  }

  .address {
    display: flex;
  }

  .icon {
    margin-right: 1.1rem;
    transform: translateY(.2rem)
  }
`