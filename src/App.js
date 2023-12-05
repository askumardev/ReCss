import React from 'react';

import Home from './Home';
import Form from './Form';
import './main.css';

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
