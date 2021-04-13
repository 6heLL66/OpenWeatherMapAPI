import React from 'react'
import PropTypes from 'prop-types'

export default class CommonWeatherProperty extends React.Component {
  render() {
    const { property, src, sun } = this.props
    return (
      <div className={'info-block-additional-item' + (sun && '-sun')}>
        <img src={src} className={'additional-icon-size'} />
        {property}
      </div>
    )
  }
}
CommonWeatherProperty.propTypes = {
  property: PropTypes.string,
  src: PropTypes.string,
  sun: PropTypes.bool
}

