import React from "react";
function Cars(props) {
 return (
  <div>
     <h1>Car Collection 2023:</h1>
     {props.cars.map((car) => {
       return (
         <div key={car.id}>
           <h2>{car.name}</h2>
            <p>{car.body}</p>
         </div>
       );
     })}
   </div>
 );
}
export default Cars;