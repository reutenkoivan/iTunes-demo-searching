const rootPath = (state = "", action) => {
  switch (action.type) {
    case "ADD_ROOT_PATH": {
      return `${action.path}/`
    }
    default: {
      return state;
    }
  }
};

export default rootPath;
