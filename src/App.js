import React from "react";
//import React, { Component } from "react";

import Home from './Home';
import Form from './Form';
import './main.css';
import  myDefaultFunction  from './utils1.js';
import myDefaultFun from './defaultfunction.js';
import arrayFun from './array.js';
//import SampleContainer from './components/sample.js'

myDefaultFunction();
myDefaultFun("param1", "param2");
arrayFun();

console.log('hello world from app.js');
let msg = "some msg";
let userMessage = "some user msg";
const constMsg = "some const msg"; // cannot update values

console.log(msg);
msg = "new msg";
console.log(msg);
console.log(userMessage);
console.log(constMsg);


function App() {
  // <SampleContainer />
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
