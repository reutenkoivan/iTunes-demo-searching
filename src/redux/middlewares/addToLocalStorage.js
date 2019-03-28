import { addToFavoriteSuccess, switchFavoritesState } from "../actions";

const addToLocalStorage = (song) => dispatch => {
  const prevIdes = localStorage.getItem("iTunesApp");

  if(typeof prevIdes !== "string") {
    localStorage.setItem("iTunesApp", song.trackId);
    dispatch(switchFavoritesState(song.trackId));
    dispatch(addToFavoriteSuccess(song));
  } else if(prevIdes.split(" ").every(id => id - song.trackId)){
    localStorage.setItem("iTunesApp", prevIdes + " " + song.trackId);
    dispatch(switchFavoritesState(song.trackId));
    dispatch(addToFavoriteSuccess(song));
  } else {
    const currentIdes = prevIdes.split(" ").filter(id => id - song.trackId)
    localStorage.setItem("iTunesApp", currentIdes.join(" "));
    dispatch(switchFavoritesState(song.trackId));
    dispatch(addToFavoriteSuccess(song));
  }
};

export default addToLocalStorage