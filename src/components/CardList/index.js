import React, { Component } from "react";
import CardItem from "../../redux/containers/CardItem" ;

class CardList extends Component {
  render(){
    return this.props.songs.map(song =>
      <CardItem key={song.trackId} song={song}/>
    );
  }
}


export default CardList;
