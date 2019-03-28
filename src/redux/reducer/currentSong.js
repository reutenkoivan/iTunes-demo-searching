const currentSong = (state = "", action) => {
  switch (action.type) {
    case "ADD_SONG_SUCCESS": {
      return action.link
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
