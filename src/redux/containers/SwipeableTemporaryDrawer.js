import { connect } from "react-redux";
import SwipeableTemporaryDrawer from "../../components/Menu/SwipeableTemporaryDrawer"
import addToLocalStorage from "../actionCreators/addToLocalStorage";

const mapStateToProps = state => ({
  favorites: state.favorites
});


const mapDispatchToProps = dispatch => ({
  switchFavoritesState: (song) => dispatch(addToLocalStorage(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeableTemporaryDrawer);
