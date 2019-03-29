import { addToFavorite, switchFavoritesState } from "../actions";

const addToLocalStorage = (song) => dispatch => {
  const prevIdes = localStorage.getItem("iTunesApp");

  if(typeof prevIdes !== "string") {
    localStorage.setItem("iTunesApp", song.trackId);
    dispatch(switchFavoritesState(song.trackId));
    dispatch(addToFavorite(song));
  } else if(prevIdes.split(" ").every(id => id - song.trackId)){
    localStorage.setItem("iTunesApp", (prevIdes + " " + song.trackId).trim());
    dispatch(switchFavoritesState(song.trackId));
    dispatch(addToFavorite(song));
  } else {
    const currentIdes = prevIdes.split(" ").filter(id => id - song.trackId)
    localStorage.setItem("iTunesApp", currentIdes.join(" ").trim());
    dispatch(switchFavoritesState(song.trackId));
    dispatch(addToFavorite(song));
  }
};

export default addToLocalStorage