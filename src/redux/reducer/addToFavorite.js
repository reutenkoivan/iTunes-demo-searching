const addToFavorite = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE_SUCCESS": {
      return []
    }
    case "ADD_TO_FAVORITE_ERROR": {
      return action.error;
    }
    default: {
      return state;
    }
  }
};

export default addToFavorite;
