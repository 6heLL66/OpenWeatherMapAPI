import React from 'react'

export default class ForecastDayPeriod extends React.Component {
  render() {
    const { value, time } = this.props
    return (
      <div className="day-period">
        <div className="day-time">{time}</div>
        <div className="day-temp">{value}</div>
      </div>
    )
  }
}
