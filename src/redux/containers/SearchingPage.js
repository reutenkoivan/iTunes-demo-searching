import { connect } from "react-redux";
import SearchingPage from "../../components/SearchingPage";

const mapStateToProps = state => ({
  songs: state.songs
});

export default connect(mapStateToProps)(SearchingPage);