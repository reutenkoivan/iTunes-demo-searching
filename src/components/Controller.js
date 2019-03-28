import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchingPage from "../redux/containers/SearchingPage";
import Favorites from "../redux/containers/Favorites";
import Player from "../redux/containers/Player";
import Menu from "../redux/containers/Menu";

class Controller extends Component {
    componentDidMount(){
        const id = localStorage.getItem("iTunesApp");
        if(typeof id === "string" && id.trim())
        id.trim().split(" ").forEach(id => this.props.getSongs(null, id))
    };

    render(){
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
}

export default Controller
