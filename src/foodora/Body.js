import RestroCard from "./RestroCard";
import { restroList } from "../utils/constants";
import { BASE_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";


const Body = () => {
  console.log("Body");
  // const [listOfRestros, setListOfRestros] = useState(restroList);
  // const [filteredlistOfRestros, setfilteredlistOfRestros] = useState(restroList);

  const [listOfRestros, setListOfRestros] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //let listOfRestros = restroList;
  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch(BASE_URL);

    const json = await data.json();
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //listOfRestros = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    //console.log(listOfRestros);
    setListOfRestros(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );


  return listOfRestros.length === 0 ? (<Shimmer />) : (
    <div className="body">
      
      <div className="filter flex">
        <div className="searchBox m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="searchBtn px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={()=>{
            const filteredData = listOfRestros.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log(filteredData);
            const filteredRestaurant = listOfRestros.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button className="filterBtn px-4 py-2 bg-gray-100 rounded-lg" 
            onClick={() => {
            console.log("Button clicked...");
            filteredList = listOfRestros.filter(
              (res) => res.info.avgRating >= 4.4
            );
            console.log(filteredList);
            setFilteredRestaurant(filteredList);
          }}>
          Top Restaurants
          </button>
        </div>       
      </div>
      
      <div className="restro-container flex flex-wrap m-4">
        {filteredRestaurant.map((rest,index) => (
          <RestroCard key={rest?.info.id} resData={rest} />
          ))}
      </div>
    </div>
  );
};


export default Body;