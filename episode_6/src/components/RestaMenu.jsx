import { useEffect, useState } from "react";
import { useParams } from "react-router";

const RestaMenu = () => {
  const { resId } = useParams();

  const [state, setState] = useState(null);
  const [valueOne, setValueOne] = useState([]);
  const [valueTwo, setValueTwo] = useState([]);

  const fetchRestatMenu = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0414192&lng=77.010272&restaurantId=" +
          resId
      );
      const jsonData = await response.json();
      // console.log(jsonData?.data);
      setState(jsonData?.data);
      setValueOne(jsonData?.data);
      setValueTwo(
        jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchRestatMenu();
  }, []);

  return valueOne.length !== 0 && valueTwo.length !== 0 ? (
    <>
      <div className="menu">
        <h1>{valueOne?.cards[0]?.card?.card?.text}</h1>
        <h3>
          {valueOne?.cards[2]?.card?.card?.info?.areaName},{" "}
          {valueOne?.cards[2]?.card?.card?.info?.locality},{" "}
          {valueOne?.cards[2]?.card?.card?.info?.city}
        </h3>
        <h3>{valueOne?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
        <h3>{valueOne?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h3>
        <h3>{valueOne?.cards[2]?.card?.card?.info?.avgRating}</h3>
        <h3>{valueOne?.cards[2]?.card?.card?.info?.sla.deliveryTime}</h3>
        <h3>{valueOne?.cards[2]?.card?.card?.info?.sla.maxDeliveryTime}</h3>
        <h3>{valueOne?.cards[2]?.card?.card?.info?.sla.minDeliveryTime}</h3>
        <h3>
          {valueTwo.map((e, i) => {
            if (e?.card?.card?.title !== undefined) {
              return (
                <div key={i} className="">
                  <h3>{e?.card?.card?.title}</h3>
                </div>
              );
            }
          })}
        </h3>
      </div>
    </>
  ) : (
    <h1>loading...</h1>
  );
};

export default RestaMenu;
