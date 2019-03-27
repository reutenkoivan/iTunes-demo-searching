import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchingPage from "../redux/containers/SearchingPage";
import Favorites from "../redux/containers/Favorites";
import Player from "./Player";
import Menu from "../redux/containers/Menu";

const Controller = () => {
    return (
      <Router>
        <Route path="/" component={Menu} /><br/>
        <Route exact path="/" component={SearchingPage} />
        <Route exact path="/favorites" component={Favorites} />
        <br/><br/><br/>
        <Route path="/" component={Player} />
      </Router>
    );
}

export default Controller
