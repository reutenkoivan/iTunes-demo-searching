import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchingPage from "../redux/containers/SearchingPage";
import Favorites from "../redux/containers/Favorites";

class Controller extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={SearchingPage} />
        <Route exact path="/favorites" component={Favorites} />
      </Router>
    );
  }
}

export default Controller;
