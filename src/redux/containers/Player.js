import { connect } from "react-redux";
import Player from "../../components/Player";
import { addSongSuccess } from "../actions";

const mapStateToProps = state => ({
  track: {
    songs: state.songs.filter(song => song.trackId === state.currentSong.trackId),
    favorites: state.addToFavorite.filter(song => song.trackId === state.currentSong.trackId)
  },
  playerInfo: state.currentSong,
  searchingSongs: state.songs,
  favoritesSongs: state.addToFavorite
});

const mapDispatchToProps = dispatch => ({
  addSongToPlayer: (song, playlist) => dispatch(addSongSuccess(song, playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
