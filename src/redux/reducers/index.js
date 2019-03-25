const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SONGS_START": {
      return [];
    }
    case "FETCH_SONGS_SUCCESS": {
      return [
        ...action.data.map(elem => ({
          results: elem.results.map(item => JSON.parse(item))
        }))
      ];
    }
    case "FETCH_SONGS_ERROR": {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default reducer;