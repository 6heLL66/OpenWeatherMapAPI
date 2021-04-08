import React, { Component } from 'react'

import FavoritesMenu from './FavoritesMenu'

import findMatches from '../helper/findMatches'

import PropTypes from 'prop-types'

import Autosuggest from 'react-autosuggest'

export default class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			options: []
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(city) {
		const { onClick, onSelect } = this.props

		onSelect(city)

		setTimeout(onClick, 0)
	}

	render() {
		const {
			onClick,
			cities,
			onSelect,
			selectedCity,
			favorites,
			onChange,
			inputText
		} = this.props
		let self = this
		let favoritesList = favorites.map((city) => {
			return (
				<li key={city.id}>
					<a href="#" onClick={() => self.handleClick(city)}>
						{city.name}
					</a>
				</li>
			)
		})
		const inputProps = {
			placeholder: 'Search for...',
			value: inputText,
			onChange: (e) => onChange(e.target.value),
			className: 'form-control'
		}

		return (
			<div className="search input-group">
				<FavoritesMenu
					favoritesList={favoritesList}
					selectedCity={selectedCity}
				/>

				<Autosuggest
					suggestions={findMatches(this.state.options, inputText, 5)}
					onSuggestionsClearRequested={() =>
						this.setState({ options: [] })
					}
					onSuggestionsFetchRequested={() =>
						this.setState({ options: cities.slice() })
					}
					getSuggestionValue={(opt) => opt.name}
					onSuggestionSelected={(event, { suggestion }) =>
						onSelect(suggestion)
					}
					renderSuggestion={(suggestion) => {
						return (
							<div className={'tt-suggestion'}>
								{suggestion.name} {suggestion.country}
							</div>
						)
					}}
					renderSuggestionsContainer={({
						containerProps,
						children
					}) => {
						return (
							<div {...containerProps} className={'tt-menu'}>
								{children}
							</div>
						)
					}}
					inputProps={inputProps}
				/>

				<span className="input-group-btn">
					<button
						className="btn btn-default"
						type="button"
						onClick={() => onClick()}
					>
						Search
					</button>
				</span>
			</div>
		)
	}
}

SearchBar.propTypes = {
	cities: PropTypes.array,
	favorites: PropTypes.array,
	selectedCity: PropTypes.object,
	onClick: PropTypes.func,
	onSelect: PropTypes.func,
	onChange: PropTypes.func,
	inputText: PropTypes.string
}
