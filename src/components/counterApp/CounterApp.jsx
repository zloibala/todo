import React, { useState } from "react";
import "./counterApp.style.css";

const CounterApp = (e) => {
  const [count, setCount] = useState(0);
  //   const [maxNumber] = useState(100);

  const decrementValue = () => {
    if (count > 0) setCount(count - 10);
    else return;
  };
  const incrementValue = () => {
    if (count < 100) setCount(count + 10);
    else return;
  };

  //   const onChangeHandler = (e) => {
  //     setCount(e.target.value);
  //   };
  return (
    <div>
      <button onClick={decrementValue}> -10 </button>
      <h1> {count}</h1>
      <button onClick={incrementValue}> +10 </button>
      {count === 100 && <h1> You reached you max </h1>}
    </div>
  );
};

export default CounterApp;
