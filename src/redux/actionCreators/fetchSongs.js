import createSongObject from "./createSongObject"
import {
  fetchSongsSuccess,
  fetchSongsError,
  favorites,
  addToFavoriteError
} from "../actions";

const fetchSongs = (str, id) => dispatch => typeof id === "undefined"

    ? fetch(`https://itunes.apple.com/search?term=${str}?&media=music&limit=10`)
    .then(response=> response.json())
    .then(data => dispatch(fetchSongsSuccess(createSongObject(data.results, false))))
    .catch(err => dispatch(fetchSongsError(err)))

    : fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`)
      .then(response => response.json())
      .then(data => dispatch(favorites(createSongObject(data.results, false)[0])))
      .catch(err => dispatch(addToFavoriteError(err)));


export default fetchSongs
