const promptFun = () => {
  const pwd = prompt("Enter password");
  if (pwd === "Hello"){
    console.log("You entered Hello");
  } else if(pwd === "hello"){
    console.log("You entered hello");
  } else{
    console.log("Wrong pwd");
  }

  const arr = [1,2,3];
  for( const item of arr) {
    console.log(item);
  }
}

export default promptFun;