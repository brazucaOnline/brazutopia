import PropTypes from 'prop-types'
import React from 'react'
import favicon from './favicon.png'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />

        {/* CDN dependencies */}
        <script defer src='https://code.jquery.com/jquery-3.2.1.slim.min.js' />
        <script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
        />

        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6548247302070493'
          crossOrigin='anonymous'
        ></script>

        {/* Favicon */}
        <link rel='shortcut icon' type='image/png' href={favicon} />

        {/* OpenGraph and Twitter images */}
        <meta property='og:image' content='' />
        <meta name='twitter:image' content='' />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <div className='fill-page'>
          {props.preBodyComponents}
          <div
            key={`body`}
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          {props.postBodyComponents}
        </div>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
