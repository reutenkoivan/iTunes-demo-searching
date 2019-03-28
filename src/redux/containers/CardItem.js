import { connect } from "react-redux";
import CardItem from "../../components/CardList/CardItem";
import addToLocalStorage from "../middlewares/addToLocalStorage";
import { addSongSuccess } from "../actions";

const mapStateToProps = state => ({
  favorites: state.addToFavorite
});

const mapDispatchToProps = dispatch => ({
  switchFavoritesState: (song) => dispatch(addToLocalStorage(song)),
  addSongToPlayer: (link) => dispatch(addSongSuccess(link))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardItem);