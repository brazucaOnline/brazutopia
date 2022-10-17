import React from 'react'
import General from '../locales/pt/general.yaml'

const InServ = ({ service, intl }) => {

  const givenYear = service.foundedIn
  let d1 = Date.now()
  let d2 = new Date(givenYear, 1, 0).getTime()

  const yearOrMonth = () => {
    const yearsDiff = (d1, d2) => {
      let date1 = new Date(d1)
      let date2 = new Date(d2)

      let yearsDiff = date1.getFullYear() - date2.getFullYear()

      return yearsDiff
    }

    const monthsDiff = (d1, d2) => {

      let date1 = new Date(d1)
      let date2 = new Date(d2)

      let years = yearsDiff(d1, d2)
      let months = (years * 12) + (date1.getMonth() - date2.getMonth())

      return months
    }

    return yearsDiff(d1, d2) > 0 ? `${yearsDiff(d1, d2)} ${General.years}` : `${monthsDiff(d1, d2)} ${General.months}`
  }

  return (
    givenYear !== 'null' ?
      <div>
        {General.inBiz} {yearOrMonth()}
      </div>
      : ''
  )
}

export default InServ
