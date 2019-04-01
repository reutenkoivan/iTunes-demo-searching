import {
  fetchSongsSuccess,
  fetchSongsError, favorites, addToFavoriteError
} from "../actions";

const createSongObject = (data, isFavorite) => {
  return {
    artistName: data.artistName,
    trackName: data.trackName,
    previewUrl: data.previewUrl,
    artworkUrl: data.artworkUrl100,
    trackPrice: data.trackPrice,
    trackId: data.trackId,
    collectionName: data.collectionName,
    artistViewUrl: data.artistViewUrl,
    isFavorite
  }
};


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
        dispatch(favorites(createSongObject(data.results[0], false)))
      })
      .catch(err => dispatch(addToFavoriteError(err)))
};
export default fetchSongs
