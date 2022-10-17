import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const BallLogo = () => {
    return (
        <>
            <LazyLoadImage
                src="https://res.cloudinary.com/brazucacms/image/upload/v1606596089/logos/logo_ball.png"
                alt="Brazuca Logo"
                className="logo-ball__img"
                effect="blur"
            />
            <div className="logo-title">
              <LazyLoadImage
                  src="https://res.cloudinary.com/brazucacms/image/upload/v1606596089/logos/logo_letters-100_i2k5fd.png"
                  alt="Brazuca Logo"
                  className="logo-ball__img-title"
                  effect="blur"
              />
            </div>
        </>
    )
}

export default BallLogo
