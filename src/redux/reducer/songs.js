const songs = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SONGS_SUCCESS": {
      return [...action.data.data.results.map(searchedItem =>(
        {
          artistName: searchedItem.artistName,
          trackName: searchedItem.trackName,
          previewUrl: searchedItem.previewUrl,
          artworkUrl: searchedItem.artworkUrl100,
          trackPrice: searchedItem.trackPrice,
          trackId: searchedItem.trackId,
          collectionName: searchedItem.collectionName,
          artistViewUrl: searchedItem.artistViewUrl,
          isFavorite: action.data.isFavorite
        }
      )
      )]
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
      return action.error
    }
    default: {
      return state;
    }
  }
};

export default songs;