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

export const addSongSuccess = link => ({
  link,
  type: "ADD_SONG_SUCCESS"
});

export const addSongError = error => ({
  error,
  type: "ADD_SONG_SUCCESS"
});

export const addToFavoriteSuccess = data => ({
  data,
  type: "ADD_TO_FAVORITE_SUCCESS"
});

export const addToFavoriteError = error => ({
  error,
  type: "ADD_TO_FAVORITE_ERROR"
});

//
export const fetchFavoriteSongsSuccess = data => ({
  data,
  type: "FETCH_FAVORITESONGS_SUCCESS"
});

export const fetchFavoriteSongsError = error => ({
  error,
  type: "FETCH_FAVORITESONGS_ERROR"
});