import React, { Component } from "react";
import CardItem from "../../redux/containers/CardItem" ;

class CardList extends Component {
  render() {
    return (
      <React.Fragment>
        {
          this.props.songs.map(song =>(<CardItem key={song.trackId} song={song}/>))
        }
      </React.Fragment>
    );
  }
}

export default CardList;

