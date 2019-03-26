export const fetchSongsStart = () => ({
  type: "FETCH_SONGS_START"
});

export const fetchSongsSuccess = data => ({
  data,
  type: "FETCH_SONGS_SUCCESS"
});

export const fetchSongsError = error => ({
  error,
  type: "FETCH_SONGS_ERROR"
});

export const setLikeFavorites = id => ({
  id,
  type: "SET_LIKE_FAVORITES"
});

export const fetchFavoriteSongsStart = () => ({
  type: "FETCH_FAVORITESONGS_START"
});

export const fetchFavoriteSongsSuccess = data => ({
  data,
  type: "FETCH_FAVORITESONGS_SUCCESS"
});

export const fetchFavoriteSongsError = error => ({
  error,
  type: "FETCH_FAVORITESONGS_ERROR"
});