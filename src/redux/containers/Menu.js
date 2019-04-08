import { connect } from "react-redux";
import Menu from "../../components/Menu";
import fetchSongs from "../actionCreators/fetchSongs";

const mapStateToProps = state => ({
  rootPath: state.rootPath
});

const mapDispatchToProps = dispatch => ({
  getSongs: (str) => dispatch(fetchSongs(str))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
