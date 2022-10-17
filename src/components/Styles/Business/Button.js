import styled from "styled-components"

export default styled.button`
  font-size: 1.5rem;
  font-weight: 300;
  border: none;
  background-image: linear-gradient(to right, rgb(245, 135, 91),rgb(194, 4, 4));
  color: #fff;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  width: 16rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all .2s;
  letter-spacing: .2rem;
  transform: translateX(1rem);
  margin-right: 1.5rem;

  & > * {
    display: inline-block;
    height: 100%;
    width: 100%;
    transition: all .2s;
  }

  .btn__visible {
    display: inline-block;
    padding: 2rem;
  }

  .btn__invisible {
    display: inline-block;
    padding: 2rem .3rem;
    position: absolute;
    top: -100%;
    left: 0;

  }

  &:hover .btn__invisible {
    top: ${props => props.top} !important;
  }

  &:hover .btn__invisible-book,
  &:hover .btn__invisible-order {
    top: 0;
  }

  &:hover {
    background-image: linear-gradient(to left, rgb(245, 135, 91),rgb(194, 4, 4));
  }

  &:hover .btn__visible {
    transform: translateY(100%);
  }

  &:focus {
    outline: none;
    animation: pulsate 1s infinite;
  }
`