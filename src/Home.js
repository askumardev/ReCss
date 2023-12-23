import React from 'react';

function add() {
  console.log(10+5);
}
add();

function greet(msg="HELLO", user) {
  // console.log(msg);
  // console.log(user);
  // console.log(msg+" "+user);
  return "i am "+ user;
}
const hello = greet("adios","ask");
console.log(hello);
// greet("hello","kumar");
// greet(" ","kumar");

const Home = () => (
  <div className="home_div">
    <h1>This is from Home Page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros.
    </p>
  </div>
);

export default Home;