import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Controller from './components/Controller';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Controller />
  </Provider>,
  document.getElementById('root'));
