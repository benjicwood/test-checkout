import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import products from './reducers/reducer';
import App from './components/App/App';
import './index.css';

const store = createStore(products);

ReactDOM.render(
  <Provider store={store}><App /></ Provider>,
  document.getElementById('root')
);
