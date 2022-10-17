import React from 'react'
import { Link } from 'gatsby'
import Yaml from '../../locales/pt/general.yaml'

// FooterLink.defaultProps = {
//   additionalClasses: '',
// }

class FooterUse extends React.Component {

  render () {
    // const FooterLinkEn = ({ id, name, additionalClasses }) => {
    //   return (
    //     <div>
    //       <Link 
    //         className={`footer-item footer-link ${additionalClasses}`} to={'/en/' + id}>
    //         {name}
    //       </Link>
    //     </div>

    //   )
    // }
    const FooterLinkPt = ({ id, name, additionalClasses }) => {
      return (
        <div>
          <Link
            className={`footer-item footer-link ${additionalClasses}`} to={'/' + id}>
            {name}
          </Link>
        </div>

      )
    }

    FooterLinkPt.defaultProps = {
      additionalClasses: '',
    }


    return (
      <div>
        <li>
          <FooterLinkPt id='help' name={Yaml.footer.help} lang='pt' />
        </li>
        <li>
          <FooterLinkPt id='term' name={Yaml.footer.termUse} lang='pt' />
        </li>
        <li>
          <FooterLinkPt
            id='privacy'
            name={Yaml.footer.privacyPolicy}
            lang='pt'
          />
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
      </div>
    )
  }
}


export default FooterUse
