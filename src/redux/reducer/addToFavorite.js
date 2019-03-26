const addToFavorite = (state = false, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE_START": {
      return false;
    }
    case "ADD_TO_FAVORITE_SUCCESS": {
      return true
    }
    case "ADD_TO_FAVORITE_ERROR": {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default addToFavorite;
