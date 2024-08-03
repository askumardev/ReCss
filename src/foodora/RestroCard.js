import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};


const RestroCard = (props) => {
  const {resData} = props;
  console.log(resData);
  const {
    imageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData.data;
  return (
    <div className="res-card" style={styleCard}>
      <img className="resLogo" alt="resLogo" src={CDN_URL + "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png"} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h5>₹{costForTwo / 100} for 2</h5>
      <h5>{deliveryTime} mins</h5>
    </div>
  );
};

export default RestroCard;
