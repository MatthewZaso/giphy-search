const DataReducers = (state, action) => {
  switch (action.type) {
    case "SELECT_GIF":
      state = Object.assign({}, state, {
        selected: action.payload,
      });
    break;
    case "SEARCH":
      state = Object.assign({}, state, {
        search: action.payload,
      });
    break;
  }
  return state;
};

export default DataReducers;