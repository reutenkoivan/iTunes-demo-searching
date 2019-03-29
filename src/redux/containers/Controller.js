import { connect } from "react-redux";
import Controller from "../../components/Controller";
import fetchSongs from "../middlewares/fetchSongs";

const mapStateToProps = state => ({
  playerInfo: state.currentSong
});

const mapDispatchToProps = dispatch => ({
  getSongs: (str, id) => dispatch(fetchSongs(str, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controller);