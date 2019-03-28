import { connect } from "react-redux";
import Player from "../../components/Player";

const mapStateToProps = state => ({
  link: state.currentSong,
  songs: state.songs,
  index: state.songs.findIndex(song => song.previewUrl === state.currentSong)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);