import React from 'react'
import { tempPostfix } from '../constants/constantValues'

export default class TemperatureBlock extends React.Component {
	render() {
		const { description, pathToIcon, temp } = this.props
		return (
			<span>
				<div className="forecast-block-content-temperature">
					<img src={pathToIcon} className="weather-icon-size" />
					{temp && (
						<span>
							{Math.round(temp)}
							{tempPostfix}
						</span>
					)}
				</div>
				<div className="info-block-additional forecast-block-additional-first">
					<div className="info-block-additional-item">{description}</div>
				</div>
			</span>
		)
	}
}
