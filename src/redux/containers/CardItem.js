import { connect } from "react-redux";
import CardItem from "../../components/CardList/CardItem";
import addToLocalStorage from "../middlewares/addToLocalStorage";
import { addSongSuccess } from "../actions";

const mapDispatchToProps = dispatch => ({
  switchFavoritesState: (song) => dispatch(addToLocalStorage(song)),
  addSongToPlayer: (link) => dispatch(addSongSuccess(link))
});

export default connect(
  null,
  mapDispatchToProps
)(CardItem);