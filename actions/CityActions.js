import fetch from 'isomorphic-fetch'

import * as types from '../constants/actionTypes'

function setSelectedCity(city) {
	return {
		type: types.SELECT_CITY,
		city
	}
}

export function changeInputText(text) {
	return {
		type: types.CHANGE_INPUT_TEXT,
		text
	}
}

export function selectCity(city, cities) {
	return (dispatch) => {
		if (typeof city == 'string'){
			city = cities.find((x) => x.name.toLowerCase() === city.toLowerCase())
		}

		dispatch(setSelectedCity(city))
	}
}

export function changeFavorites(favorites) {
	return {
		type: types.CHANGE_FAVORITES,
		favorites
	}
}

export function loadFavoritesList(favorites) {
	return {
		type: types.LOAD_FAVORITES_LIST,
		favorites
	}
}

function requestCities() {
	return {
		type: types.REQUEST_CITIES
	}
}

function receiveCities(cities) {
	return {
		type: types.RECEIVE_CITIES,
		cities
	}
}

export function fetchCities() {
	return (dispatch) => {
		dispatch(requestCities())
		return fetch('/api/cities')
			.then((response) => response.json())
			.then((json) => dispatch(receiveCities(json)))
	}
}
