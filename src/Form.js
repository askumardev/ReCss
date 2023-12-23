import React from 'react';
console.log("hello"+ " world from form js");

function Form() {
  return (
    <div className="form_div">
      <h1>Form Page</h1>
      <form>
        <label>Enter your name:
          <input type="text" />
        </label>
      </form>
    </div>
  )
}

export default Form;
//
// import React, { Component }  from 'react';

// import {useState} from 'react';
 
// export default function  ControlledComponent()  {
//   const  [inputValue, setInputValue] =  useState('');

//   const  handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

// return  (
//   <form>
//     <label>Input Value:
//       <input  type="text"  value={inputValue} onChange={handleChange} />
//     </label>
//     <p>Input Value: {inputValue}</p>
//   </form>
// )};