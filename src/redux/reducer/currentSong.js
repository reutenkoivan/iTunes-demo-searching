const initialState = {
  trackLink: "",
  isPlaying: false,
  trackId: 0,
  artistName: "",
  trackName: "",
  playlist: [],
  index: 0
};

const currentSong = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SONG_SUCCESS": {
      const newObj = Object.assign({}, state);
      newObj.trackLink = action.song.previewUrl;
      newObj.trackId = action.song.trackId;
      newObj.isPlaying = action.song.previewUrl === state.trackLink ? !state.isPlaying : true;
      newObj.artistName = action.song.artistName;
      newObj.trackName = action.song.trackName;
      newObj.playlist = action.playlist;
      newObj.index = action.playlist.findIndex(listItem => listItem.trackId === action.song.trackId);

      return newObj
    }
    case "ADD_SONG_ERROR": {
      return action.error;
    }
    default: {
      return state;
    }
  }
};

export default currentSong;
