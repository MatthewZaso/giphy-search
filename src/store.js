import { createStore } from "redux";
import data from "./reducers/DataReducers";

export default createStore(data, {
	selected: false,
});