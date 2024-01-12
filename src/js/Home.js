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

function cal(a,b,c) {
  let d = a * b / c;
  console.log(d);
}
cal(10,4,2);

class User {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
  }
  sample(){
    console.log("sample method in User class...");
  }
}
const user1 = new User("asfd",3);
console.log(user1);
user1.sample();

const arr = ["One","Two","Three","Four"]
console.log(arr[2]);
arr.push("Five");
console.log(arr);
const index = arr.findIndex((item) => {
  return item === "Three";
});
// const index = arr.findIndex((item) => item === "Three");
console.log(index);

const newArr = arr.map((item) => item + "!")
console.log(newArr);

const Home = () => (
  <div className="home_div">
    <h2>This is from Home Page</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros.
    </p>
  </div>
);

export default Home;