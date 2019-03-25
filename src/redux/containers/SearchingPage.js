import { connect } from "react-redux";
import SearchingPage from "../../components/SearchingPage";
// import fetchSongs from "../middlewares/fetchSongs";

const mapStateToProps = state => ({
  // results: state.results,
});

const mapDispatchToProps = dispatch => ({
  // getSongs: () => dispatch(fetchSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchingPage);