import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchingPage from "../redux/containers/SearchingPage";
import Favorites from "../redux/containers/Favorites";
import Player from "../redux/containers/Player";
import Menu from "../redux/containers/Menu";

/*this.props.addSongToPlayer(
  this.props.playerInfo.playlist[this.props.playerInfo.index],
  this.props.playerInfo.playlist
)*/

class Controller extends Component {
  componentDidMount(){
    const ids = localStorage.getItem("iTunesApp");
    if(typeof ids === "string" && ids)
      ids.split(" ").forEach(id => this.props.getSongs(null, id));
  };

  componentDidUpdate(prevProps) {
    const {trackLink, isPlaying} = this.props.playerInfo;
    if(trackLink !== prevProps.playerInfo.trackLink) {
      this.audio.src = trackLink;
      // this.audio.onEnded = () => {this.props.addSongToPlayer(playlist[index], playlist)};
      isPlaying ? this.playSong() : this.pause()
    } else {
      isPlaying ? this.playSong() : this.pause()
    }
  };

  audio = new Audio(this.props.playerInfo.trackLink);

  playSong = () => this.audio.play();
  pause = () => this.audio.pause();

  render(){
    return (
      <Router>
        <Route path="/" component={Menu} /><br/>
        <Route exact path="/" component={SearchingPage} />
        <Route exact path="/favorites" component={Favorites} /><br/><br/><br/>
        <Route path="/" component={Player} />
      </Router>
    );
  }
}

export default Controller
