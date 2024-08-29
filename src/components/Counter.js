import React, { useState } from 'react';
import './Counter.css';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [parity, setParity] = useState((initialCount % 2 == 0) ? 'GENAP' : 'GANJIL')

  const incrementCount = () => {
    setCount(count + 1);
    checkParity();
  };

  const decrementCount = () => {
    setCount(count - 1);
    checkParity();
  };

  const checkParity = () => {
    setParity((count % 2 == 0) ? 'GENAP' : 'GANJIL');
  }



  return (
    <div className="counter">
      <p className={parity}>Count: <span style={{fontSize: `${((count > 1) ? count : 1)*5}px`}}>{count}</span></p>
      <div>
        <button onClick={decrementCount}>-</button>
        <p className={parity}>{parity}</p>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
};

export default Counter;
