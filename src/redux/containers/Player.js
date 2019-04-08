import { connect } from "react-redux";
import Player from "../../components/Player";
import { addSongSuccess } from "../actions";

const mapStateToProps = state => ({
  track: {
    songs: state.songs.filter(song => song.trackId === state.playerInfo.trackId),
    favorites: state.favorites.filter(song => song.trackId === state.playerInfo.trackId)
  },
  playerInfo: state.playerInfo,
  searchingSongs: state.songs,
  favoritesSongs: state.favorites
});

const mapDispatchToProps = dispatch => ({
  addSongToPlayer: (song, playlist) => dispatch(addSongSuccess(song, playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
