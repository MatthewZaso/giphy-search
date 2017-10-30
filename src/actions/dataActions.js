export function search(query) {
  return {
    type: "SEARCH",
    payload: query
  };
}

export function selectGif(id) {
  return {
    type: "SELECT_GIF",
    payload: id
  };
}