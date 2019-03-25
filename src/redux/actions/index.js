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
