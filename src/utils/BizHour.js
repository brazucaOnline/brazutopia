import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import General from '../locales/pt/general.yaml'


const HourStatus = ({ restaurant}) => {
  const BizHour = restaurant.businessHour.map(item => {

    const dateObj = new Date()
    const weekdayEn = dateObj.toLocaleString("en-US", { weekday: "long" })
    const weekdayPt = dateObj.toLocaleString("pt-BR", { weekday: "long" })

    const startHour = `January 1, 2020 ${item.start_hour}:00`
    const endHour = `January 1, 2020 ${item.end_hour}:00`
    const startHour2 = `January 1, 2020 ${item.start_hour2}:00`
    const endHour2 = `January 1, 2020 ${item.end_hour2}:00`

    let ohour = new Date(startHour).getHours()
    let omin = new Date(startHour).getMinutes()
    let chour = new Date(endHour).getHours()
    let cmin = new Date(endHour).getMinutes()

    let ohour2 = new Date(startHour2).getHours()
    let omin2 = new Date(startHour2).getMinutes()
    let chour2 = new Date(endHour2).getHours()
    let cmin2 = new Date(endHour2).getMinutes()

    let dayOpen = new Date().setHours(ohour, omin, 0)
    let dayClose = new Date().setHours(chour, cmin, 0)

    let dayOpen2 = new Date().setHours(ohour2, omin2, 0)
    let dayClose2 = new Date().setHours(chour2, cmin2, 0)

    const endTime = (
      dateObj <= dayClose || dayClose < dayOpen ? item.end_hour : item.end_hour2
    )


    if ((item.start_hour === '' && weekdayEn === item.wd) || (item.start_hour === '' && weekdayPt === item.wd) || (item.start_hour2 === '' && weekdayEn === item.wd) || (item.start_hour2 === '' && weekdayPt === item.wd)) {
      return <div key={item.id}>
        <FaRegClock className="biz-clock" /> <span>{General.hourNotAvailable}</span>
        <span className="biz-hour-short">
          {item.weekday}
        </span>
      </div>

    } else if (weekdayEn === item.wd || weekdayPt === item.wd) {
      if (((dateObj >= dayOpen && dateObj <= dayClose) || dayClose < dayOpen) || ((dateObj >= dayOpen2 && dateObj <= dayClose2) || dayClose2 < dayOpen)) {
        return (
          <div key={item.id}>
            <FaRegClock className="biz-clock" /> <span className="biz-open">{General.openToday} {endTime}!</span>
            <span key={item.id} className="biz-hour-short">
              {item.weekday}: {item.start_hour} {item.start_hour === General.closed  ? '' : '-'} {item.end_hour}
              <p><span style={{opacity:"0"}}>{item.weekday}:</span> {item.start_hour2} {item.start_hour2 === null ? '' : '-'} {item.end_hour2}</p>
            </span>
          </div>)

      }
      return (
        <div key={item.id}>
          <FaRegClock className="biz-clock" /> <span className="biz-closed">{General.bizHourStatusClosed}</span>
          <span key={item.id} className="biz-hour-short">
            {item.weekday}: {item.start_hour} {item.start_hour === General.closed  ? '' : '-'} {item.end_hour}
            <p><span style={{opacity:"0"}}>{item.weekday}:</span> {item.start_hour2} {item.start_hour2 === null ? '' : '-'} {item.end_hour2}</p>
          </span>
        </div>
      )
    }

    return <div key={item.id}></div>
  })

  return BizHour

}

export default HourStatus