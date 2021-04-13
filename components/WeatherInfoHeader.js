import React, { Component } from 'react'
import {
  dateFactor,
  enDateType,
  ruDateType,
  weatherOptions
} from '../constants/constantValues'

import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import normalizeDate from '../helper/normalizeDate'

class WeatherInfoHeader extends Component {
  handleClickAdd() {
    const { selectedCity, changeFavorites } = this.props

    let favorites = [...this.props.favorites, selectedCity]

    localStorage.setItem('favorites', JSON.stringify(favorites))

    changeFavorites(favorites)
  }

  handleClickRemove() {
    const { selectedCity, changeFavorites } = this.props

    let favorites = this.props.favorites.filter((x) => x.id !== selectedCity.id)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    changeFavorites(favorites)
  }

  render() {
    const { weather, onClick, favorites, i18n, t } = this.props
    let isFavorite = !!favorites.find((x) => x.id === weather.id)

    return (
      <div className="info-block-header">
        <div className="info-block-header-left">
          <div className="info-block-header-left-place">
            <span>
              {weather.name}
              {', '} {weather.sys.country}
            </span>

            {!isFavorite ? (
              <img
                src="/img/Favorites-Add.svg"
                className="icon-fav"
                onClick={this.handleClickAdd}
              />
            ) : (
              <img
                src="/img/Favorites-Remove.svg"
                className="icon-fav"
                onClick={this.handleClickRemove}
              />
            )}
          </div>
          <div className="info-block-header-left-date">
            <span>
              {normalizeDate(
                new Date(weather.dt * dateFactor),
                i18n.language === 'en' ? enDateType : ruDateType,
                weatherOptions
              )}
              &nbsp;
            </span>
          </div>
        </div>
        <div className="info-block-header-right">
          {t('Forecast') + ': '}
          <a href="#" onClick={onClick} id="3">
            {'3 ' + t('days1')}
          </a>
          <a href="#" onClick={onClick} id="7">
            {' 7 ' + t('days2')}
          </a>
          <a href="#" onClick={onClick} id="14">
            {' 14 ' + t('days2')}
          </a>
        </div>
      </div>
    )
  }
}

WeatherInfoHeader.propTypes = {
  selectedCity: PropTypes.object,
  changeFavorites: PropTypes.func,
  weather: PropTypes.object,
  onClick: PropTypes.func,
  favorites: PropTypes.array
}

export default withTranslation()(WeatherInfoHeader)
