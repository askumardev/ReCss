import React, { useEffect, useState } from 'react';
import { getData, postData } from './js/apiService';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handlePostData = async () => {
    const dataToSend = { key: 'value' };
    try {
      const result = await postData(dataToSend);
      console.log('Data posted successfully', result);
    } catch (error) {
      console.error('Error posting data', error);
    }
  };

  return (
    <div className="App">
      <h1>API Data</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handlePostData}>Post Data</button>
    </div>
  );

  
}

export default App;

// import React from "react";
// import { useState } from "react";
// //import React, { Component } from "react";

// import Home from './js/Home';
// import Form from './js/Form';
// import Counter from './js/Counter';
// import './styles/main.css';
// import  myDefaultFunction  from './js/utils1.js';
// import myDefaultFun from './js/defaultfunction.js';
// import arrayFun from './js/array.js';
// import promptFun from './js/prompt.js';
// //import SampleContainer from './components/sample.js'

// myDefaultFunction();
// myDefaultFun("param1", "param2");
// arrayFun();
// promptFun();

// console.log('hello world from app.js');
// let msg = "some msg";
// let userMessage = "some user msg";
// const constMsg = "some const msg"; // cannot update values

// console.log(msg);
// msg = "new msg";
// console.log(msg);
// console.log(userMessage);
// console.log(constMsg);


// function App() {
//   const [count, setCount] = useState(0);
//   // <SampleContainer />
//   return (
//     <div className="main_div">
//       <h1>Hello React!...</h1>      
//       // <sub> from App.js</sub>
//       // <Home />
//       // <Form />
//       // <Counter />
//     </div>
//   );
// }

// export default App;
