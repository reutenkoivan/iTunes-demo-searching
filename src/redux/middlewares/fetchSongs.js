import {
  fetchSongsSuccess,
  fetchSongsError
} from "../actions"

const fetchSongs = str => dispatch => {

  return fetch(`https://itunes.apple.com/search?term=${str}&media=music&limit=10`)
    .then(response=> response.json())
    .then(data => dispatch(fetchSongsSuccess(data)))
    .catch(err => dispatch(fetchSongsError(err)))
};
export default fetchSongs