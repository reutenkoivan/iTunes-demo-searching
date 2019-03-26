import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchingPage from "../redux/containers/SearchingPage";
import Favorites from "../redux/containers/Favorites";
import Player from "./Player";
import Menu from "../redux/containers/Menu";

class Controller extends Component {
  render() {
    return (
      <React.Fragment>
      <Router>
        <Route path="/" component={Menu} />
        <Route exact path="/" component={SearchingPage} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="/" component={Player} />
      </Router>
      </React.Fragment>
    );
  }
}

export default Controller
