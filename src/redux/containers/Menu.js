import { connect } from "react-redux";
import Menu from "../../components/Menu";
import fetchSongs from "../middlewares/fetchSongs";

const mapDispatchToProps = dispatch => ({
  getSongs: (str) => dispatch(fetchSongs(str))
});

export default connect(null, mapDispatchToProps)(Menu);
