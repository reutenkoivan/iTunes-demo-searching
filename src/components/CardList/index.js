import React from "react";
import CardItem from "../../redux/containers/CardItem" ;
import PropTypes from "prop-types";

const CardList = props => {
    return props.songs.map(song =>
        <CardItem key={song.trackId} favorite={props.isfavorite} song={song}/>
      )
  };

CardList.propTypes = {
  isfavorite: PropTypes.bool,
  songs: PropTypes.array
};

export default CardList;
