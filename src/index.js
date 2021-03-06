import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import App from './components/App';
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css'

const store = createStore(reducer, composeWithDevTools(middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)







