import { connect } from "react-redux";
import Favorites from "../../components/Favorites";
import fetchFavoriteSongs from "../middlewares/fetchFavoriteSongs";

const mapStateToProps = state => ({
    songs: state.songs.filter(song => song.isFavorite),
    favorites: state.addToFavorite
  });

const mapDispatchToProps = dispatch => ({
  fetchFavoriteSongs: (str) => dispatch(fetchFavoriteSongs(str))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);