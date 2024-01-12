import React from 'react';
import {useState} from 'react';
console.log("hello" + " world from form js");

function Form() {
  const [text, setText] = useState();

  const  handleChange = (event) => {
    setText(event.target.value);
  };

  const  handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form_div">
      <p>{text}</p>
      <form onSubmit={handleSubmit}>
        <label>Enter name:
          <input type="text" placeholder="Enter name" onChange={handleChange}  />
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