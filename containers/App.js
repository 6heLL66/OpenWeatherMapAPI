import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as weatherActions from '../actions/WeatherActions'
import * as cityActions from '../actions/CityActions'

import SearchBar from '../components/SearchBar'
import WeatherInfo from '../components/WeatherInfo'
import ForecastInfo from '../components/ForecastInfo'
import { withTranslation } from 'react-i18next'

class App extends Component {
  componentDidMount() {
    const { fetchCities, loadFavoritesList } = this.props.cityActions
    fetchCities()

    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    loadFavoritesList(favorites)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleForecast = this.handleForecast.bind(this)
  }

  handleSearch() {
    let { selectedCity, inputText } = this.props.city
    const { fetchWeatherById, fetchWeatherByName } = this.props.weatherActions
    const { i18n } = this.props

    if (selectedCity !== undefined && selectedCity.name === inputText) {
      fetchWeatherById(selectedCity, i18n.language)
    } else {
      fetchWeatherByName(inputText || '', i18n.language)
    }
  }

  handleForecast(e) {
    const { weatherActions, city, i18n } = this.props
    weatherActions.fetchForecast(city.selectedCity, e.target.id, i18n.language)
  }

  render() {
    const { weather, error, forecast } = this.props.weatherByCity
    const {
      isFetching,
      cities,
      selectedCity,
      favorites,
      inputText
    } = this.props.city
    const { cityActions } = this.props

    return (
      <div className="container">
        {isFetching && (
          <img src="/img/loading.gif" className="loading-icon-position" />
        )}

        {!isFetching && cities && (
          <SearchBar
            cities={cities}
            favorites={favorites}
            selectedCity={selectedCity}
            onClick={this.handleSearch}
            onSelect={cityActions.selectCity}
            onChange={cityActions.changeInputText}
            inputText={inputText || ''}
          />
        )}

        {error && (
          <div className="alert alert-danger alert-margin" role="alert">
            {error}
          </div>
        )}

        {weather && (
          <WeatherInfo
            weather={weather}
            selectedCity={selectedCity}
            favorites={favorites}
            changeFavorites={cityActions.changeFavorites}
            onClick={this.handleForecast}
          />
        )}

        {forecast && (
          <ForecastInfo
            days={forecast.list}
            cityName={forecast.city.name}
            onClick={this.handleSearch}
          />
        )}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      ...state,
      cities: { isFetching: !state.city.cities }
    }
  },
  (dispatch) => {
    return {
      weatherActions: bindActionCreators(weatherActions, dispatch),
      cityActions: bindActionCreators(cityActions, dispatch)
    }
  }
)(withTranslation()(App))
