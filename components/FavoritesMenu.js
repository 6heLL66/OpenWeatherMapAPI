import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

class FavoritesMenu extends React.Component {
  render() {
    const { selectedCity, favoritesList, t } = this.props
    return (
      <div className="input-group-btn">
        <button
          type="button"
          className="btn btn-default dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {selectedCity && selectedCity.name} &nbsp;
          <span className="caret"></span>
        </button>

        <ul className="dropdown-menu">
          {favoritesList}
          <li role="separator" className="divider"></li>
          <li>
            <a>
              <img src="/img/Favorites-Add.svg" />
              {t('addFavorites')}
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

FavoritesMenu.propsTypes = {
  selectedCity: PropTypes.object,
  favoritesList: PropTypes.array
}

export default withTranslation()(FavoritesMenu)