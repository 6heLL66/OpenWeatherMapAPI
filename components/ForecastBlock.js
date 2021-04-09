import React, { Component } from 'react'
import CommonWeatherProperty from './CommonWeatherProperty'
import ForecastDayPeriod from './ForecastDayPeriod'
import TemperatureBlock from './TemperatureBlock'
import {
  dateFactor,
  dateType,
  dayPeriods,
  forecastOptions,
  humidityPostfix,
  pressurePostfix,
  speedPostfix,
  tempPostfix
} from '../constants/constantValues'

export default class ForecastBlock extends Component {
  render() {
    const { weather } = this.props
    const pathToIcon = `/img/${weather.weather[0].main}.svg`

    return (
      <div className="info-block">
        <div className="forecast-header">
          {new Date(weather.dt * dateFactor).toLocaleString(
            dateType,
            forecastOptions
          )}
        </div>
        <div className="forecast-block-content-wrapper-left">
          <TemperatureBlock
            pathToIcon={pathToIcon}
            description={weather.weather[0].description}
          />
          <div className="info-block-additional info-block-additional-second">
            <CommonWeatherProperty
              property={weather.pressure + pressurePostfix}
              src="/img/Pressure.svg"
            />
            <CommonWeatherProperty
              property={weather.humidity + humidityPostfix}
              src="/img/Humidity.svg"
            />
            <CommonWeatherProperty
              property={weather.speed + speedPostfix}
              src="/img/Wind.svg"
            />
          </div>
        </div>
        <div className="forecast-block-content-wrapper-right">
          <ForecastDayPeriod
            value={Math.round(weather.temp.night) + tempPostfix}
            time={dayPeriods.night}
          />
          <ForecastDayPeriod
            value={Math.round(weather.temp.morn) + tempPostfix}
            time={dayPeriods.morning}
          />
          <ForecastDayPeriod
            value={Math.round(weather.temp.day) + tempPostfix}
            time={dayPeriods.day}
          />
          <ForecastDayPeriod
            value={Math.round(weather.temp.eve) + tempPostfix}
            time={dayPeriods.evening}
          />
        </div>
      </div>
    )
  }
}
