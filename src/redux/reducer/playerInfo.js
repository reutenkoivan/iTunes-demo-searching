const initialState = {
  trackLink: "",
  isPlaying: false,
  trackId: 0,
  artistName: "",
  trackName: "",
  playlist: [],
  index: 0
};

const playerInfo = (state = initialState, action) => {
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
      newObj.next = newObj.index === action.playlist.length-1 ? 0 : newObj.index + 1;
      newObj.previous = newObj.index === 0 ? action.playlist.length-1 : newObj.index - 1;

      return newObj
    }
    default: {
      return state;
    }
  }
};

export default playerInfo;
