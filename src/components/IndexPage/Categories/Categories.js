import React from 'react'
import Category from './Category'
import styled from 'styled-components'
import Yaml from '../../../locales/pt/pages.yaml'


const Categories = ({ categoriesRest, categoriesServ }) => {
  const singular = 'empresa'
  const plural = 'empresas'

  return (
    <section>
      <Header>
        <div className='cat'>
          <div className='header'>
            <h1 className='title block-title'>{Yaml.index.catTitle}</h1>
            <p className='desc'>{Yaml.index.catDescription}</p>
          </div>
        </div>
      </Header>
      <List>
        {categoriesRest.group.map((category) => {
          return (
            <div className='item' key={category.edges[0].node.id}>
              <p className='count'>
                {category.totalCount}{' '}
                {category.totalCount <= 1 }
                {category.totalCount <= 1 ? singular : plural}
              </p>
              {category.edges.map((item) => {
                return <Category key={item.node.id} {...item} />
              })}
            </div>
          )
        })}
        {categoriesServ.group.map((category) => {
          return (
            <div className='item' key={category.edges[0].node.id}>
              <p className='count'>
                {category.totalCount}{' '}
                {category.totalCount <= 1 }
                {category.totalCount <= 1 ? singular : plural}
              </p>
              {category.edges.map((item) => {
                return <Category key={item.node.id} {...item} />
              })}
            </div>
          )
        })}
      </List>
    </section>
  )
}

export default Categories

const Header = styled.div`
  text-align: center;

  .title {
    color: #fff;
    font-family: 'Raleway', Arial, sans-serif;
    font-size: 3rem;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
    margin-top: 6rem;

    &::after {
    content: "";
    width: 6rem;
    height: 2px;
    background: #fff;
    position:absolute;
    bottom: 0;
    left: 48%;
    transform: translateY(1rem)
    }
  }

  .desc {
    color: #fff;
    margin: 3rem 0;
    font-size: 1.9rem;
  }

`

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 4rem;
  column-gap: 4rem;
  position: relative;

  .item {
    transition: all .2s ease-in-out;

    &:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 7px 3px rgb(0 0 0 / 50%);
    }
  }

  .count {
    position: absolute;
    padding: 1rem 2rem;
    transform: translate(1rem, 1rem);
    background-color: rgba(0, 191, 243, .8);
    color: #fff;
    z-index: 3;
  }
`
