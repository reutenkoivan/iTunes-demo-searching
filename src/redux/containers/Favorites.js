import { connect } from "react-redux";
import Favorites from "../../components/Favorites";

const mapStateToProps = state => ({
    songs: state.songs.filter(song => song.isFavorite),
    favorites: state.addToFavorite
  });

export default connect(mapStateToProps)(Favorites);
