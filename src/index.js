import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./redux/reducer";
import { themes } from "./themes";
import { MuiThemeProvider } from "@material-ui/core";
import "./index.css"

import Controller from "./redux/containers/Controller";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={themes.main}>
    <Controller />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
