import React, { Component } from 'react'

import ForecastBlock from './ForecastBlock'

import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

class ForecastInfo extends Component {
  render() {
    const { cityName, onClick, t } = this.props

    let days = this.props.days.map((day) => {
      return <ForecastBlock key={day.dt} weather={day} />
    })

    return (
      <div className="forecast-info">
        <div className="info-block block-border">
          <h1 className="header">
            {t('ForecastHeader', { count: days.length, name: cityName })}
          </h1>
          <div className="info-block-header-right">
            <a href="#" onClick={onClick}>
              {t('ForecastBack')}
            </a>
          </div>
        </div>
        {days}
      </div>
    )
  }
}

ForecastInfo.propTypes = {
  cityName: PropTypes.string,
  onClick: PropTypes.func,
  days: PropTypes.array
}

export default withTranslation()(ForecastInfo)
