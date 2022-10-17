import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import General from '../locales/pt/general.yaml'


const HourStatus = ({ service, intl}) => {
  const BizHour = service.businessHour.map(item => {

    const dateObj = new Date()
    const weekdayEn = dateObj.toLocaleString("en-US", { weekday: "long" })
    const weekdayPt = dateObj.toLocaleString("pt-BR", { weekday: "long" })

    const startHour = `January 1, 2020 ${item.start_hour}:00`
    const endHour = `January 1, 2020 ${item.end_hour}:00`

    let ohour = new Date(startHour).getHours()
    let omin = new Date(startHour).getMinutes()
    let chour = new Date(endHour).getHours()
    let cmin = new Date(endHour).getMinutes()

    let dayOpen = new Date().setHours(ohour, omin, 0)
    let dayClose = new Date().setHours(chour, cmin, 0)

    if ((item.start_hour === '' && weekdayEn === item.wd) || (item.start_hour === '' && weekdayPt === item.wd)) {
      return <div key={item.id}>
        <FaRegClock className="biz-clock" /> <span>{General.hourNotAvailable}</span>
        <span className="biz-hour-short">
          {item.weekday}
        </span>
      </div>

    } else if (weekdayEn === item.wd || weekdayPt === item.wd) {
      if ((dateObj >= dayOpen && dateObj <= dayClose) || dayClose <= dayOpen) {
        return (
          <div key={item.id}>
            <FaRegClock className="biz-clock" /> <span className="biz-open">{General.openToday} {item.end_hour}!</span>
            <span key={item.id} className="biz-hour-short">
              {item.weekday}: {item.start_hour} {item.start_hour === General.closed ? '' : '-'} {item.end_hour}
            </span>
          </div>)

      }
      return (
        <div key={item.id}>
          <FaRegClock className="biz-clock" /> <span className="biz-closed">{General.bizHourStatusClosed}</span>
          <span key={item.id} className="biz-hour-short">
            {item.weekday}: {item.start_hour} {item.start_hour === General.closed ? '' : '-'} {item.end_hour}
          </span>
        </div>
      )
    }

    return <div key={item.id}></div>
  })

  return BizHour

}

export default HourStatus