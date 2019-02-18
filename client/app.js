import ReactDOM from 'react-dom';
import React from 'react'
import { AppContainer } from 'react-hot-loader';

import App from './views/App'
import addIconToLibrary from './util/FontAwesome';

// 添加FontAwesome 到 library中
addIconToLibrary()

const root = document.querySelector('#root')
ReactDOM.render(<App />, root)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./views/App.jsx', () => {
    const nextApp = require('./views/App.jsx').default //eslint-disable-line
    render(nextApp)
  })
}
