import { createStore } from "redux";
import counterReducer from "../Reducer/reducer";

const store = createStore(counterReducer);

export default store;
