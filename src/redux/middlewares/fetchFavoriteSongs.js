import {
  fetchFavoriteSongsError,
  fetchFavoriteSongsSuccess } from "../actions";

let start = Promise.resolve();

const fetchFavoriteSongs = str => dispatch => {

  return str.split(" ").forEach(id => start = start.then(
      () => fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`)
        .then(response => response.json())
        .then(data => dispatch(fetchFavoriteSongsSuccess(data)))
        .catch(error => dispatch(fetchFavoriteSongsError(error)))
    ))
}
export default fetchFavoriteSongs