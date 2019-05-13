import { favorites, switchFavoritesState } from "../actions";

const addToLocalStorage = (song) => dispatch => {
  let currentIds = [];

  const prevIds = localStorage.getItem("iTunesApp") === null
    ? []
    : JSON.parse(localStorage.getItem("iTunesApp"));

  if(prevIds.every(id => id !== song.trackId)){
    currentIds = [...prevIds, Number(song.trackId)];
  } else {
    currentIds = prevIds.filter(id => id !== song.trackId);
  }

  localStorage.setItem("iTunesApp", JSON.stringify(currentIds));
  dispatch(switchFavoritesState(song.trackId));
  dispatch(favorites(song));
};

export default addToLocalStorage