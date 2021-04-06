import React, { Component } from 'react'
import {dateFactor, weatherOptions} from "../constants/constantValues"

export default class WeatherInfoHeader extends Component {

  handleClickAdd() {
    const { selectedCity, changeFavorites } = this.props

    let favorites = this.props.favorites.slice(0, this.props.favorites.length)
    favorites.push(selectedCity)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    changeFavorites(favorites)
  }

  handleClickRemove() {
    const { selectedCity, changeFavorites } = this.props

    let favorites = this.props.favorites.filter(x => x.id !== selectedCity.id)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    changeFavorites(favorites)
  }

  render() {
    const { weather, onClick, favorites } = this.props
    let isFavorite = !!favorites.find(x => x.id === weather.id)

    return(
      <div className="info-block-header">
        <div className="info-block-header-left">
          <div className="info-block-header-left-place">
            <span>{weather.name}{', '} {weather.sys.country} </span>

            { !isFavorite ? <img src="/img/Favorites-Add.svg" className="icon-fav" onClick={ () => this.handleClickAdd() } />
            : <img src="/img/Favorites-Remove.svg" className="icon-fav" onClick={ () => this.handleClickRemove() } /> }

          </div>
          <div className="info-block-header-left-date">
            <span>{new Date(weather.dt * dateFactor).toLocaleString('en-US', weatherOptions)} </span>
          </div>
        </div>
        <div className="info-block-header-right">
          {'Forecast: '}
          <a href="#" onClick={ e => onClick(e) } id="3">{'3 days '}</a>
          <a href="#" onClick={ e => onClick(e) } id="7">{' 7 days '}</a>
          <a href="#" onClick={ e => onClick(e) } id="14">{' 14 days'}</a>
        </div>
      </div>
    )}
}
