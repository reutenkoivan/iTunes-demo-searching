import { connect } from "react-redux";
import CardItem from "../../components/CardList/CardItem";
import addToLocalStorage from "../middlewares/addToLocalStorage";
import { addSongSuccess } from "../actions";

const mapStateToProps = state => ({
  favorites: state.addToFavorite,
  playerInfo: state.currentSong,
  searching: state.songs,
});

const mapDispatchToProps = dispatch => ({
  switchFavoritesState: (song) => dispatch(addToLocalStorage(song)),
  addSongToPlayer: (song, playlist) => dispatch(addSongSuccess(song, playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardItem);