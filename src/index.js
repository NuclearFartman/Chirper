import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>{/*The provider component makes it possible for components to access the store via the connect() function*/}
    <App />
  </Provider>,
document.getElementById('root')
)