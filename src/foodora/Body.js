import RestroCard from "./RestroCard";
import { restroList } from "../utils/constants";



const Body = () => {
  let listOfRestros = restroList;
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className="filterBtn" 
          onClick={() => {
            console.log("Button clicked...");
            listOfRestros = listOfRestros.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(listOfRestros);
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