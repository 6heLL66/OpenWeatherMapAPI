import fetch from 'isomorphic-fetch'

import * as types from '../constants/actionTypes'
import { selectCity } from './CityActions'
import { apiKey } from '../constants/secretKeys'
import { successCode } from '../constants/constantValues'

function requestWeather(city) {
	return {
		type: types.REQUEST_WEATHER,
		city
	}
}

function receiveWeather(city, weather) {
	return {
		type: types.RECEIVE_WEATHER,
		city,
		weather,
		receivedAt: Date.now()
	}
}

function failureWeather(error) {
	return {
		type: types.FAILURE_WEATHER,
		error: error.message
	}
}

function requestForecast(city, days) {
	return {
		type: types.REQUEST_FORECAST,
		city,
		days
	}
}

function receiveForecast(city, forecast, days) {
	return {
		type: types.RECEIVE_FORECAST,
		city,
		forecast,
		days,
		receivedAt: Date.now()
	}
}

export function fetchWeatherById(city) {
	return (dispatch) => {
		dispatch(requestWeather(city))
		return fetch(
			`http://api.openweathermap.org/data/2.5/weather?id=${city.id}&units=metric&appid=${apiKey}`
		)
			.then((response) => response.json())
			.then(function (json) {
				if (Number(json.cod) !== successCode) {
					dispatch(failureWeather(json))
				} else {
					dispatch(receiveWeather(city, json))
				}
			})
	}
}

export function fetchWeatherByName(cityName) {
	return (dispatch) => {
		dispatch(requestWeather(cityName))
		return fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
		)
			.then((response) => response.json())
			.then(function (json) {
				if (Number(json.cod) !== successCode) {
					dispatch(failureWeather(json))
				}
				else {
					let city = {
						id: json.id,
						name: json.name,
						coord: json.coord,
						country: json.sys.country
					}

					dispatch(receiveWeather(city, json))
					dispatch(selectCity(city))
				}
			})
	}
}

export function fetchForecast(city, days) {
	return (dispatch) => {
		dispatch(requestForecast(city, days))
		return fetch(
			`http://api.openweathermap.org/data/2.5/forecast/daily?id=${city.id}&cnt=${days}&units=metric&appid=${apiKey}`
		)
			.then((response) => response.json())
			.then(function (json) {
				if (Number(json.cod) !== successCode) {
					dispatch(failureWeather(json))
				}
				else {
					dispatch(receiveForecast(city, json, days))
				}
			})
	}
}
