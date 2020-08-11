import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose} from 'redux';

// Components
import App from './containers/App';

// Styles
import './assets/styles/Config.scss';

// Reducers
import reducers from './reducers';

// Initial global state
import initialState from './initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('app'));