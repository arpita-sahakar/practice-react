import React, { useState } from "react";
//This says that we will use State Hook for the current component

const CounterFunc = (props) => {
  //Below the first index of array is variable whose state we want to capture
  //second is a function to update the variable
  const [count, setCount] = useState(0);

  // handleIncrement increments this.state.count by 1
  const handleIncrement = () => {
    // We always use the setState method to update a component's state
    setCount(count + 1);
  };

  const handleDecrement = () => {
    // We always use the setState method to update a component's state
    setCount(count - 1);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">
        Click Counter!
      </div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        <button className="btn btn-primary" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn btn-danger" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterFunc;
