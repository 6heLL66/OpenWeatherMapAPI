import React, { Component } from 'react'
import CommonWeatherProperty from './CommonWeatherProperty'
import ForecastDayPeriod from './ForecastDayPeriod'
import TemperatureBlock from './TemperatureBlock'
import {
  dateFactor,
  dayPeriods,
  enDateType,
  forecastOptions,
  humidityPostfix,
  pressurePostfix,
  ruDateType,
  speedPostfix,
  tempPostfix
} from '../constants/constantValues'

import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import normalizeDate from '../helper/normalizeDate'

class ForecastBlock extends Component {
  render() {
    const { weather, i18n, t } = this.props
    console.log('WEATHER', weather)
    const pathToIcon = `/img/${weather.weather[0].main}.svg`

    return (
      <div className="info-block">
        <div className="forecast-header">
          {normalizeDate(
            new Date(weather.dt * dateFactor),
            i18n.language === 'en' ? enDateType : ruDateType,
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
              property={weather.pressure + t(pressurePostfix)}
              src="/img/Pressure.svg"
            />
            <CommonWeatherProperty
              property={weather.humidity + humidityPostfix}
              src="/img/Humidity.svg"
            />
            <CommonWeatherProperty
              property={weather.speed + t(speedPostfix)}
              src="/img/Wind.svg"
            />
          </div>
        </div>
        <div className="forecast-block-content-wrapper-right">
          <ForecastDayPeriod
            value={Math.round(weather.temp.night) + tempPostfix}
            time={t(dayPeriods.night)}
          />
          <ForecastDayPeriod
            value={Math.round(weather.temp.morn) + tempPostfix}
            time={t(dayPeriods.morning)}
          />
          <ForecastDayPeriod
            value={Math.round(weather.temp.day) + tempPostfix}
            time={t(dayPeriods.day)}
          />
          <ForecastDayPeriod
            value={Math.round(weather.temp.eve) + tempPostfix}
            time={t(dayPeriods.evening)}
          />
        </div>
      </div>
    )
  }
}

ForecastBlock.propTypes = {
  weather: PropTypes.object
}

export default withTranslation()(ForecastBlock)
