import { connect } from "react-redux";
import SearchingPage from "../../components/SearchingPage";

const mapStateToProps = state => ({
  songs: state.songs
});

const mapDispatchToProps = dispatch => ({
  // getFavoritSongs: () => dispatch()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchingPage);