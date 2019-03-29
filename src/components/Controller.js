import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchingPage from "../redux/containers/SearchingPage";
import Favorites from "../redux/containers/Favorites";
import Player from "../redux/containers/Player";
import Menu from "../redux/containers/Menu";

class Controller extends Component {
    componentDidMount(){
        const ids = localStorage.getItem("iTunesApp");
        if(typeof ids === "string" && ids.trim())
        ids.trim().split(" ").forEach(id => this.props.getSongs(null, id))
    };

    audio = new Audio(this.props.playerInfo.trackLink);

    render(){
      console.log(this.props.playerInfo);
      // playlistId
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
