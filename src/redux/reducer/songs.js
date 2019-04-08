const songs = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SONGS_SUCCESS": {
      return [...action.data]
    }
    case "SWITCH_FAVORITES_STATE": {
      if(state.some(song => song.trackId === action.id))
      return [...state.map(song =>{
        if(song.trackId === action.id){
          song.isFavorite = !song.isFavorite;
          return song
        }

        return song
      })];

      return state
    }
    case "FETCH_SONGS_ERROR":{
      return [action.error];
    }
    default: {
      return state;
    }
  }
};

export default songs;