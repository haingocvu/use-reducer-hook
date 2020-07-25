import React, { useReducer } from "react";

function init(initialCount) {
  return {
    count: initialCount,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  function handleIncrement() {
    dispatch({
      type: "increment",
    });
  }
  function handleDecrement() {
    dispatch({
      type: "decrement",
    });
  }
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span style={{ margin: "0px 10px" }}> Count: {state.count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
