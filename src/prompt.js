const promptFun = () => {
  //const pwd = prompt("Enter password");
  const pwd = "123";
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

  function handleTimeout1() {
    console.log("Timed Out...");
  }
   
  function handleTimeout2() {
    console.log("Timed Out...again");
  }
   
  setTimeout(handleTimeout1, 1000);
  setTimeout(handleTimeout2, 2000);
  setTimeout(() => {
    console.log("Timed Out...again...more");
  }, 4000);
}

export default promptFun;