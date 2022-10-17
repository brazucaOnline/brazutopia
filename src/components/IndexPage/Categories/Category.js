import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { truncate } from '../../../../static/format'
import { color } from '../../Styles/Variables'

const Category = ({ node }) => {

  return (
    <Item>
      <Link to={`/category/${node.slug}`}>
        {node.image.map((item) => {
          return (
            <LazyLoadImage
              key={item.id}
              src={item.secure_url}
              effect='blur'
              delayMethod='debounce'
              alt='Image Category'
            />
          )
        })}
        <div className='info'>
          <h3 className='block-title'>{node.name}</h3>
          <p>{`${truncate(`${node.description.description}`, 9)}`}...</p>
        </div>
      </Link>
    </Item>
  )
}

Category.protoTypes = {}

export default Category

const Item = styled.li`

    width: 36rem;
    background-color: #fff;

    .info {
        padding: 1.4rem;
        padding-bottom: 4rem;
        color: ${color.colorText};

        .block-title {
            position: relative;
            margin-bottom: 3rem;
            text-transform: uppercase;
            color: #000;

            &::after {
                content: "";
                width: 6rem;
                height: 2px;
                background: ${color.primary};
                position:absolute;
                bottom: 0;
                left: 0%;
                transform: translateY(1rem)
            }
        }

    }

`
