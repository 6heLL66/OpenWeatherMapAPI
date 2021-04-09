import React, { Component } from 'react'

import ForecastBlock from './ForecastBlock'

import PropTypes from 'prop-types'

export default class ForecastInfo extends Component {
	render() {
		const { cityName, onClick } = this.props

		let days = this.props.days.map((day) => {
			return <ForecastBlock key={day.dt} weather={day} />
		})

		return (
			<div className="forecast-info">
				<div className="info-block block-border">
					<h1 className="header">
						&nbsp; Forecast for {days.length} days in {cityName}
					</h1>
					<div className="info-block-header-right">
						<a href="#" onClick={onClick}>
							Back to current weather
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
