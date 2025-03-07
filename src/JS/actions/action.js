import { DECREMENT, INCREMENT } from "../actionTypes/actionTypes";

//l'action increment 
export const increment = () => {
  return { type: INCREMENT };
};


//l'action decrement
export const decrement = () => {
  return { type: DECREMENT };
};
