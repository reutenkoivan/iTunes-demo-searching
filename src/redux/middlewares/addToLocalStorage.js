import { setLikeFavorites } from "../actions";

const addToLocalStorage = id => dispatch => {
  const prevIdes = localStorage.getItem("iTunseApp");

  if(prevIdes === null) {
    localStorage.setItem("iTunseApp", id);
    dispatch(setLikeFavorites(id))
  } else {
    const currentIdes = prevIdes + " " + id;

    localStorage.removeItem("iTunseApp");
    localStorage.setItem("iTunseApp", currentIdes);

    dispatch(setLikeFavorites(id))
  }

};

export default addToLocalStorage