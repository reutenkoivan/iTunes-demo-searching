export const fetchSongsSuccess = data => ({
  data,
  type: "FETCH_SONGS_SUCCESS"
});

export const fetchSongsError = error => ({
  error,
  type: "FETCH_SONGS_ERROR"
});

export const switchFavoritesState = id => ({
  id,
  type: "SWITCH_FAVORITES_STATE"
});

export const addSongSuccess = (song, playlist) => ({
  song,
  playlist,
  type: "ADD_SONG_SUCCESS"
});

export const favorites = data => ({
  data,
  type: "ADD_TO_FAVORITE_SUCCESS"
});

export const addToFavoriteError = error => ({
  error,
  type: "FETCH_SONGS_ERROR"
});

export const rootPath = path => ({
  path,
  type: "ADD_ROOT_PATH"
});
