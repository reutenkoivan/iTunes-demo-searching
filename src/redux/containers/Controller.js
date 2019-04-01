import { connect } from "react-redux";
import Controller from "../../components/Controller";
import fetchSongs from "../actionCreators/fetchSongs";
import { addSongSuccess } from "../actions";

const mapStateToProps = state => ({
  playerInfo: state.playerInfo
});

const mapDispatchToProps = dispatch => ({
  getSongs: (str, id) => dispatch(fetchSongs(str, id)),
  addSongToPlayer: (song, playlist) => dispatch(addSongSuccess(song, playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controller);