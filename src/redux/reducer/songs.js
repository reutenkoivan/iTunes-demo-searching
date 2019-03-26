const songs = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SONGS_START": {
      return [];
    }
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
        ))]
    }
    case "FETCH_SONGS_ERROR": {
      return [...action.error];
    }
    case "SET_LIKE_FAVORITES": {
      return state.slice().map(song =>{
        if(song.trackId === action.id){
          song.isFavorite = true;
          return song
        }

        return song
      });
    }
    case "FETCH_FAVORITESONGS_START": {
      return [];
    }
    case "FETCH_FAVORITESONGS_SUCCESS": {
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
          isFavorite: true
        }
      ))]
    }
    case "FETCH_FAVORITESONGS_ERROR": {
      return action.error
    }

    default: {
      return state;
    }
  }
};

export default songs;