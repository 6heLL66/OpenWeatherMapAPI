import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import App from './containers/App'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

import './i18n'

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
