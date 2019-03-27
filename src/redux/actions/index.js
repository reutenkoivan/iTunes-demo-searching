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

export const fetchFavoriteSongsSuccess = data => ({
  data,
  type: "FETCH_FAVORITESONGS_SUCCESS"
});

export const fetchFavoriteSongsError = error => ({
  error,
  type: "FETCH_FAVORITESONGS_ERROR"
});