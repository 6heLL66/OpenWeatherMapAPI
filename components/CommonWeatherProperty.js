import React from 'react'

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
