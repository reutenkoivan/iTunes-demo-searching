import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsError
} from "../actions"

const fetchSongs = str => dispatch => {
  dispatch(fetchSongsStart());

  return fetch(`https://itunes.apple.com/search?term=${str}&media=music&limit=20`)
    .then(response=> response.json())
    .then(data => dispatch(fetchSongsSuccess(data)))
    .catch(err => dispatch(fetchSongsError(err)))
};
export default fetchSongs