import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RESTAURTANT_MENU_DATA } from "../../utils/constants";
import useFetchRestaMenu from "../../utils/useFetchRestatMenu";
import { RestaCategories } from "./RestaCategories";

// uncontrolled component
const RestaMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const data = useFetchRestaMenu(RESTAURTANT_MENU_DATA, resId);

  if (data === null) return <h1>loading...</h1>;

  const categories = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  // console.log(categories);

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
        <h3>costForTwoMessage - {costForTwoMessage}</h3>
        <h3>cuisines - {cuisines?.join(", ")}</h3>
        <h3>avgRating - {avgRating}</h3>
      </div>
      {categories.map((c, index) => {
        return (
          <div className="" key={c?.card?.card?.id ? c?.card?.card?.id : c?.card?.card?.categoryId}>
            {/* lifting the state up */}
            {/* at a time only one accordion should be expanded */}
            <RestaCategories
              title={c?.card?.card?.title}
              itemCards={c?.card?.card?.itemCards}
              showAccordion={index === showIndex ? true : false}
              setShowIndex={setShowIndex}
              // setShowIndex={() => setShowIndex(index)}
              index={index}
            />
          </div>
        )
      })}
    </>
  );
};

export default RestaMenu;
