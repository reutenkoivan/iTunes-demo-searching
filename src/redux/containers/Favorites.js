import { connect } from "react-redux";
import Favorites from "../../components/Favorites";

const mapStateToProps = state => ({
    songs: state.songs.filter(song => song.isFavorite),
    favorites: state.favorites
  });

export default connect(mapStateToProps)(Favorites);
