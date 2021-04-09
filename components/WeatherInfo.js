import React, { Component } from 'react'

import WeatherInfoHeader from './WeatherInfoHeader'
import WeatherMainInfo from './WeatherMainInfo'

import PropTypes from 'prop-types'

export default class WeatherInfo extends Component {
	render() {
		const {
			weather,
			selectedCity,
			favorites,
			changeFavorites,
			onClick
		} = this.props
		const pathToIcon = `/img/${weather.weather[0].main}.svg`

		return (
			<div className="info-block">
				<WeatherInfoHeader
					weather={weather}
					favorites={favorites}
					selectedCity={selectedCity}
					changeFavorites={changeFavorites}
					onClick={onClick}
				/>

				<WeatherMainInfo weather={weather} pathToIcon={pathToIcon} />
			</div>
		)
	}
}

WeatherInfo.propTypes = {
	weather: PropTypes.object,
	favorites: PropTypes.array,
	selectedCity: PropTypes.object,
	changeFavorites: PropTypes.func,
	onClick: PropTypes.func
}
