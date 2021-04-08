import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as weatherActions from '../actions/WeatherActions'
import * as cityActions from '../actions/CityActions'

import SearchBar from '../components/SearchBar'
import WeatherInfo from '../components/WeatherInfo'
import ForecastInfo from '../components/ForecastInfo'

class App extends Component {
	componentDidMount() {
		this.props.cityActions.fetchCities()

		let favorites = JSON.parse(localStorage.getItem('favorites')) || []
		this.props.cityActions.loadFavoritesList(favorites)
	}

	handleSearch() {
		let { selectedCity, inputText } = this.props.city
		const {
			fetchWeatherById,
			fetchWeatherByName
		} = this.props.weatherActions

		if (selectedCity !== undefined && selectedCity.name === inputText)
			fetchWeatherById(selectedCity)
		else fetchWeatherByName(inputText || '')
	}

	handleForecast(e) {
		this.props.weatherActions.fetchForecast(
			this.props.city.selectedCity,
			e.target.id
		)
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
		return (
			<div className="container">
				{isFetching && (
					<img
						src="/img/loading.gif"
						className="loading-icon-position"
					/>
				)}

				{!isFetching && cities && (
					<SearchBar
						cities={cities}
						favorites={favorites}
						selectedCity={selectedCity}
						onClick={() => this.handleSearch()}
						onSelect={(city) =>
							this.props.cityActions.selectCity(city)
						}
						onChange={(text) => {
							console.log(text)
							this.props.cityActions.changeInputText(text)
						}}
						inputText={inputText || ''}
					/>
				)}

				{error && (
					<div
						className="alert alert-danger alert-margin"
						role="alert"
					>
						{error}
					</div>
				)}

				{weather && (
					<WeatherInfo
						weather={weather}
						selectedCity={selectedCity}
						favorites={favorites}
						changeFavorites={(favorites) =>
							this.props.cityActions.changeFavorites(favorites)
						}
						onClick={(e) => this.handleForecast(e)}
					/>
				)}

				{forecast && (
					<ForecastInfo
						days={forecast.list}
						cityName={forecast.city.name}
						onClick={() => this.handleSearch()}
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
)(App)
