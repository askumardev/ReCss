import React from 'react';
import { useState } from 'react';

function Counter() {
  const[count, setCount] = useState(0);
  const [value, setValue] = useState(100);
  const [color, setColor] = useState();

  const handleClick = () => {
    if (value === 100){
      setValue(101);
      setColor('red');
    }else{
      setValue(100);
      setColor();
    }
  };
  return (
    <div>
      <button style={{ backgroundColor: color}} onClick={handleClick}>{value}</button><br></br>
      <button onClick={() => {setCount(count+1)}}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => {setCount(count-1)}}>Decrement</button>
    </div>
  )
}

export default Counter;