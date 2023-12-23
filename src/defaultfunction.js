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

  function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    const newArr = numberArray.map((item) => ({val: item}));
    console.log(newArr);
  }
  transformToObjects([1,2,3])

  const [first, last] = ["Ram", "Kumar"];
  console.log(first);
  console.log(last);

  const {first: firstName, lastName} = {
    first:"askumar",
    lastName: "sklm"
  };
  console.log(firstName); 
  console.log(lastName);

  const arr1 =["one", "two"];
  const arr2 = ["three"];

  const newArray = [...arr1, ...arr2];
  console.log(newArray);

  const adminUser ={
    isAdmin: true,
    ...user
   }
   console.log(adminUser);
};

export default myDefaultFun;