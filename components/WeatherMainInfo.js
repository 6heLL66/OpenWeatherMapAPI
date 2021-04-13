import React from 'react'
import CommonWeatherProperty from './CommonWeatherProperty'
import TemperatureBlock from './TemperatureBlock'
import {
  dateFactor,
  humidityPostfix,
  pressurePostfix,
  speedPostfix
} from '../constants/constantValues'

import PropTypes from 'prop-types'

export default class WeatherMainInfo extends React.Component {
  render() {
    const { weather, pathToIcon } = this.props
    return (
      <div className="info-block-content">
        <div className="info-block-content-wrapper-left">
          <TemperatureBlock
            temp={Math.round(weather.main.temp)}
            pathToIcon={pathToIcon}
            description={weather.weather[0].description}
          />

          <div className="info-block-additional info-block-additional-second">
            <CommonWeatherProperty
              property={weather.main.pressure + pressurePostfix}
              src="/img/Pressure.svg"
            />
            <CommonWeatherProperty
              property={weather.main.humidity + humidityPostfix}
              src="/img/Humidity.svg"
            />
            <CommonWeatherProperty
              property={weather.wind.speed + speedPostfix}
              src="/img/Wind.svg"
            />

            <div className="info-block-additional-item">
              <CommonWeatherProperty
                sun
                property={new Date(
                  weather.sys.sunrise * dateFactor
                ).toLocaleTimeString()}
                src={'/img/Sunrise.svg'}
              />
              <CommonWeatherProperty
                sun
                property={new Date(
                  weather.sys.sunset * dateFactor
                ).toLocaleTimeString()}
                src={'/img/Sunset.svg'}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

WeatherMainInfo.propTypes = {
  weather: PropTypes.object,
  pathToIcon: PropTypes.string
}
