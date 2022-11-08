import styled from "styled-components"
import {color} from '../Variables'

export default styled.div`
  position: relative;
  /* z-index: -3; */

  .biz-node {
    .block-title,
    .search-title {
      font-family: 'Raleway', Arial, sans-serif;
      font-size: 2rem;
      color: #2b2b2b;
      text-transform: uppercase;
      font-weight: 500;
      padding-bottom: 1.1rem;
      margin-bottom: 2rem;
    }

    .block-title::after {
      content: '';
      width: 6rem;
      height: 0.2rem;
      background: ${color.primary};
      position: absolute;
      bottom: 0;
      left: 0;
    }
    a.underlined {
      color: rgba(0, 0, 0, 0.847);
      background-image: linear-gradient(
        ${color.colorYellow},
        ${color.colorYellow}
      );
      background-position: 50% 100%;
      background-repeat: no-repeat;
      background-size: 0% 3px;
      transition: background-size 0.2s;
    }

    a:hover {
      color: ${color.secondary};
      background-size: 100% 3px;
      padding-bottom: 5px;
    }

    li {
      display: inline-block;
      margin: 0 10px 10px 0;
    }

    .biz-clock {
      width: 0.8em;
      height: 0.8em;
    }

    .biz-open {
      font-size: 2.3rem;
      font-variant: all-small-caps;
      font-weight: 400;
      color: ${color.secondaryBright};
    }

    .biz-closed {
      font-size: 2.5rem;
      font-variant: small-caps;
      font-weight: 400;
      color: ${color.colorYellow};
    }

    .biz-hour-short {
      display: block;
    }

    .header {
      /* grid-column: full-start / full-end; */
      display: grid;
      /* grid-template-columns: repeat(12, 1fr); */

      background-image: radial-gradient(
        farthest-corner at 40px 40px,
        rgba(3, 122, 33, 0.75) 0%,
        rgba(100, 107, 2, 0.75) 100%
      );

      justify-content: center;
      align-items: end;
      height: 54rem;
      margin-bottom: 10rem;
      font-size: 1.8rem;

      &__banner {
        grid-row: 1 / 2;
        grid-column: 1 / -1;
        height: 54rem;
        display: grid;
        transform: translateX(-10rem);

        .header__biz-hour {
          transform: translateY(1.5rem);
        }

        .banner-container {
          grid-column: 2/ 12;
          grid-row: 1;
          overflow: hidden;
          width: 130%;

          img {
            filter: contrast(1.3);
          }
        }
      }

      img {
        width: 114%;
      }

      &__biz-map {
        grid-row: 1;
        grid-column: 11;
        transform: translate(2rem, 32rem);
      }

      &__content {
        grid-row: 1;
        grid-column: 4 / 8;
        transform: translate(-3rem, 27rem);

        background-color: rgba(35, 34, 31, 0.6);
        font-size: 1.8rem;
        font-weight: 400;
        color: #fff;
        text-shadow: 1px 1px #000;
        position: absolute;
        padding: 0 2rem;
        width: 180%;
        height: 27rem;

        &-icon {
          width: 2rem;
          height: 2rem;
          fill: #fff;
          margin-right: 0.5rem;
        }

        div {
          padding-bottom: 0.4rem;
        }

        #business-name {
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          margin-bottom: 1.5rem;
          padding-top: 2rem;
          padding-bottom: 1.5rem;
          font-family: 'Raleway', sans-serif;
          font-size: 3.2rem;
          font-weight: 300;
        }

        a,
        p,
        li {
          font-size: 1.7rem;
          font-weight: 400;
          color: #fff;
        }
      }

      &__links {
        display: flex;

        div {
          margin-right: 2rem;
        }
      }

      a:hover {
        color: ${color.secondaryBright};
      }

      &__bottom {
        margin-left: 1rem;
        transform: translate(-0.4rem, -1rem);
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 1.4rem;
      }

      &__biz-hour {
        /* transform: translate(-.5rem, -1rem); */
        margin-bottom: -1rem;
      }
    }

    .flexContent {
      display: flex;

      .biz-main {
        display: grid;
        /* grid-template-rows: fit-content(10rem); */
        grid-auto-rows: fit-content(1rem);
        row-gap: 5rem;

        width: 75%;
        margin-top: 2rem;
        margin-right: 2rem;

        background-color: #fff;
        padding: 0 3rem;

        a,
        p,
        div {
          font-size: 1.8rem;
          font-weight: 400;
        }

        .description {
          margin-top: 4rem;
          margin-bottom: 3.5rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid #ccc;

          text-align: center;
          letter-spacing: 0.3rem;
          word-spacing: 0.4rem;
          line-height: 1.7;
        }

        &__icon {
          width: 5.5rem;
          height: 5.5rem;
          padding: 1rem;
          color: #fff;
          color: ${color.primary};
          border: 3px solid ${color.primary};
        }

        &__content {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          margin-bottom: 20px;

          color: ${color.primary};

          .extraPhones {
            margin-right: 2rem;
          }

          .pay-list {
            margin: 0 auto;

            .biz-main__items {
              margin-bottom: 2rem;
            }
          }

          p {
            color: #1c1c1c;
          }
        }

        &__items {
          display: inline-block;
          margin-right: 1.5rem;
          line-height: 1.7;

          img {
            width: 80%;
            margin-right: -1.5rem;
            /* border: 1px solid #ccc; */
          }
        }

        &__list {
          grid-column: 2 / -1;
        }

        h5 {
          color: ${color.primary};
          font-size: 1.8rem;
          line-height: 1;
          font-weight: 400;
          margin-bottom: 1.6rem;
        }

        .other-locations {
          margin: 2rem 0;
          text-align: center;
        }

        .disclaimer {
          text-align: center;
          color: ${color.colorRed};
          border: 1px solid #eee;
          margin-bottom: 5rem;
          padding: 1.5rem;
        }

        .btn-inline {
          border: none;
          color: ${color.text};
          font-size: 2.3rem;
          font-variant: small-caps;
          border-bottom: 1px solid currentColor;
          padding-bottom: 2px;
          display: inline-block;
          background-color: transparent;
          cursor: pointer;
          transition: all 0.2s;

          & span {
            margin-left: 3px;
            transition: margin-left 0.2s;
          }

          &:hover {
            color: ${color.secondary};

            span {
              margin-left: 8px;
            }
          }

          &:focus {
            outline: none;
            animation: pulsate 1s infinite;
          }
        }
      }

      .aside {
        width: 33%;
        margin-top: 2rem;

        .aside-section {
          background-color: #fff;
          padding: 3rem;
          font-size: 1.4rem;

          .aside-label {
            display: flex;

            .block-label {
              font-family: 'Raleway', Arial, sans-serif;
              font-size: 1.6rem;
              color: ${color.primary};
            }

            .blm {
              margin: 0 0 2rem 0.5rem;
            }
          }
        }

        h2 {
          position: relative;
        }

        li {
          margin-left: 0;
        }

        td {
          padding-bottom: 1.2rem;
        }

        a,
        p,
        div {
          font-size: 1.6rem;
          font-weight: 400;
        }

        &__items {
          margin-bottom: 2rem;
        }

        &__icon {
          width: 2rem;
          height: 2rem;
          fill: ${color.primary};
          float: left;
          margin: -0.5rem 0.5rem 0 0;
        }

        .lang {
          margin-right: 3.5rem;

          &-img {
            box-shadow: 0.2rem 0.4rem 0.5rem rgba(0, 0, 0, 0.2);
            transition: all 0.2s ease-in-out;
            z-index: 10;

            &:hover {
              transform: scale(1.3) translateY(0.5rem);
              outline-offset: 0.4rem;
              z-index: 20;
            }
          }
        }

        ul {
          .photo-item {
            margin-right: 3.6rem;
          }

          .photo-item:last-child {
            margin-right: 0;
          }
          img {
            box-shadow: 0.2rem 0.4rem 0.5rem rgba(0, 0, 0, 0.3);
            transition: all 0.2s;
            z-index: 10;

            &:hover {
              outline: 0.4rem solid ${color.secondary};
              transform: scale(1.3) translateY(0.5rem);
              box-shadow: 0.2rem 0.4rem 1rem rgba(0, 0, 0, 0.5);
              outline-offset: 0.4rem;
              z-index: 20;
            }
          }
        }
      }

      .biz-aside__years {
        color: #c55c00;
      }

      .biz-aside__links {
        display: flex;
        justify-content: center;

        a:hover {
          padding-bottom: 0;
        }

        .aside-section {
          padding: 3rem 2.6rem;
          background-color: transparent;
        }
      }

      .links {
        padding: 3rem 1.6rem;
      }

      .aside-biz-status {
        transform: translateY(-5px);

        .biz-open {
          color: ${color.secondary};
        }
        .biz-closed {
          color: ${color.colorRed};
        }

        .biz-hour-short,
        .biz-clock {
          display: none;
        }
      }

      table {
        /*Business hours*/
        font-size: 1.6rem;

        .hour-tab {
          padding-left: 2rem;
        }
        .hour-bold {
          color: #c3b608;
        }
      }

      .hour-disclaimer {
        text-align: center;
        color: #f80909;
        border: 1px solid #eee;
        margin-top: 1rem;
        padding: 1.5rem;
      }

      .happy-hour table {
        font-size: 1.5rem;

        .hour-tab {
          padding-left: 1rem;
        }
      }
    }
  }
`