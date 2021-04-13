import React from 'react'
import CommonWeatherProperty from './CommonWeatherProperty'
import TemperatureBlock from './TemperatureBlock'
import {
  dateFactor,
  enDateType,
  humidityPostfix,
  pressurePostfix,
  ruDateType,
  speedPostfix
} from '../constants/constantValues'

import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

class WeatherMainInfo extends React.Component {
  render() {
    const { weather, pathToIcon, i18n, t } = this.props
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
              property={weather.main.pressure + t(pressurePostfix)}
              src="/img/Pressure.svg"
            />
            <CommonWeatherProperty
              property={weather.main.humidity + humidityPostfix}
              src="/img/Humidity.svg"
            />
            <CommonWeatherProperty
              property={weather.wind.speed + t(speedPostfix)}
              src="/img/Wind.svg"
            />

            <div className="info-block-additional-item">
              <CommonWeatherProperty
                sun
                property={new Date(
                  weather.sys.sunrise * dateFactor
                ).toLocaleTimeString(
                  i18n.language === 'en' ? enDateType : ruDateType
                )}
                src={'/img/Sunrise.svg'}
              />
              <CommonWeatherProperty
                sun
                property={new Date(
                  weather.sys.sunset * dateFactor
                ).toLocaleTimeString(
                  i18n.language === 'en' ? enDateType : ruDateType
                )}
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

export default withTranslation()(WeatherMainInfo)
