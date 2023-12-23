import React from 'react';

import Home from './Home';
import Form from './Form';
import { def as content } from './utils1.js';
// import { abc, apiKey} from './utils.js';
import myDefaultValue from './utils.js';
import * as util from './utils.js';
import './main.css';

// console.log(abc);
// console.log(apiKey);
// console.log(myDefaultValue);

console.log(util.abc);
console.log(util.apiKey);
console.log(myDefaultValue);
console.log(content); //Alias name

function App() {
  return (
    <div className="main_div">
      <h1>Hello React!...</h1>      
      <sub> from App.js</sub>
      <Home />
      <Form />
    </div>
  );
}

export default App;
