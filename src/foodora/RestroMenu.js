import { useEffect } from "react";
import { MENU_API } from "../utils/constants";

const RestroMenu = () => {
  useEffect(() => {
    console.log("useEffect");
    //fetchData();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API);
    const json = await data.json();
    console.log(json.data);
  };
  return (
    <div className="menu">      
      <h1>Restro menu Page</h1>
        <ul>
          <li>Pizza</li>
          <li>Coke</li>
          <li>Burger</li>
          <li>Juice</li>

        </ul>
    </div>
  );
};

export default RestroMenu;

//http://localhost:4000/restaurants/405798