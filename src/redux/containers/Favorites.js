import { connect } from "react-redux";
import Favorites from "../../components/Favorites";

const mapStateToProps = state => ({
  // results: state.results,
});

const mapDispatchToProps = dispatch => ({
  // getFavoritSongs: () => dispatch()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);