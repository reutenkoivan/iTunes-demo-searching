import { connect } from "react-redux";
import CardItem from "../../components/CardList/CardItem";
import addToLocalStorage from "../middlewares/addToLocalStorage";

const mapDispatchToProps = dispatch => ({
  switchFavoritesState: (id) => dispatch(addToLocalStorage(id))
});

export default connect(
  null,
  mapDispatchToProps
)(CardItem);