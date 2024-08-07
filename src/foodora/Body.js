import RestroCard from "./RestroCard";
import { restroList } from "../utils/constants";
import { BASE_URL } from "../utils/constants";
import { useState, useEffect } from "react";


const Body = () => {
  const [listOfRestros, setListOfRestros] = useState(restroList);
  //let listOfRestros = restroList;
  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch(BASE_URL);

    const json = await data.json();
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle);
    //listOfRestros = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    //console.log(listOfRestros);
    //setListOfRestros(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

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