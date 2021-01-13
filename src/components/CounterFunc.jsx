import React, { useState } from "react";

const Counter = (props) => {
    // count is a variable , setCount is the setter of that variable, 
    // In this case useState defines the initial value of the count
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        <button className="btn btn-primary" onClick={handleIncrement}>
          Increment
        </button>

        <button className="btn btn-primary" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
