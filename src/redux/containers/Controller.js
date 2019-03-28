import { connect } from "react-redux";
import Controller from "../../components/Controller";
import fetchSongs from "../middlewares/fetchSongs";

const mapDispatchToProps = dispatch => ({
  getSongs: (str, id) => dispatch(fetchSongs(str, id))
});

export default connect(
  null,
  mapDispatchToProps
)(Controller);