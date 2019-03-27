const songs = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SONGS_SUCCESS": {
      return [...action.data.results.map(searchedItem =>(
        {
          artistName: searchedItem.artistName,
          trackName: searchedItem.trackName,
          previewUrl: searchedItem.previewUrl,
          artworkUrl: searchedItem.artworkUrl100,
          trackPrice: searchedItem.trackPrice,
          trackId: searchedItem.trackId,
          collectionName: searchedItem.collectionName,
          artistViewUrl: searchedItem.artistViewUrl,
          isFavorite: false
        }
      )
      )]
    }
    case "FETCH_SONGS_ERROR": {
      return action.error
    }
    case "SWITCH_FAVORITES_STATE": {
      return [...state.map(song =>{
        if(song.trackId === action.id){
          song.isFavorite = !song.isFavorite;
          return song
        }

        return song
      })]
    }

    default: {
      return state;
    }
  }
};

export default songs;