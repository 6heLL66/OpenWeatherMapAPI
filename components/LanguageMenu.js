import React from 'react'
import { languages } from '../constants/constantValues'
import { withTranslation } from 'react-i18next'

class LanguageMenu extends React.Component {
  changeLang(lang) {
    const { i18n, selectedCity, reload } = this.props
    i18n.changeLanguage(lang)

    localStorage.setItem('language', lang)

    selectedCity && reload()
  }

  render() {
    const { i18n } = this.props

    return (
      <div className="input-group-btn lan-menu">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {i18n.language} &nbsp;
          <span className="caret"></span>
        </button>
        <div
          className="dropdown-menu lan-dropdown"
          aria-labelledby="dropdownMenuButton"
        >
          {languages.map((el, i) => {
            if (i18n.language !== el) {
              return (
                <div
                  key={i}
                  className="dropdown-item"
                  onClick={() => this.changeLang.bind(this)(el)}
                >
                  {el}
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export default withTranslation()(LanguageMenu)
