import { switchFavoritesState } from "../actions";

const addToLocalStorage = id => dispatch => {
  const prevIdes = localStorage.getItem("iTunesApp");

  if(prevIdes === null) {
    localStorage.setItem("iTunesApp", id);
    dispatch(switchFavoritesState(id))
  } else {
    const currentIdes = prevIdes + " " + id;

    localStorage.removeItem("iTunesApp");
    localStorage.setItem("iTunesApp", currentIdes);

    dispatch(switchFavoritesState(id))
  }

};

export default addToLocalStorage