import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RESTAURTANT_MENU_DATA } from "../../utils/constants";
import useFetchRestaMenu from "../../utils/useFetchRestatMenu";

const RestaMenu = () => {
  const { resId } = useParams();

  const data = useFetchRestaMenu(RESTAURTANT_MENU_DATA, resId);

  if (data === null) return <h1>loading...</h1>;

  const { areaName, locality, city, costForTwoMessage, cuisines, avgRating, sla } = data?.cards[2]?.card?.card?.info;

  const { text } = data?.cards[0]?.card?.card

  return (
    <>
      <div className="menu">
        <h1>{text}</h1>
        <h3>
          {areaName},{" "}
          {locality},{" "}
          {city}
        </h3>
        <h3>{costForTwoMessage}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating}</h3>
        <h3>{sla.deliveryTime}</h3>
        <h3>{sla.maxDeliveryTime}</h3>
        <h3>{sla.minDeliveryTime}</h3>
      </div>
    </>
  );
};

export default RestaMenu;
