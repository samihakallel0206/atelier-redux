//import
import { DECREMENT, INCREMENT } from "../actionTypes/actionTypes";

//Initialisation
const initialState = {
  counter: 0,
};

//Pure function

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // dans le cas où laction est INCREMENT
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : state.counter,
      };

    default:
      return state;
  }
};

export default counterReducer;
