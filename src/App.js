import React, { useState } from 'react';
import './styles/main.css';
import Counter from './js/Counter';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const handleEqual = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="App">
      <div className="main_div">
        <Counter />
      </div>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result !== null ? result : ''}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClear()}>C</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleEqual()}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;


// // import React from "react";
// // import { useState } from "react";
// // //import React, { Component } from "react";

// // import Home from './js/Home';
// // import Form from './js/Form';
// // import Counter from './js/Counter';
// // import './styles/main.css';
// // import  myDefaultFunction  from './js/utils1.js';
// // import myDefaultFun from './js/defaultfunction.js';
// // import arrayFun from './js/array.js';
// // import promptFun from './js/prompt.js';
// // //import SampleContainer from './components/sample.js'

// // myDefaultFunction();
// // myDefaultFun("param1", "param2");
// // arrayFun();
// // promptFun();

// // console.log('hello world from app.js');
// // let msg = "some msg";
// // let userMessage = "some user msg";
// // const constMsg = "some const msg"; // cannot update values

// // console.log(msg);
// // msg = "new msg";
// // console.log(msg);
// // console.log(userMessage);
// // console.log(constMsg);


// // function App() {
// //   const [count, setCount] = useState(0);
// //   // <SampleContainer />
// //   return (
// //     <div className="main_div">
// //       <h1>Hello React!...</h1>      
// //       // <sub> from App.js</sub>
// //       // <Home />
// //       // <Form />
// //       // <Counter />
// //     </div>
// //   );
// // }

// // export default App;
