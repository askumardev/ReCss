const myDefaultFun = (param1, param2) => {
  const user = {
    name: "askumar",
    rank: 2,
    addr: "banglore",
    greet() {
      console.log("greeting from user...");
      console.log("Living in "+this.addr);
    }
  }
  console.log(user);

  console.log('Hello from the default function with Params: ${param1}, ${param2}');
  console.log(user.rank);
  user.greet();
};

export default myDefaultFun;