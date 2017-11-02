const DataReducers = (state, action) => {
  switch (action.type) {
    case "SELECT_GIF":
      state = Object.assign({}, state, {
        selected: action.payload,
      });
    break;
    case "UPDATE_DATA":
      state = Object.assign({}, state, {
        gifData: action.payload,
      });
    break;
    case "ADD_DATA":
      state = Object.assign({}, state, {
        gifData: state.gifData.concat(action.payload),
      });
    break;
  }
  return state;
};

export default DataReducers;