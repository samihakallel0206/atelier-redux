import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../JS/actions/action";

const Counter = () => {
  //hook pour se servir du state
  const counter = useSelector((state) => state.counter);
  // console.log(counter);
  // hook pour dispatcher les action
  const dispatch = useDispatch();
  return (
    <div className="m-10">
      <button
        className="border border-gray-200 p-2 m-4 text-lg rounded-lg font-medium text-teal-900 bg-teal-50 hover:bg-teal-100"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <p className="font-semibold text-3xl text-teal-700">{counter}</p>
      <button
        className="border border-gray-200 p-2 m-4 text-lg rounded-lg font-medium text-teal-900 bg-teal-50 hover:bg-teal-100"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
