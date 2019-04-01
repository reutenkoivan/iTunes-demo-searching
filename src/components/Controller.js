import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchingPage from "../redux/containers/SearchingPage";
import Favorites from "../redux/containers/Favorites";
import Player from "../redux/containers/Player";
import Menu from "../redux/containers/Menu";
import PropTypes from "prop-types";

class Controller extends Component {
  componentDidMount(){
    const ids = localStorage.getItem("iTunesApp");
    if(typeof ids === "string" && ids)
      ids.split(" ").forEach(id => this.props.getSongs(null, id));
  };

  componentDidUpdate(prevProps) {
    let {trackLink, isPlaying, playlist, index} = this.props.playerInfo;

    if(trackLink !== prevProps.playerInfo.trackLink) {
      this.audio = new Audio(trackLink);
      index = index === playlist.length-1 ? 0 : index+1;
      this.audio.addEventListener("ended", () => {this.props.addSongToPlayer(playlist[index], playlist)});
      this.playSong()
    } else {
      isPlaying ? this.playSong() : this.pause();
    }
  };

  getSnapshotBeforeUpdate(prevProps) {
    let {playlist, index, trackLink} = this.props.playerInfo;
    if(prevProps.playerInfo.trackLink && trackLink !== prevProps.playerInfo.trackLink){
      index = index === prevProps.playerInfo.playlist.length-1 ? 0 : index+1;
      this.pause();

      this.audio.removeEventListener("ended", () => {this.props.addSongToPlayer(playlist[index], playlist)});
    }

    return null
  };

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

Controller.propTypes = {
  addSongToPlayer: PropTypes.func,
  playerInfo: PropTypes.object,
  getSongs: PropTypes.func,
  audio: PropTypes.object
};

export default Controller
