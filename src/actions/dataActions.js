export function updateGifData(newData) {
  return {
    type: "UPDATE_DATA",
    payload: newData
  };
}

export function selectGif(id) {
  return {
    type: "SELECT_GIF",
    payload: id
  };
}

export function addGifData(gifDataArray) {
  return {
    type: "ADD_DATA",
    payload: gifDataArray
  };
}