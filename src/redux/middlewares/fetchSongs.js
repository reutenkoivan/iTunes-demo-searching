import {
  fetchSongsSuccess,
  fetchSongsError, addToFavoriteSuccess, addToFavoriteError
} from "../actions";

const fetchSongs = (str, id) => dispatch => {
  return typeof id === "undefined"
    ? fetch(`https://itunes.apple.com/search?term=${str}?&media=music&limit=10`)
    .then(response=> response.json())
    .then(data => dispatch(fetchSongsSuccess(data)))
    .catch(err => dispatch(fetchSongsError(err)))

    : fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results[0].artworkUrl100)
        dispatch(addToFavoriteSuccess(data))
      })
      .catch(err => dispatch(addToFavoriteError(err)))
};
export default fetchSongs
