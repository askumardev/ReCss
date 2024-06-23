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

// import React, { useState } from "react";

// import Wrapper from "./components/Wrapper";
// import Screen from "./components/Screen";
// import ButtonBox from "./components/ButtonBox";
// import Button from "./components/Button";

// const btnValues = [
//   ["C", "+-", "%", "/"],
//   [7, 8, 9, "X"],
//   [4, 5, 6, "-"],
//   [1, 2, 3, "+"],
//   [0, ".", "="],
// ];

// const toLocaleString = (num) =>
//   String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

// const removeSpaces = (num) => num.toString().replace(/\s/g, "");

// const App = () => {
//   let [calc, setCalc] = useState({
//     sign: "",
//     num: 0,
//     res: 0,
//   });

//   const numClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     if (removeSpaces(calc.num).length < 16) {
//       setCalc({
//         ...calc,
//         num:
//           calc.num === 0 && value === "0"
//             ? "0"
//             : removeSpaces(calc.num) % 1 === 0
//             ? toLocaleString(Number(removeSpaces(calc.num + value)))
//             : toLocaleString(calc.num + value),
//         res: !calc.sign ? 0 : calc.res,
//       });
//     }
//   };

//   const comaClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;

//     setCalc({
//       ...calc,
//       num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
//     });
//   };

//   const signClickHandler = (e) => {
//     setCalc({
//       ...calc,
//       sign: e.target.innerHTML,
//       res: !calc.res && calc.num ? calc.num : calc.res,
//       num: 0,
//     });
//   };

//   const equalsClickHandler = () => {
//     if (calc.sign && calc.num) {
//       const math = (a, b, sign) =>
//         sign === "+"
//           ? a + b
//           : sign === "-"
//           ? a - b
//           : sign === "X"
//           ? a * b
//           : a / b;

//       setCalc({
//         ...calc,
//         res:
//           calc.num === "0" && calc.sign === "/"
//             ? "Can't divide with 0"
//             : toLocaleString(
//                 math(
//                   Number(removeSpaces(calc.res)),
//                   Number(removeSpaces(calc.num)),
//                   calc.sign
//                 )
//               ),
//         sign: "",
//         num: 0,
//       });
//     }
//   };

//   const invertClickHandler = () => {
//     setCalc({
//       ...calc,
//       num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
//       res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
//       sign: "",
//     });
//   };

//   const percentClickHandler = () => {
//     let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
//     let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;
//     setCalc({
//       ...calc,
//       num: (num /= Math.pow(100, 1)),
//       res: (res /= Math.pow(100, 1)),
//       sign: "",
//     });
//   };

//   const resetClickHandler = () => {
//     setCalc({
//       ...calc,
//       sign: "",
//       num: 0,
//       res: 0,
//     });
//   };

//   return (
//     <Wrapper>
//       <Screen value={calc.num ? calc.num : calc.res} />
//       <ButtonBox>
//         {btnValues.flat().map((btn, i) => {
//           return (
//             <Button
//               key={i}
//               className={btn === "=" ? "equals" : ""}
//               value={btn}
//               onClick={
//                 btn === "C"
//                   ? resetClickHandler
//                   : btn === "+-"
//                   ? invertClickHandler
//                   : btn === "%"
//                   ? percentClickHandler
//                   : btn === "="
//                   ? equalsClickHandler
//                   : btn === "/" || btn === "X" || btn === "-" || btn === "+"
//                   ? signClickHandler
//                   : btn === "."
//                   ? comaClickHandler
//                   : numClickHandler
//               }
//             />
//           );
//         })}
//       </ButtonBox>
//     </Wrapper>
//   );
// };

// export default App;
