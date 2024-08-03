import RestroCard from "./RestroCard";
import { restroList } from "../utils/constants";
import { useState } from "react";


const Body = () => {
  const [listOfRestros, setListOfRestros] = useState([restroList[0],restroList[1]]);
  //let listOfRestros = restroList;
  
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className="filterBtn" 
          onClick={() => {
            console.log("Button clicked...");
            filteredList = listOfRestros.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(filteredList);
            setListOfRestros(filteredList);
          }}>
          Top Restaurants
        </button>
      </div>
      <div className="restro-container">
        {listOfRestros.map((rest,index) => (
          <RestroCard key={rest.data.id} resData={rest} />
          ))}
      </div>
    </div>
  );
};


export default Body;