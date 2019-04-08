import { connect } from "react-redux";
import Player from "../../components/Player";
import { addSongSuccess, rootPath } from "../actions";


const mapStateToProps = state => ({
  track: {
    songs: state.songs.filter(song => song.trackId === state.playerInfo.trackId),
    favorites: state.favorites.filter(song => song.trackId === state.playerInfo.trackId)
  },
  playerInfo: state.playerInfo,
  searchingSongs: state.songs,
  favoritesSongs: state.favorites,
  rootPath: state.rootPath
});

const mapDispatchToProps = dispatch => ({
  addSongToPlayer: (song, playlist) => dispatch(addSongSuccess(song, playlist)),
  addRootPath: (path) => dispatch(rootPath(path))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
