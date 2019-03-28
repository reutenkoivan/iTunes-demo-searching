import {
  fetchSongsSuccess,
  fetchSongsError, addToFavoriteSuccess, addToFavoriteError
} from "../actions";

const fetchSongs = (str, id) => dispatch => {
  return typeof id === "undefined"
    ? fetch(`https://itunes.apple.com/search?term=${str}?&media=music&limit=10`)
    .then(response=> response.json())
    .then(data =>
      dispatch(fetchSongsSuccess({data, isFavorite: false})))
    .catch(err => dispatch(fetchSongsError(err)))

    : fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`)
      .then(response => response.json())
      .then(data => {
        dispatch(addToFavoriteSuccess({data, isFavorite: true}))
      })
      .catch(err => dispatch(addToFavoriteError(err)))
};
export default fetchSongs
